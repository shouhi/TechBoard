<template lang="pug">
  div
    v-overlay(:value="loading" :style="`z-index:${$const.zIndex.loadingBlocker}`")
      v-progress-circular(indeterminate size="64")
</template>
<script>
export default {
  components: {},
  model: {},
  props: {},
  data() {
    return {
      loading: false,
      snackbar: false,
      snackbarText: '',
    }
  },
  mounted() {},
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    fail(error) {
      this.$router.push(`/dashboard?notice=${this.$utils.errorMessage(error)}`)
    },
  },
}
</script>
