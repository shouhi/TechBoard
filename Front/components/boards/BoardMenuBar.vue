<template lang="pug">
div(ref="menuSize",
    :style='menuPosition')
  v-card(
    color='#ffffff',
    elevation='10',
    width='60px',
    max-height='300px',
)
   v-container
    div(
      v-for='(item, i) in menuList',
      :key='i',
    )
      v-badge(
        :value="item.badge && item.badge() ? true : false"
        color="red"
        :content="item.badge ? item.badge() : ''"
        overlap
      )
        v-btn(
          style='display:block; margin:0x;',
          icon,
          color='black'
          @click="item.callback()"
        )
          v-icon {{item.icon}}
</template>
<script>
export default {
  components: {},
  props: {
    mode: {
      type: String,
      default: '',
    },
    boardInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
    boardSize: {
      type: Object,
      require: true,
      default: () => {
        return { width: 0, height: 0 }
      },
    },
    editable: {
      type: Boolean,
      default: false,
    },
    notJoinMembers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      editorMenuList: [
        {
          icon: 'mdi-cog-outline',
          callback: () => {
            this.$emit('config')
          },
        },
        {
          icon: 'mdi-account-multiple-plus',
          callback: () => {
            this.$emit('open-user-dialog')
          },
          badge: () => {
            return this.notJoinMembers.length
          },
        },
        {
          icon: 'mdi-undo',
          callback: () => {
            this.$emit('undo')
          },
        },
        {
          icon: 'mdi-redo',
          callback: () => {
            this.$emit('redo')
          },
        },
        {
          icon: 'mdi-hand-right',
          callback: () => {
            this.$emit('switch-mode', 'drag')
          },
          selected: (mode) => {
            return mode === 'drag'
          },
        },
        {
          icon: 'mdi-cursor-default',
          callback: () => {
            this.$emit('switch-mode', 'select')
          },
          selected: (mode) => {
            return mode === 'select'
          },
        },
      ],
      viewerMenuList: [
        {
          icon: 'mdi-hand-right',
          callback: () => {
            this.$emit('switch-mode', 'drag')
          },
          selected: (mode) => {
            return mode === 'drag'
          },
        },
        {
          icon: 'mdi-cursor-default',
          callback: () => {
            this.$emit('switch-mode', 'select')
          },
          selected: (mode) => {
            return mode === 'select'
          },
        },
      ],
      menuBarHeight: 0,
    }
  },
  computed: {
    menuList() {
      return this.editable ? this.editorMenuList : this.viewerMenuList
    },
    menuPosition() {
      const ret = `top:${
        this.boardSize.height / 2 - this.menuBarHeight / 2
      }px; position:absolute; z-index: 1000;`
      return ret
    },
  },
  mounted() {
    // computedに$refsを記載すると、値がない状態でコードが走り、エラーになるため、mountedで情報を代入してからcomputedに渡す。
    this.menuBarHeight = this.$refs.menuSize.clientHeight
  },
  methods: {
    onBoardInfo(boardInfo) {
      this.boardInfo = boardInfo
    },
  },
}
</script>
<style scoped></style>
