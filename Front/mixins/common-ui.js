import firebase from 'firebase'

export default {
  components: {},
  data() {
    return {
      snackbar: {},
      confirmationDialog: {},
    }
  },
  created() {
    this.$nuxt.$on('openSnackbar', this.openSnackbar)
    this.$nuxt.$on('closeSnackbar', this.closeSnackbar)
    this.$nuxt.$on('openConfirmationDialog', this.openConfirmationDialog)
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.query.notice) {
        this.openSnackbar({ text: this.$route.query.notice })
      }
    })
  },
  methods: {
    // スナックバーを表示するメソッド
    // y: [top, bottom, center]
    // color: [success, error, warning, info..., or purple, #033, rgba(255, 0, 0, 0.5)]
    // timeout: [-1(Infinite), 3000(msec)]
    // text: 表示するメッセージ
    openSnackbar(params) {
      if (params.y === undefined) {
        params.y = 'top'
      }
      if (params.color === undefined) {
        params.color = 'success'
      }
      if (params.timeout === undefined) {
        params.timeout = '3000'
      }
      params.snackbar = true
      this.snackbar = params
    },
    closeSnackbar() {
      this.$set(this.snackbar, 'snackbar', false)
    },
    openConfirmationDialog(params) {
      params.show = true
      params.onChoise = this.onConfirmationDialog
      this.confirmationDialog = params
    },
    onConfirmationDialog(choice) {
      if (choice) {
        if (this.confirmationDialog.onOk) {
          this.confirmationDialog.onOk()
        }
      } else if (this.confirmationDialog.onCancel) {
        this.confirmationDialog.onCancel()
      }
      this.$set(this.confirmationDialog, 'show', false)
    },
    async logout() {
      await firebase.auth().signOut()
      this.$store.commit('user/clearState')
      this.$store.commit('boards/clearState')
      this.$router.push(`/`)
    },
    linkTo(path) {
      this.$router.push(path)
    },
  },
}
