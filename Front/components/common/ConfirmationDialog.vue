<template lang="pug">
  v-dialog(v-model="dialog" max-width="500")
    v-card
      v-card-title {{confirmationDialog.title}}
      v-card-text {{confirmationDialog.text}}
      v-card-actions
          v-spacer
          v-btn(color="blue darken-1" @click="onChoice(true)" class="white--text font-weight-bold") はい
          v-btn(color="blue darken-1" text @click="onChoice(false)" class="font-weight-bold") いいえ
</template>
<script>
export default {
  props: {
    confirmationDialog: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {
    dialog: {
      get() {
        return this.confirmationDialog.show
      },
      set(val) {
        if (!val) {
          this.onChoice(false)
        }
        // this.$emit('input', val)
      },
    },
  },
  methods: {
    onChoice(choice) {
      this.confirmationDialog.onChoise(choice)
    },
  },
}
</script>
