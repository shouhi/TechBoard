<template lang="pug">
div(
  v-if='isShowedCardMenuBar',
  :style='`position: absolute; left:${menuBarX}px; top:${menuBarY}px; z-index:${$const.zIndex.sharedCardMenuBar};`'
)
  shared-card-menu-bar(
    :selectedItems='selectedItems',
    :item='selectedItems.length > 0 ? getItemById(selectedItems[0]) : {}',
    @remove='removeShareCards',
    @align='alignSharedCards',
    @bold='boldShareCards',
    @font-size='setFontSize',
    @change-color='changeColor',
    @change-font-color='changeFontColor',
    @change-text-from-card='changeTextFromCard',
    @open-shared-card-size-dialog='openSharedCardSizeDialog'
    @open-shared-card-edit-dialog='openEditSharedCardDialog'
  )
  edit-shared-card-dialog(
    v-model='showEditSharedCardDialog',
    :item='selectedItems.length > 0 ? getItemById(selectedItems[0]) : {}',
    @change='onItemChanged'
  )
  shared-card-size-dialog(
    v-model='showSharedCardSizeDialog',
    :item='selectedItems.length > 0 ? getItemById(selectedItems[0]) : {}',
    @card-size='setCardSize'
  )
</template>
<script>
import SharedCardMenuBar from '~/components/boards/shared-view/SharedCardMenuBar'
import EditSharedCardDialog from '~/components/dialog/EditSharedCardDialog'
import SharedCardSizeDialog from '~/components/dialog/SharedCardSizeDialog'

