<template lang="pug">
  div
    v-container
          v-card(height='400' width="600px" class="mx-auto mt-5")
                v-row
                  v-col(cols="12").text-center
                    img(src="~/assets/images/TechUni-menu-logo.png" height="80" width="160")
                    v-spacer
                    v-btn(@click="instantLoginDialog=true" color="primary" width="230" class="white--text font-weight-bold") ボードに参加する
                    v-spacer
                    v-btn(@click="onLogin" width="230") サインイン
                instant-login-dialog(
                  v-model='instantLoginDialog',
                  @join-the-board='joinTheBoard'
              )
</template>
<script>
import firebase from "~/plugins/firebase.js";
import InstantLoginDialog from "~/components/dialog/InstantLoginDialog";
import extensions from "~/mixins/extensions";
import utils from "~/libs/utils";

export default {
  components: {
    InstantLoginDialog,
  },
  mixins: [extensions],
  data: () => ({
    instantLoginDialog: false,
    nexturl: "",
  }),
  mounted() {
    this.nexturl = this.$route.query.url;
  },
  methods: {
    async joinTheBoard(name) {
      await this.actionWithLoadingSnackbar(async () => {
        await firebase.auth().signInAnonymously();
        const user = await utils.getUser();
        if (user) {
          // ログインしていたときの処理
          await utils.setupUser(user, this.$axios, this.$store);
          // ログイン成功
          await this.$store.dispatch("user/updateMe", { name });
          await this.$router.push(`${this.nexturl}`);
        }
      });
    },
    onLogin(login) {
      this.$router.push(`/login`);
    },
  },
};
</script>
