<template lang="pug">
v-app
  v-main
    .full-height(ref="mainwindow")
      .board-page(@wheel='onScroll', @scroll='onScroll')
        board-app-bar(
          :boardName='boardInfo.name',
          @config='onConfig',
          @to-back='toBack'
        )
        shortcut-buttons(@redo='redo', @undo='undo')
        board-menu-bar(
          @config='onConfig'
          @undo='undo', @redo='redo'
          @switch-mode='switchMode'
          @open-user-dialog='openUserDialog'
          :mode='mode'
          :boardInfo='boardInfo'
          :editable='editable'
          :notJoinMembers="notJoinMembers"
          :boardSize='boardSize'
        )
        shared-board(
          :boardInfo='boardInfo',
          :editable='editable',
          :sharedItems='sharedItems',
          :dragin='itemDrag && sharedBoardMouseIn',
          :transform='sharedBoardTransform',
          :selectedItems='selectedSharedItems',
          :mode='mode',
          :boardSize='boardSize',
          @mouseenter='setSharedBoardMouseIn',
          @item-changed='onSharedItemChanged',
          @items-changed='onSharedSelectedItemsChanged',
          @remove-selected-items='removeSelectedItems',
          @transform-changed='changeTransform',
          @selected-changed='changeSharedSelectedItems'
        )
        stock-view(
          :boardInfo='boardInfo',
          :editable='editable',
          style='float:right; top:8px; right:8px; position:absolute;',
          v-model='stockItems',
          @add-stock-item='addStockItem',
          @add-item-shortkey='addStockItem(lastAddColor)',
          @send-item='sendItem',
          @change-color='changeStockCardColor',
          @drag='setDrag',
          @delete-stock-card='deleteStockCard',
          @undo='undoStockView',
          @item-changed='onStockItemChanged',
          @item-focus='onFocusItem'
        )
        edit-board-dialog(
          v-model='showEditBoardDialog',
          :boardInfo='boardInfo',
          @close='showBoardEditDialog = false',
          @save='onBoardEdit',
          v-if='editable'
        )
        edit-board-dialog(
          v-if="editable"
          v-model="showEditBoardDialog"
          :boardInfo="boardInfo"
          :isAdmin='isAdmin'
          @close="showBoardEditDialog=false"
          @save="onBoardEdit"
          @remove-board="removeBoard"
        )
        members-dialog(
          v-model='showMemberDialog'
          :isApprovalrequired='boardInfo.invite.is_approval_required'
          :permissions='boardInfo.permissions'
          :inviteUrl='inviteUrl'
          :isAdmin='isAdmin'
          @remove-permission="removePermission"
          @change-permission="changePermission"
          @send-email="sendInviteEmail"
          @request-update="updateBoard"
          @create-invite-url="createInviteUrl"
          @change-board-invite-setting='changeBoardInviteSetting'
        )

</template>
<script>
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid"; // 不変なユニークなキーを設定できる物
import { mapGetters } from "vuex";
import Const from "~/libs/const";
import StockView from "~/components/boards/stock-view/StockView";
import ShortcutButtons from "~/components/common/ShortcutButtons";
import SharedBoard from "~/components/boards/shared-view/SharedBoard";
import BoardMenuBar from "~/components/boards/BoardMenuBar";
import BoardAppBar from "~/components/boards/BoardAppBar";
import CommandStockCardDelete from "~/libs/commands/command-stock-card-delete";
import CommandStockCardSet from "~/libs/commands/command-stock-card-set";
import CommandSharedCardsDelete from "~/libs/commands/command-shared-cards-delete";
import CommandSharedCardSet from "~/libs/commands/command-shared-card-set";
import CommandSharedCardsSet from "~/libs/commands/command-shared-cards-set";
import command from "~/mixins/command";
import EditBoardDialog from "~/components/dialog/EditBoardDialog";
import extensions from "~/mixins/extensions";
import MembersDialog from "~/components/dialog/MembersDialog";

const minTransformScale = 10 / 16 / Const.fontSize.small;

