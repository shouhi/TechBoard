<template lang="pug">
v-app-bar(app clipped-left color="primary" dense :style="`z-index:${$const.zIndex.mainMenuBar}`")
  v-toolbar-title
    a(@click="linkTo('/')")
      img(src="~/assets/images/Squeese-menu-logo.png" height="65")
  v-spacer
  v-menu(:z-index="$const.zIndex.sharedCardMenuBar" offset-y)
    template(v-slot:activator="{ on: menu, attrs }")
      v-btn(
            v-bind="attrs"
            v-on="{...menu }"
            fab
            color="grey lighten-2"
            small
              )
        v-icon mdi-account
    v-list
      v-list-item(@click="linkTo('/users/me')") プロフィール編集
      v-list-item(@click="logOut") ログアウト
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    linkTo(path) {
      this.$emit("link-to", path);
    },
    logOut() {
      this.$emit("logout");
    },
  },
};
</script>
