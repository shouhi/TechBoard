<template lang="pug">
v-dialog(
  v-model='dialog',
  max-width='500',
  :style='`z-index:${$const.zIndex.dialog}`'
)
  v-card
    v-card-title
      span.headline(class="font-weight-bold") ボード設定
    v-card-text
      v-container
        v-text-field(v-model='boardName', label='ボード名')
    v-card-actions
      v-btn(v-if="isAdmin" text color='error', @click="removeBoard(boardInfo)" class="font-weight-bold white--text") ボードを削除
      v-spacer
      v-btn(color='primary', @click='onSave' class="font-weight-bold white--text") 保存
      v-btn(color='primary', text, @click='dialog = false' class="font-weight-bold") 閉じる
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    boardInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      boardName: '',
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
  mounted() {
    this.boardName = this.boardInfo.name
  },
  methods: {
    onSave() {
      this.$emit('save', _.merge(this.boardInfo, { name: this.boardName }))
    },
    removeBoard(item) {
      this.$nuxt.$emit('openConfirmationDialog', {
        title: '確認',
        text: '本当にこのボードを削除してもよろしいですか？',
        onOk: () => {
          this.$emit('remove-board', item)
        },
      })
    },
  },
}
</script>
