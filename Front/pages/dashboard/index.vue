<template lang="pug">
div(style="background-color:#f3f4f6")
  v-container
    v-navigation-drawer(app v-model="drawer" style="background-color:#101827")
      v-container
        v-list-item(dark)
          v-list-item-title.title Tech.Board
            Application
          v-btn(icon)
            v-icon(mdi-chevron-left)
        v-divider
    v-row
      v-col
        h2 Create a board
        v-card.spacer(color='accent_white'  height="150" class="pa-8")
          v-btn(
            @click='createBoardDialog = true',
            color='primary',
            height="90" width="120"
          ) 
            v-icon(large class="white--text ") mdi-plus
          create-board-dialog(
            v-model='createBoardDialog',
            @create-board='createBoard',
          )
          create-name-dialog(
            v-model='createNameDialog'
            @create-name='createName',
          )
        h2 All Boards
        v-card.spacer(color='accent_white' class="pa-8")
          boards-list(:boards="boards" @select-board='selectBoard')
</template>
<script>
import { mapGetters } from "vuex";
import CreateBoardDialog from "~/components/dialog/CreateBoardDialog";
import CreateNameDialog from "~/components/dialog/CreateNameDialog";
import BoardsList from "~/components/dashboard/BoardsList";
import extensions from "~/mixins/extensions";

export default {
  components: {
    BoardsList,
    CreateBoardDialog,
    CreateNameDialog,
  },
  mixins: [extensions],
  layout: "common-layout",
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    await store.dispatch("boards/fetchBoards");
    await store.dispatch("boards/fetchBoardAccesses");
    if (!store.getters["user/user"]) {
      await store.dispatch("user/fetchMe");
    }
  },
  data() {
    return {
      createBoardDialog: false,
      createNameDialog: false,
    };
  },
  computed: {
    ...mapGetters({
      boards: "boards/boards",
      user: "user/user",
    }),
  },
  mounted() {
    if (this.user.name === "" || this.user.name === null) {
      this.createNameDialog = true;
    }
  },
  methods: {
    async createBoard(info) {
      await this.actionWithLoadingSnackbar(async () => {
        const res = await this.$store.dispatch("boards/createBoard", {
          name: info.name,
          isApprovalRequired: info.isApprovalRequired,
        });
        this.createBoardDialog = false;
        this.$router.push(
          `/boards/${res.id}?notice=新しいボードを作成しました`
        );
      });
    },
    selectBoard(board) {
      this.$router.push(`/boards/${board.id}`);
    },
    async createName(name) {
      await this.actionWithLoadingSnackbar(async () => {
        await this.$store.dispatch("user/updateMe", { name });
        this.createNameDialog = false;
      }, "名前を入力しました");
    },
  },
};
</script>
<style>
.spacer {
  margin-top: 25px;
  margin-bottom: 50px;
}
.title-style {
  font-weight: bold;
}
.button-area {
  padding: 4px;
  overflow: auto;
  border-radius: 20;
  white-space: nowrap;
}
.title {
  font-size: 5rem;
}
.v-btn {
  font-size: 30px;
}
</style>
