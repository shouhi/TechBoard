<template lang="pug">
div
  v-dialog(v-model="dialog" max-width="600px" max-height="100px" :style="`z-index:${$const.zIndex.dialog}`")
    v-card
      v-card-title {{title}}
      v-card-text
        v-textarea(
          outlined
          v-model="emailList"
          label="メールアドレスを入力してください(複数可)"
          @change="trimEmailList"
        )
      v-card-actions
        v-btn(@click="onSend" :disabled="!validateEmail") 送信

</template>

<script>
import extensions from '~/mixins/extensions'

export default {
  components: {},
  mixins: [extensions],
  props: {
    title: {
      type: String,
      default: 'メールを送る',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      emailList: '',
    }
  },
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    validateEmail() {
      if (this.emailList.length <= 0) {
        return false
      }
      const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
      const arr = this.emailList.split('\n')
      for (const item of arr) {
        if (item.length > 0 && !regexp.test(item)) {
          return false
        }
      }
      return true
    },
  },
  mounted() {},
  methods: {
    onSend() {
      this.trimEmailList()
      this.$emit('send', this.emailList.split('\n'))
    },
    trimEmailList() {
      const arr = this.emailList.split(/[\s\r\n,\t]+/)
      const arr2 = []
      arr.forEach((item) => {
        const email = item.trim()
        if (email.length > 0) {
          arr2.push(email)
        }
      })
      this.emailList = arr2.join('\n')
    },
  },
}
</script>
<style scoped></style>
>
