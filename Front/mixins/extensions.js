export default {
  components: {},
  data() {
    return {
      showSnackbar: false,
      snackbar: {},
    }
  },
  methods: {
    startLoading() {
      this.$nuxt.$loading.start()
    },
    stopLoading() {
      this.$nuxt.$loading.finish()
    },
    async actionWithLoadingSnackbar(action, notice) {
      this.startLoading()
      try {
        await action()
        if (notice) {
          this.$nuxt.$emit('openSnackbar', { text: notice })
        }
      } catch (e) {
        this.$nuxt.$emit('openSnackbar', {
          text: this.$utils.errorMessage(e),
          color: 'error',
        })
      }
      this.stopLoading()
    },
  },
}
