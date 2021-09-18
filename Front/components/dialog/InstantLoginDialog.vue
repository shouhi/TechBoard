<template lang="pug">
v-dialog(v-model='dialog', max-width='500')
  v-card
    v-card-title 名前を入力
    v-text-field.pa-10(v-model='name', label='名前')
    v-card-actions
      v-spacer
      v-btn(@click='joinTheBoard', :disabled='!name', color='blue darken-1',class="white--text font-weight-bold" ) 参加
      v-btn(@click='dialog = false', text, color='blue darken-1' class="font-weight-bold" ) キャンセル
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      name: undefined,
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
  },
  methods: {
    joinTheBoard() {
      this.$emit('join-the-board', this.name)
    },
  },
}
</script>
