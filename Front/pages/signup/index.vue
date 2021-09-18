<template lang="pug">
  div
    v-container
      v-card(width="400px" class="mx-auto mt-5")
          v-card-title(style='text-align:center')
              v-layout(column justify-center align-center)
                  h1(class="display-1") 新規登録
          v-card-text
              v-form
                  v-text-field(v-model="usermail" prepend-icon="mdi-email" label="e-mail" :rules="[rules.required, rules.email]")
                  v-text-field(v-model="password" v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" label="パスワード" @click:append="showPassword = !showPassword")
                  v-text-field(v-model="againpassword" v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="lock-reset" v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" label="パスワード（確認用）" @click:append="showPassword = !showPassword")
                  v-col(cols="12").text-center
                    p または
                  v-col(cols="12").text-center
                    a.text-center(@click='signup(onGoogle)')
                      img(:src="require('~/assets/images/btn_google_signin_dark_pressed_web@2x.png')" style="max-width:200px")
                  v-col(cols="12").text-center
                    a.text-center(@click='signup(onFacebook)')
                      img(:src="require('~/assets/images/66389811_2420388444687325_4985302625051213824_n.png')" style="max-width:200px")
          v-col(cols="12").text-center
            v-btn(@click="signup(onEmail)" class="info" max-width) 登録
          v-col(cols="12").text-center
              p(font-size="10px") すでにアカウントをお持ちですか？
              v-btn(@click="onLogin") ログインはこちら
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'Signup',
  components: {},
  data: () => ({
    showPassword: false,
    usermail: '',
    password: '',
    againpassword: '',
    starturl: '',
    rules: {
      required: (value) => !!value || '必須項目.',
      counter: (value) => value.length <= 20 || 'Max 20 characters',
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || '不正なメール形式です'
      },
    },
  }),
  mounted() {
    this.starturl = this.$route.query.url
  },
  methods: {
    checkPassword() {
      return this.password === this.againpassword
    },
    async onGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithPopup(provider)
    },
    async onFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider()
      await firebase.auth().signInWithPopup(provider)
    },
    async onEmail() {
      if (this.checkPassword()) {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.usermail, this.password)
      } else {
        throw new Error('パスワードが一致しません')
      }
    },
    async signup(func) {
      this.$nuxt.$loading.start()
      try {
        await func()
        this.$router.push('dashboard')
      } catch (error) {
        this.$nuxt.$emit('openSnackbar', {
          color: 'error',
          text: this.$utils.errorMessage(error),
          timeout: 5000,
        })
      }
      this.$nuxt.$loading.finish()
    },
    onLogin(login) {
      this.$router.push(`/login`)
    },
  },
}
</script>
