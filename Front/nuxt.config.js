import colors from "vuetify/es5/util/colors";
import webpack from "webpack";

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: "ja",
      prefix: "og: http://ogp.me/ns#",
    },
    title: "Squeese | リモート会議サポートツール",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "「Squeese」は付箋をオンラインでリアルタイムで共有する、オンライン会議サポートツールです。パソコンのWebブラウザを使用し、会議でのアイディア出しや、日々のTODOリストの管理など、クリエイティブな業務をサポートします。",
      },
      { hid: "og:locale", property: "og:locale", content: "ja_JP" },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Squeese | リモート会議サポートツール",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://kaite.team" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Squeese | リモート会議サポートツール",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "「Squeese」は付箋をオンラインでリアルタイムで共有する、オンライン会議サポートツールです。パソコンのWebブラウザを使用し、会議でのアイディア出しや、日々のTODOリストの管理など、クリエイティブな業務をサポートします。",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://kaite.team/ogp.png",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://kaite.team/ogp.png",
      },
      {
        hid: "og:image:width",
        property: "og:image:width",
        content: "1200",
      },
      {
        hid: "og:image:height",
        property: "og:image:height",
        content: "630",
      },
      {
        name: "twitter:image",
        content: "https://kaite.team/ogp.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@prog_ac" },
      { name: "twitter:creator", content: "@smarthr_jp" },
      {
        name: "twitter:title",
        content: "Squeese | リモート会議サポートツール",
      },
      {
        name: "twitter:description",
        content:
          "「Squeese」は付箋をオンラインでリアルタイムで共有する、オンライン会議サポートツールです。パソコンのWebブラウザを使用し、会議でのアイディア出しや、日々のTODOリストの管理など、クリエイティブな業務をサポートします。",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~/plugins/plugins.js", "~/plugins/libs", "~/plugins/sanitize"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      "@nuxtjs/dotenv",
      {
        filename:
          process.env.NODE_ENV === "production"
            ? "./config/.env.prod"
            : process.env.NODE_ENV === "staging"
            ? "./config/.env.dev"
            : "./config/.env.dev",
      },
    ],
    "@nuxtjs/vuetify",
    "@nuxtjs/eslint-module",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  router: {
    // あらゆるURLをアサインする機能
    middleware: "authenticated", // 必ずこれを通る
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */

  build: {
    extend(config, ctx) {
      config.node = {
        fs: "empty",
        child_process: "empty",
        net: "empty",
        tls: "empty",
      };
    },
    plugins: [
      new webpack.ProvidePlugin({
        _: "lodash",
      }),
    ],
  },
  loading: "~/components/common/Loading.vue",
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.base,
          success: colors.green.base,
          accent_white: colors.grey.lighten5,
        },
      },
    },
  },
};
