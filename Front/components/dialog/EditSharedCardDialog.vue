<template lang="pug">
.text-center
  v-dialog(v-model='dialog', width='500')
    v-card
      v-textarea.pa-5(v-model='text', name='input-7-4', label='詳細')
      v-card-actions
        v-spacer
        v-btn(color='blue darken-1', @click='save()' class="white--text font-weight-bold") 保存
        v-btn(color='blue darken-1', text, @click='dialog = false' class="font-weight-bold") 閉じる
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      require: true,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      localText: this.item.memo,
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
    text: {
      get() {
        return this.item.memo
      },
      set(val) {
        this.localText = val
      },
    },
  },
  methods: {
    save() {
      const item = _.cloneDeep(this.item)
      item.memo = this.localText
      this.$emit('change', item)
      this.dialog = false
    },
  },
}
</script>
