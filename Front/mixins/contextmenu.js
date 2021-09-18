export default {
  components: {},
  data() {
    return {
      // contextMenuShow: false,
      contextMenu: {
        show: false,
        x: 0,
        y: 0,
      },
    }
  },
  methods: {
    showContextMenu(e) {
      e.preventDefault()
      // ↑実行したイベントがキャンセル可能である場合、イベントをキャンセルするためのメソッド
      const contextMenu = {}
      contextMenu.show = true
      contextMenu.x = e.clientX
      contextMenu.y = e.clientY
      this.$nextTick(() => {
        // ↑mountedみたいに全体がレンダリングされるまで待つ
        this.contextMenu = contextMenu
      })
    },
  },
}
