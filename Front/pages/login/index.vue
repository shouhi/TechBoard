<template lang="pug">
  div
    v-container
      v-card(width="400px" class="mx-auto mt-5")
          v-row
            v-col(cols="12").text-center
                h1(class="display-1") ログイン
            v-col(cols="12").text-center
                v-form(style="padding:10px;")
                    v-text-field(v-model="usermail" prepend-icon="mdi-account-circle" label="e-mail")
                    v-text-field(v-model="userpass" v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" label="パスワード" @click:append="showPassword = !showPassword")
                v-btn(@click="login(onEmail)" class="info") ログイン
            v-col(cols="12").text-center
              p または
            v-col(cols="12").text-center
              a.text-center(@click='login(onGoogle)')
                img(:src="require('~/assets/images/btn_google_signin_dark_pressed_web@2x.png')" style="max-width:200px")
            v-col(cols="12").text-center
              a.text-center(@click='login(onFacebook)')
                img(:src="require('~/assets/images/66389811_2420388444687325_4985302625051213824_n.png')" style="max-width:200px")
            v-col(cols="12").text-center
              p(text-align="center") すでにアカウントをお持ちですか？
              v-btn(@click="onSignup") 新規登録はこちら
    //- slot
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'App',
  components: {},
  data: () => ({
    showPassword: false,
    usermail: '',
    userpass: '',
    nexturl: '',
    localDatas: undefined,
  }),
  computed: {},
  mounted() {
    this.nexturl = this.$route.query.url
  },
  methods: {
    async onGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithPopup(provider)
    },
    async onFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider()
      await firebase.auth().signInWithPopup(provider)
    },
    async onEmail() {
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.usermail, this.userpass)
    },
    async login(loginFunc) {
      try {
        this.$nuxt.$loading.start()
        await loginFunc()
        this.$nuxt.$loading.finish()
        if (this.nexturl) {
          this.$router.push(decodeURI(this.nexturl))
        } else {
          this.$router.push('dashboard')
        }
      } catch (error) {
        this.$nuxt.$emit('openSnackbar', {
          color: 'error',
          text: this.$utils.errorMessage(error),
          timeout: 10000,
        })
      }
      this.$nuxt.$loading.finish()
    },
    onSignup(signup) {
      this.$router.push(`/signup`)
    },
  },
}
</script>