export default {
  layout: "simple-layout",
  components: {
    StockView,
    SharedBoard,
    ShortcutButtons,
    BoardMenuBar,
    BoardAppBar,
    EditBoardDialog,
    MembersDialog,
  },
  mixins: [command, extensions],
  async asyncData(context) {
    await context.store.dispatch("boards/fetchBoard", {
      id: context.route.params.id,
    });
    await context.store.dispatch("boards/updateBoardAccess", {
      boardId: context.route.params.id,
    });
    const boardInfo =
      context.store.getters["boards/boards"][context.route.params.id];
    const firebaseUid = context.store.getters["user/firebaseUid"];
    const ownPermission = boardInfo.permissions.find(
      (iv) => iv.user_id === firebaseUid
    );
    const editable =
      ownPermission !== undefined &&
      (Number(ownPermission.role) === Const.ROLE_EDITOR ||
        Number(ownPermission.role) === Const.ROLE_ADMIN);

    const isAdmin =
      ownPermission !== undefined &&
      Number(ownPermission.role) === Const.ROLE_ADMIN;

    return { boardInfo, ownPermission, editable, isAdmin };
  },
  data: () => ({
    stockItems: [],
    sharedItems: [],
    firebaseUsers: [],
    firebaseRequestUsers: [],
    selectedSharedItems: [],
    lastFocusStockItem: {},
    itemDrag: false,
    mode: "select",
    sharedBoardMouseIn: false,
    showEditBoardDialog: false,
    sharedBoardTransform: { x: 0.0, y: 0.0, scale: 0.8 },
    boardSize: { width: 0, height: 0 },
    email: "",
    showMemberDialog: false,
  }),
  computed: {
    boardCollection() {
      return this.db.collection(`boards/${this.$route.params.id}/cards`);
    },
    usersCollection() {
      return this.db.collection(`boards/${this.$route.params.id}/users`);
    },
    requestUsersCollection() {
      return this.db.collection(`boards/${this.$route.params.id}/requestUsers`);
    },
    lastAddColor() {
      return this.lastFocusStockItem && this.lastFocusStockItem.color
        ? this.lastFocusStockItem.color
        : "cyan lighten-4";
    },
    indexInsertStockItem() {
      let ret = 0;
      if (this.stockItems.length > 0) {
        ret = this.stockItems.findIndex(
          (item) => item.id === this.lastFocusStockItem.id
        );
        if (ret < 0) {
          ret = this.stockItems.length;
        } else {
          ret += 1;
        }
      }
      return ret;
    },
    board() {
      return this.boards[this.$route.params.id];
    },
    boardName() {
      const ret = this.board ? this.board.name : "";
      return ret;
    },
    inviteUrl() {
      if (this.boardInfo.invite) {
        const token = this.boardInfo.invite.token;
        const inviteId = this.boardInfo.invite.id;
        const boardId = this.boardInfo.id;
        return this.$env.makeFrontUrl(
          `/boards/${boardId}/invites/${inviteId}?token=${token}`
        );
      }
      return "";
    },
    notJoinMembers() {
      const ret = [];
      this.firebaseRequestUsers.forEach((userId) => {
        if (!this.firebaseUsers.includes(userId)) {
          ret.push(userId);
        }
      });
      return ret;
    },
    ...mapGetters({
      boards: "boards/boards",
      firebaseUid: "user/firebaseUid",
    }),
  },
  created() {
    this.db = firebase.firestore();
  },
  mounted() {
    window.addEventListener("keydown", this.keyAction);
    this.boardCollection.onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        const id = change.doc.id;
        const data = this.validateItemData(change.doc.data());
        const index = this.sharedItems.findIndex(
          (element) => element.id === id
        );
        if (change.type === "added" || index < 0) {
          this.sharedItems.push(data);
        } else {
          const item = this.sharedItems[index];
          if (change.type === "modified") {
            this.$set(this.sharedItems, index, _.assign(item, data));
          }
          if (change.type === "removed") {
            this.$utils.removeItemFromArrayIndex(this.sharedItems, index);
            this.$utils.removeItemFromArray(this.selectedSharedItems, item.id);
          }
        }
      });
    });
    if (this.isAdmin) {
      this.usersCollection.onSnapshot((querySnapshot) => {
        this.firebaseUsers = [];
        querySnapshot.forEach((doc) => {
          this.firebaseUsers.push(doc.id);
        });
      });
      this.requestUsersCollection.onSnapshot((querySnapshot) => {
        this.firebaseRequestUsers = [];
        querySnapshot.forEach((doc) => {
          this.firebaseRequestUsers.push(doc.id);
        });
      });
    }
    document.documentElement.style.setProperty("overflow", "hidden");

    window.addEventListener("resize", this.handleResize);
    this.$nextTick(() => {
      this.handleResize();
    });
  },

  beforeDestroy() {
    document.documentElement.style.removeProperty("overflow");
  },
  methods: {
    addStockItem(color) {
      const id = uuidv4();
      this.stockItems.splice(this.indexInsertStockItem, 0, {
        createdBy: this.firebaseUid,
        id,
        type: "card",
        text: "",
        focus: true,
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        cardWidth: this.$const.defaults.cardWidth,
        cardHeight: this.$const.defaults.cardHeight,
        cardColor: color,
        fontSize: this.$const.fontSize.medium,
        fontWeight: "bold",
        fontColor: this.$const.defaults.fontColor,
      });
      // pushだとfocusが移動するけど、spliceだとうまく行かなかったので、
      // 次フレームでID指定でfocus()させる
      this.$nextTick(() => {
        const el = document.getElementById(`stock-card-text-area-${id}`);
        el?.focus();
      });
    },
    handleResize() {
      if (this.$refs.mainwindow) {
        this.$set(this.boardSize, "width", this.$refs.mainwindow.clientWidth);
        this.$set(this.boardSize, "height", this.$refs.mainwindow.clientHeight);
      }
    },
    async sendItem(event) {
      const item = this.stockItems.find((item) => item.id === event.clone.id);
      if (item && this.itemDrag && this.sharedBoardMouseIn) {
        const oe = event.originalEvent;
        item.positionX =
          (oe.offsetX - oe.target.clientWidth / 2) /
            this.sharedBoardTransform.scale -
          this.sharedBoardTransform.x;
        item.positionY =
          (oe.offsetY - oe.target.clientHeight / 2) /
            this.sharedBoardTransform.scale -
          this.sharedBoardTransform.y;
        await this.boardCollection.doc(item.id).set(item);
        this.$utils.removeItemFromArrayWithKey(this.stockItems, item, "id");
      }
    },
    switchMode(mode) {
      this.mode = mode;
    },
    setDrag(drag) {
      this.itemDrag = drag;
    },
    setSharedBoardMouseIn(mouse) {
      this.sharedBoardMouseIn = mouse;
    },
    onSharedItemChanged(item) {
      const oldItem = this.sharedItems.find((i) => i.id === item.id);
      this.addCommand(
        new CommandSharedCardSet(this.boardCollection, item, oldItem)
      );
    },
    onSharedSelectedItemsChanged(items) {
      const oldItems = [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const data = this.sharedItems.find((i) => i.id === item.id);
        const oldItem = {};
        const keys = Object.keys(item);
        for (let j = 0; j < keys.length; j++) {
          const key = keys[j];
          oldItem[key] = data[key];
        }
        oldItems.push(oldItem);
      }
      this.addCommand(
        new CommandSharedCardsSet(this.boardCollection, items, oldItems)
      );
    },
    onConfig() {
      this.showEditBoardDialog = true;
    },
    changeTransform(transform) {
      transform.scale = this.$utils.limit(
        transform.scale,
        minTransformScale,
        this.$const.MAX_BOARD_SCALE
      );
      transform.x = this.$utils.limit(
        transform.x,
        this.$const.MIN_BOARD_X,
        this.$const.MAX_BOARD_X
      );
      transform.y = this.$utils.limit(
        transform.y,
        this.$const.MIN_BOARD_Y,
        this.$const.MAX_BOARD_Y
      );
      this.sharedBoardTransform = transform;
    },
    changeStockCardColor(color) {
      this.stockCardColor = color;
    },
    onStockItemChanged(item) {
      const oldItem = this.stockItems.find((i) => i.id === item.id);
      this.addCommand(new CommandStockCardSet(this.stockItems, item, oldItem));
    },
    deleteStockCard(params) {
      this.addCommand(new CommandStockCardDelete(this.stockItems, params));
    },
    onFocusItem(item) {
      this.lastFocusStockItem = item;
    },
    undoStockView() {
      this.undo();
    },
    onScroll(e) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
    changeSharedSelectedItems(selectedItems) {
      this.selectedSharedItems = selectedItems;
    },
    removeSelectedItems() {
      const oldItems = [];
      for (let i = 0; i < this.selectedSharedItems.length; i++) {
        const id = this.selectedSharedItems[i];
        const it = this.sharedItems.find((i) => i.id === id);
        oldItems.push(it);
      }
      this.addCommand(
        new CommandSharedCardsDelete(this.boardCollection, oldItems)
      );
    },
    keyAction(e) {
      if (e.keyCode === 8) {
        if (e.target.tagName.toLowerCase() === "body") {
          this.removeSelectedItems();
        }
      }
    },
    toBack() {
      this.$router.go(-1);
    },
    validateItemData(data) {
      const ret = _.clone(data);
      ret.positionX = ret.positionX || 0;
      ret.positionY = ret.positionY || 0;
      ret.type = ret.type || "card";
      ret.cardWidth = ret.cardWidth || this.$const.defaults.cardWidth;
      ret.cardHeight = ret.cardHeight || this.$const.defaults.cardHeight;
      ret.cardColor = ret.cardColor || this.$const.colors.board[0];
      ret.fontSize = ret.fontSize || this.$const.fontSize.medium;
      ret.fontColor = ret.fontColor || this.$const.defaults.fontColor;
      ret.fontWeight = ret.fontWeight || "bold";
      return ret;
    },
    async onBoardEdit(data) {
      await this.actionWithLoadingSnackbar(async () => {
        await this.$store.dispatch("boards/updateBoard", data);
        this.showEditBoardDialog = false;
      }, "保存しました");
    },
    async createInviteUrl() {
      await this.actionWithLoadingSnackbar(async () => {
        await this.$axios.$post(
          this.$env.makeApiUrl(`/boards/${this.boardInfo.id}/invites`)
        );
        await this.$store.dispatch("boards/fetchBoard", {
          id: this.boardInfo.id,
        });
        this.boardInfo = this.$store.getters["boards/boards"][
          this.boardInfo.id
        ];
      }, "URLを更新しました。");
    },
    async updateBoard(message) {
      await this.actionWithLoadingSnackbar(async () => {
        await this.$store.dispatch("boards/fetchBoard", {
          id: this.boardInfo.id,
        });
        this.boardInfo = this.$store.getters["boards/boards"][
          this.boardInfo.id
        ];
      }, message);
    },

    async removeBoard(payload) {
      await this.actionWithLoadingSnackbar(async () => {
        await this.$store.dispatch("boards/removeBoard", {
          id: payload.id,
        });
        this.$router.push(`/dashboard`);
      }, "削除しました。");
    },

    async removePermission(item) {
      await this.actionWithLoadingSnackbar(async () => {
        await this.$axios.$delete(
          this.$env.makeApiUrl(
            `/boards/${this.boardInfo.id}/permissions/${item.id}`
          )
        );
        await this.$store.dispatch("boards/fetchBoard", {
          id: this.boardInfo.id,
        });
        this.boardInfo = this.$store.getters["boards/boards"][
          this.boardInfo.id
        ];
      }, "削除しました。");
    },

    async changePermission(payload, params, message) {
      await this.actionWithLoadingSnackbar(async () => {
        await this.$axios.$put(
          this.$env.makeApiUrl(
            `/boards/${payload.board_id}/permissions/${payload.id}`
          ),
          params
        );
        await this.$store.dispatch("boards/fetchBoard", {
          id: this.boardInfo.id,
        });
        this.boardInfo = this.$store.getters["boards/boards"][
          this.boardInfo.id
        ];
      }, message);
    },
    async openUserDialog() {
      // 取得できていないユーザーがいたらボードを更新しておく
      if (
        !this.firebaseRequestUsers.every((user) =>
          this.boardInfo.permissions.find((p) => p.user_id === user)
        )
      ) {
        await this.updateBoard();
      }
      this.showMemberDialog = true;
    },
    async sendInviteEmail(payload) {
      await this.actionWithLoadingSnackbar(async () => {
        await this.$axios.$post(this.$env.makeApiUrl(`/mail`), payload);
      }, "メールを送信しました");
    },
    async changeBoardInviteSetting(item) {
      await this.actionWithLoadingSnackbar(async () => {
        await this.$axios.$put(
          this.$env.makeApiUrl(
            `/boards/${this.boardInfo.id}/invites/${this.boardInfo.invite.id}`
          ),
          {
            isApprovalRequired: item,
          }
        );
      }, "招待の設定を変更しました");
    },
  },
};
</script>
<style>
.board-page {
  height: 100%;
  overflow-y: hidden;
  background-color: #eeeeee;
}
</style>
