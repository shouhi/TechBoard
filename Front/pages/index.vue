<template lang="pug">
v-app
  v-app-bar(app, clipped-left, flat :color='appBarColor', :style='`z-index:${$const.zIndex.mainMenuBar}`')
  v-main
    v-row(
      align="center"
      justify="center"
      style="background: linear-gradient(#9cbfbc, #c2ede8); padding:3rem 0px;"
    )
      v-col.text-center(cols="12" md="8")
        v-col.text-center(:class="$vuetify.breakpoint.mdAndUp ? 'catchcopy' : 'catchcopy-sp'")
          p 『アイディアをカタチに』
          v-img(:src="require('~/assets/images/TechUni-menu-logo.png')" contain height="400")
          h4.subtitle-1.black--text リモート会議サポートツール
        v-col.text-center()
          v-btn.font-weight-bold(@click="toDashboard" dark color="orange" rounded x-large) 無料で始める
      v-col(cols="12" md="4")
        v-img(
          style="margin:1rem;"
          :src='require("~/assets/images/device.png")'
          height="300"
        )
    Section(color="#ffffff")
      h2.display-1.font-weight-bold() Tech.Uni とは、、、？？
      v-img(:src="require('~/assets/images/TechUni.gif')")
    Section(color="#9cbfbc")
      h2.display-1.font-weight-bold.white--text 誰でも歓迎！完全カリキュラム制
      v-img(:src="require('~/assets/images/curriculum.png')")
    Section(color="#ffffff")
      h2.display-1.font-weight-bold 実践的なチーム開発も！
      v-row
        step-card(
          v-for="(step, key) in steps" :key="key"
          :value="step"
          :num="key"
        )
</template>
<script>
import Section from "~/components/top/Section";
import StepCard from "~/components/top/StepCard";
export default {
  components: {
    Section,
    StepCard,
  },
  layout: "simple-layout",
  data() {
    return {
      message: "",
      scrollY: "",
      steps: [
        {
          title: "Githubを活用",
          description:
            "GitFlowなどのブランチモデルも導入し、実務に近い環境でチーム開発も行っています！",
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          title: "アジャイル開発",
          description:
            "開発スタイルは主にアジャイル開発を取り入れています。デイリースクラム・レトロスペクティブ・スプリントレビューと各イベント毎にみんなで集まりMTGも開催",
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          title: "オンラインでも！",
          description:
            "オンラインコワーキングスペースのCLOTOと提携しTech.Uni独自でオンラインの活動を実現化しています",
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
      ],
      pricing: [
        {
          title: "フリープラン",
          subtitle: "全ての機能が使えます",
          price: "無料",
          color: "orange",
          features: [
            "すべてのボード機能",
            "すべてのチーム機能",
            "24時間以内の閲覧・編集",
          ],
        },
        {
          title: "個人プラン",
          subtitle: "無制限の閲覧・編集",
          price: "1,300円/月",
          color: "blue",
          features: [
            "すべてのボード機能",
            "すべてのチーム機能",
            "無制限の閲覧・編集",
          ],
        },
        {
          title: "チームプラン",
          subtitle: "無制限の閲覧・編集",
          price: "3,000円/月",
          color: "green",
          features: [
            "すべてのボード機能",
            "すべてのチーム機能",
            "無制限の閲覧・編集",
          ],
        },
      ],
    };
  },
  computed: {
    appBarColor() {
      return this.scrollY < 50 ? "#9cbfbc " : "#00000000 ";
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
