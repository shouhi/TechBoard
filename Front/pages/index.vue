<template lang="pug">
v-app
  v-app-bar(app, clipped-left, flat :color='appBarColor', :style='`z-index:${$const.zIndex.mainMenuBar}`')
    v-toolbar-title
      a(@click='onMenu("/")')
        //- img(src='~/assets/images/Squeese-menu-logo.png', height='100')
    v-spacer
    //- v-btn.font-weight-bold.black--text(@click="toDashboard" x-large dark rounded elevation="0" color="#f4f6b4 ") ログイン
  v-main
    v-row(
      align="center"
      justify="center"
      style="background: linear-gradient(#F09010, #f4f6b4); padding:3rem 0px;"
    )
      v-col.text-center(cols="12" md="8")
        v-col.text-center(:class="$vuetify.breakpoint.mdAndUp ? 'catchcopy' : 'catchcopy-sp'")
          p 『アイディアをカタチに
          p 　　　　　　　　　まだないアイディアを』
          v-img(:src="require('~/assets/images/Squeese-menu-logo.png')" contain height="200")
          h4.subtitle-1.black--text リモート会議サポートツール
        v-col.text-center()
          v-btn.font-weight-bold(@click="toDashboard" dark color="orange" rounded x-large) 無料で始める
      v-col(cols="12" md="4")
        v-img(
          style="margin:1rem;"
          :src='require("~/assets/images/device.png")'
          height="300"
        )
</template>
<script>
export default {
  layout: "simple-layout",
  data() {
    return {
      message: "",
      scrollY: "",
    };
  },
  computed: {
    appBarColor() {
      return this.scrollY < 50 ? "#F09010 " : "#F09010 ";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    handleResize() {
      if (this.$refs.sharedboard) {
        this.$set(this.boardSize, "width", this.$refs.sharedboard.clientWidth);
        this.$set(
          this.boardSize,
          "height",
          this.$refs.sharedboard.clientHeight
        );
      }
    },
    onScroll(event) {
      this.scrollY = window.scrollY;
    },
    toDashboard() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
.catchcopy {
  color: black;
  font-size: 3vw;
  font-weight: bold;
}
.catchcopy-sp {
  color: white;
  font-size: 7vw;
  font-weight: bold;
}
.compare-services th,
tr,
td {
  text-align: center;
}
h2 {
  margin: 3rem 0px;
  text-align: center;
}
</style>