export default {
  components: {
    SharedCardMenuBar,
    EditSharedCardDialog,
    SharedCardSizeDialog,
  },
  props: {
    sharedItems: {
      type: Array,
      require: true,
      default: () => [],
    },
    transform: {
      type: Object,
      require: true,
      default: () => {
        return { x: 0.0, y: 0.0, scale: 1.0 }
      },
    },
    boardSize: {
      type: Object,
      require: true,
      default: () => {
        return {}
      },
    },
    selectedItems: {
      type: Array,
      require: true,
      default: () => {
        return []
      },
    },
    isShowMenu: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      showEditSharedCardDialog: false,
      showSharedCardSizeDialog: false,
    }
  },
  computed: {
    isShowedCardMenuBar() {
      return this.selectedItems.length > 0 && this.isShowMenu
    },
    menuBarX() {
      if (this.selectedItems.length > 0) {
        let sum = 0
        for (const i of this.selectedItems) {
          const item = this.getItemById(i)
          sum += (item.positionX + this.transform.x) * this.transform.scale
        }
        return sum / this.selectedItems.length + this.boardSize.width / 2 - 200 // BUGGY
      }
      return 0
    },
    menuBarY() {
      if (this.selectedItems.length > 0) {
        let min = 9999999
        for (const i of this.selectedItems) {
          const item = this.getItemById(i)
          const element = document.getElementById(i)
          const y =
            (item.positionY + this.transform.y) * this.transform.scale -
            element.clientHeight / 2
          if (min > y) {
            min = y
          }
        }
        return min + this.boardSize.height / 2 - 100
      }
      return 0
    },
    modeClass() {
      if (this.mode === 'drag') {
        return this.isClickNow ? 'grabbing-cursor' : 'hand-cursor'
      }
      return ''
    },
  },
  mounted() {},
  methods: {
    alignSharedCards(column) {
      const sortY = []
      const result = [[]]
      for (const id of this.selectedItems) {
        const item = this.getItemById(id)
        sortY.push(item)
      }

      sortY.sort(function (a, b) {
        return a.positionY - b.positionY
      })

      const xlist = []
      const ylist = []
      for (let i = 0; i < sortY.length; i++) {
        const item = sortY[i]
        xlist.push(item.positionX)
        ylist.push(item.positionY)

        result[result.length - 1].push(item)
        if (result[result.length - 1].length >= column) {
          result.push([])
        }
      }
      const positionXMin = Math.min(...xlist)
      const positionYMin = Math.min(...ylist)

      // 基準点をy軸の一番小さいアイテムにする
      const positionX = positionXMin
      const positionY = positionYMin

      for (let i = 0; i < result.length; i++) {
        const sortX = result[i]
        sortX.sort(function (a, b) {
          return a.positionX - b.positionX
        })
      }
      let y = positionY
      const newItems = []
      for (let i = 0; i < result.length; i++) {
        let x = positionX

        for (let j = 0; j < result[i].length; j++) {
          const item = result[i][j]
          newItems.push(
            _.merge({ id: item.id }, { positionX: x, positionY: y })
          )
          if (j === result[i].length - 1) {
            break
          }
          const el1 = document.getElementById(item.id)
          const el2 = document.getElementById(result[i][j + 1].id)

          if (el1 && el2) {
            const w1 = el1.getBoundingClientRect().width
            const w2 = el2.getBoundingClientRect().width
            x +=
              ((w1 + w2) / 2 + this.$const.ALIGN_PADDING) / this.transform.scale
          }
        }
        if (i === result.length - 1) {
          break
        }

        const maxY1 = result[i].reduce((a, b) => {
          const elb = document.getElementById(b.id)
          if (elb) {
            return Math.max(a, elb.getBoundingClientRect().height)
          }
          return a
        }, 0)

        const maxY2 = result[i + 1].reduce((a, b) => {
          const elb = document.getElementById(b.id)
          if (elb) {
            return Math.max(a, elb.getBoundingClientRect().height)
          }
          return a
        }, 0)
        y +=
          (maxY1 / 2 + maxY2 / 2 + this.$const.ALIGN_PADDING) /
          this.transform.scale
      }
      this.$emit('items-changed', newItems)
    },
    onItemChanged(item) {
      this.$emit('change-one-item', item)
    },
    removeShareCards() {
      this.$emit('remove-selected-items')
      this.$emit('selected-changed', [])
    },
    boldShareCards() {
      let bold = 'normal'
      for (const i of this.selectedItems) {
        const item = this.getItemById(i)
        if (item && item.fontWeight && item.fontWeight === 'normal') {
          bold = 'bold'
        }
      }
      this.$emit('change-selected-items', { fontWeight: bold })
    },
    openEditSharedCardDialog() {
      this.showEditSharedCardDialog = true
    },
    openSharedCardSizeDialog() {
      this.showSharedCardSizeDialog = true
    },
    setFontSize(size) {
      this.$emit('change-selected-items', { fontSize: size })
    },
    setCardSize(size) {
      this.$emit('change-selected-items', size)
    },
    changeTextFromCard() {
      this.$emit('change-selected-items', {
        cardColor: this.$const.colors.transparent,
        cardWidth: 'auto',
        cardHeight: 'auto',
      })
    },
    getItemById(id) {
      return this.sharedItems.find((item) => item.id === id)
    },
    cloneItemById(id) {
      return _.cloneDeep(this.sharedItems.find((item) => item.id === id))
    },
    changeColor(color) {
      this.$emit('change-selected-items', { cardColor: color })
    },
    changeFontColor(color) {
      this.$emit('change-selected-items', { fontColor: color })
    },
  },
}
</script>
<style>
.full-height {
  height: 100%;
  max-height: 100%;
}
.moveable-control.moveable-origin {
  display: none;
}
.moveable-line {
  background: #ffffff00 !important;
}
.grabbing-cursor {
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
  cursor: grabbing;
  height: 100%;
  max-height: 100%;
}
.hand-cursor {
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
  cursor: grab;
  height: 100%;
  max-height: 100%;
}
/* moveableの複数選択時の四角形 */
.moveable-area {
  outline: solid #2196f3 1px;
  background: #2196f320;
}
</style>
