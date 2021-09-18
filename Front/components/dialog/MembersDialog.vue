<template lang="pug">
div
  email-list-dialog(v-model="showEmailSendDialog" @send="onSendEmail")
  v-dialog(v-model="dialog" max-width="700px" max-height="100px" :style="`z-index:${$const.zIndex.dialog}`")
    v-card
      v-card-title メンバー
          v-btn(
            icon
            @click="updateMembers"
          )
            v-icon mdi-refresh

      v-card-text
        v-simple-table(
          dense
          fixed-header
          height="300"
        )
          template(v-slot:default)
            thead
              tr
                th メンバー
                th.text-center 役割
                th.text-center(v-if="isAdmin") 削除
            tbody
              tr(v-for='(item, i) in permissions' style="width:auto")
                td {{item | name}}
                td.text-center(v-if="isAdmin" style="width:25%")
                  template(v-if="$utils.isBoardAcceped(item.state)")
                    v-select.text--caption(solo flat dense hide-details :items="dropdownItems" :value="$const.ROLE_TO_NAME(item.role)" @input="roleToChange(item, $const.NAME_TO_ROLE($event))")
                  template(v-else)
                    v-btn(@click="acceptPermission(item)" color="success" text) 承諾する
                td.text-center(v-else style="width:25%")
                    span {{$const.ROLE_TO_NAME(item.role)}}
                td.text-center(v-if="isAdmin" style="width: 10%")
                  v-btn(@click="removeInvite(item)" icon)
                    v-icon() mdi-delete-outline
        v-row()
          v-col(cols="10")
            v-text-field(
              label="招待URL"
              outlined
              dense
              v-model="inviteUrl"
            )
              template(v-slot:append)
                v-chip(
                  ref="copyContainer"
                  label
                  small
                  color="primary"
                  @click="copyInviteUrl"
                )
                  span コピー
          v-col(cols="2")
            v-tooltip(top)
              template(v-slot:activator="{ on, attrs }")
                v-btn.font-weight-bold(
                  icon
                  v-bind="attrs"
                  v-on="on"
                  @click="showEmailSendDialog=true")
                    v-icon mdi-email-outline
              span URLをメールで送る
            v-tooltip(top)
              template(v-slot:activator="{ on, attrs }")
                v-btn.font-weight-bold(
                  icon
                  v-bind="attrs"
                  v-on="on"
                  @click="createInviteUrl")
                    v-icon mdi-refresh
              span URLの再発行
          v-checkbox(v-model="waitingRoom" @change="changeBoardInviteSetting($event)" :label="`待機室を有効化`")

</template>

<script>
import Const from "~/libs/const";
import extensions from "~/mixins/extensions";
import EmailListDialog from "~/components/dialog/EmailListDialog";

export default {
  components: {
    EmailListDialog,
  },
  filters: {
    name(item) {
      if (item.user) {
        return item.user.name;
      }
      return item.email;
    },
  },
  mixins: [extensions],
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    permissions: {
      type: Array,
      default: () => {
        return [];
      },
    },
    isApprovalrequired: {
      type: Number,
      default: 0,
    },
    editable: {
      type: Boolean,
      default: false,
    },
    inviteUrl: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      role: Const.ROLE_VIEWER,
      message: "",
      dropdownItems: ["編集者", "管理者"],
      show: true,
      showEmailSendDialog: false,
      waitingRoom: this.isApprovalrequired,
    };
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  mounted() {},
  methods: {
    removeInvite(item) {
      this.$nuxt.$emit("openConfirmationDialog", {
        title: "確認",
        text: "本当に削除してもよろしいですか？",
        onOk: () => {
          this.$emit("remove-permission", item);
        },
      });
    },
    acceptPermission(item) {
      this.$emit(
        "change-permission",
        item,
        {
          state: this.$const.PERMISSION_STATE_JOIN,
        },
        "参加の承諾をしました"
      );
    },
    onSendEmail(emailList) {
      // TODO
      // 招待URLのメール
      const text = `${this.inviteUrl}`;
      const subject = "Tech.Boardからの招待";
      this.$emit("send-email", { emailList, text, subject });
    },

    close() {
      this.dialog = false;
    },
    roleToChange(permission, role) {
      this.$emit(
        "change-permission",
        permission,
        { role },
        "権限を変更しました"
      );
    },
    updateMembers() {
      this.$emit("request-update");
    },
    async copyInviteUrl() {
      try {
        await this.$copyText(this.inviteUrl, this.$refs.copyContainer.$el);
        this.$nuxt.$emit("openSnackbar", {
          color: "success",
          text: "招待URLをコピーしました",
        });
      } catch (err) {
        this.$nuxt.$emit("openSnackbar", {
          color: "error",
          text: "コピーに失敗しました",
        });
      }
    },
    createInviteUrl() {
      this.$nuxt.$emit("openConfirmationDialog", {
        title: "確認",
        text:
          "招待URLを再発行すると古いURLが使用できなくなります。\nよろしいですか？",
        onOk: () => {
          this.$emit("create-invite-url");
        },
      });
    },
    changeBoardInviteSetting(item) {
      this.$emit("change-board-invite-setting", item);
    },
  },
};
</script>
<style scoped>
.status-td {
  width: 20%;
}
</style>
>
