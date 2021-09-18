<template lang="pug">
v-dialog(v-model='dialog', max-width='500')
  v-card
    v-card-title ボード名を入力
    v-text-field.pa-10(v-model='name', label='ボード名')
    v-card-actions
      v-checkbox(v-model="waitingRoom" :label="`待機室を有効化`")
      v-spacer
      v-btn(@click='create', :disabled='!name', color='blue darken-1',class="white--text font-weight-bold" ) 作成
      v-btn(@click='dialog = false', text, color='blue darken-1' class="font-weight-bold" ) 閉じる
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
      waitingRoom: true,
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
    create() {
      this.$emit('create-board', {
        name: this.name,
        isApprovalRequired: this.waitingRoom,
      })
    },
  },
}
</script>
