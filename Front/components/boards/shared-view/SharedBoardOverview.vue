<template lang="pug">
  div#shared-board-over-view(
    :style="`width: ${this.width}px; height: ${this.height}px; z-index: ${$const.zIndex.sharedBoardOverview}`"
  )
    div(
      v-for="(item, i) in sharedItems" :key="i"
      :style="itemStyle(item)"
    )
    div#over-view-visible-view(
      :style="styleVisibleView"
    )
</template>
<script>
export default {
  components: {},
  props: {
    sharedItems: {
      type: Array,
      require: true,
      default: () => [],
    },
    boardSize: {
      type: Object,
      require: true,
      default: () => {
        return { width: 0, height: 0 }
      },
    },
    transform: {
      type: Object,
      require: true,
      default: () => {
        return { x: 0.0, y: 0.0, scale: 1.0 }
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    sizeRate() {
      return 0.2
    },
    width() {
      return this.boardSize.height * this.sizeRate
    },
    height() {
      return this.boardSize.height * this.sizeRate
    },
    visibleViewWidth() {
      return (
        (this.boardSize.width /
          this.transform.scale /
          this.$const.BOARD_WIDTH) *
        this.width
      )
    },
    visibleViewHeight() {
      return (
        (this.boardSize.height /
          this.transform.scale /
          this.$const.BOARD_HEIGHT) *
        this.height
      )
    },
    visibleViewTop() {
      return (
        (-this.transform.y / this.$const.BOARD_HEIGHT) * this.height -
        this.visibleViewHeight / 2 +
        this.height / 2
      )
    },
    visibleViewLeft() {
      return (
        (-this.transform.x / this.$const.BOARD_WIDTH) * this.width -
        this.visibleViewWidth / 2 +
        this.width / 2
      )
    },
    styleVisibleView() {
      return `width: ${this.visibleViewWidth}px; height: ${this.visibleViewHeight}px; top: ${this.visibleViewTop}px; left: ${this.visibleViewLeft}px;`
    },
  },
  mounted() {},
  methods: {
    itemLeft(item) {
      return (
        Math.floor((item.positionX / this.$const.BOARD_WIDTH) * this.width) +
        this.width / 2
      )
    },
    itemTop(item) {
      return (
        Math.floor((item.positionY / this.$const.BOARD_HEIGHT) * this.height) +
        this.width / 2
      )
    },
    itemHeight(item) {
      const element = document.getElementById(item.id)
      if (element) {
        const clientHeight = element.clientHeight
        return clientHeight * (this.height / this.$const.BOARD_HEIGHT)
      }
    },
    itemWidth(item) {
      const element = document.getElementById(item.id)
      if (element) {
        const clientWidth = element.clientWidth
        return clientWidth * (this.width / this.$const.BOARD_WIDTH)
      }
    },
    itemStyle(item) {
      const ret = `width: ${this.itemWidth(item)}px; height: ${this.itemHeight(
        item
      )}px; top:${this.itemTop(item)}px; left: ${this.itemLeft(
        item
      )}px; position: absolute; background-color:${item.cardColor}`
      return ret
    },
  },
}
</script>
<style>
#shared-board-over-view {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #ffffffaa;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
}
#over-view-visible-view {
  position: absolute;
  background-color: #aaaaaa40;
}
</style>
