<template lang="pug">
  div
    v-container
      v-layout(column justify-center align-center)
        v-row
          v-col(cols="6")
            h2 Firebase User Token
          v-col.text-center(cols="6")
            v-btn(
              v-clipboard:copy="'Bearer ' + userToken"
              v-clipboard:success="onCopyToken"
             color="primary") User Token コピー
          v-col(cols="12")
            v-textarea(v-model="userToken")
        v-row
          v-col
            v-btn(@click="click('startLoading')") Loading
          v-col
            v-btn(@click="click('openSnackBar(SUCCESS)')") Snackbar(Success)
          v-col
            v-btn(@click="click('openSnackBar(ERROR)')") Snackbar(Error)
          v-col
            v-btn(@click="click('openConfirmationDialog()')") ConfirmationDialog()
        v-row
          v-col
            v-btn(@click="addData") ADD DATA
          v-col
            v-btn(@click="undo") UNDO
          v-col
            v-btn(@click="redo") REDO
        v-row
          v-col(cols="12" v-for="(data,i) in forCommandData" :key="i" style="text-align:center") {{data}}
</template>

<script>
import CommandSample from '~/libs/commands/command-sample'
import command from '~/mixins/command'
import firebase from '~/plugins/firebase.js'

export default {
  components: {},
  mixins: [command],
  data() {
    return {
      forCommandData: [],
      userToken: '',
    }
  },
  mounted() {
    const user = firebase.auth().currentUser
    if (user) {
      ;(async () => {
        const idToken = await user.getIdToken()
        this.userToken = idToken
      })()
    }
  },
  methods: {
    addData() {
      const now = new Date()
      this.addCommand(
        new CommandSample(
          this.forCommandData,
          `${now.toLocaleTimeString()}:${('0000' + now.getMilliseconds()).slice(
            -3
          )}`
        )
      )
    },
    onCopyToken() {
      this.$nuxt.$emit('openSnackbar', {
        color: 'success',
        text: 'User Tokenをコピーしました。',
      })
    },
    async sleep(msec) {
      await new Promise((resolve) => setTimeout(resolve, msec))
    },
    async click(method) {
      switch (method) {
        case 'startLoading':
          this.$nuxt.$loading.start()
          await this.sleep(3000)
          this.$nuxt.$loading.finish()
          break
        case 'openSnackBar(SUCCESS)':
          this.$nuxt.$emit('openSnackbar', {
            color: 'success',
            text: 'SUCCESS',
          })
          break
        case 'openSnackBar(ERROR)':
          this.$nuxt.$emit('openSnackbar', { color: 'error', text: 'ERROR' })
          break
        case 'openConfirmationDialog()':
          this.$nuxt.$emit('openConfirmationDialog', {
            title: '確認ダイアログ',
            text: 'よろしいですか？',
            onOk: () => {
              this.$nuxt.$emit('openSnackbar', {
                text: '「はい」が押下されました',
              })
            },
            onCancel: () => {
              this.$nuxt.$emit('openSnackbar', {
                text: '「いいえ」が押下されました',
              })
            },
          })
          break
      }
    },
  },
}
</script>

<style lang="scss"></style>
