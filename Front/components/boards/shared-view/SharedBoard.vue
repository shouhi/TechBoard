<template lang="pug">
#shared-board.full-height(
  ref='sharedboard',
  v-on:wheel='onScroll',
  @mouseover='onMouseOver',
  @mouseleave='onMouseLeave',
  @mousemove='onDrag',
  @mouseup='isClickNow = false',
  @mousedown='isClickNow = true',
  :class='modeClass'
)
  .full-height
    v-overlay(:value='!editable', :opacity='opacity')
    shared-cards-field(
      :sharedItems='sharedItems',
      :transform='transform',
      :selectedItems='selectedItems',
      :mode='mode',
      @change-one-item='onItemChanged',
      @selected-changed='onSelectedChanged',
      @items-changed='onSelectedItemsChanged',
      @drag='setDragNow',
      @edit-card='editCard',
      :boardInfo='boardInfo'
    )
    shared-cards-tool(
      :selectedItems='selectedItems',
      :boardSize='boardSize',
      :transform='transform',
      :sharedItems='sharedItems',
      :isShowMenu='!isDragNow && !isEditNow',
      @change-one-item='onItemChanged',
      @change-selected-items='onSelectedItemsParamsChanged',
      @remove-selected-items='removeSelectedItems',
      @selected-changed='onSelectedChanged',
      @items-changed='onSelectedItemsChanged'
    )
  shared-board-overview(
    :sharedItems='sharedItems',
    :transform='transform',
    :boardSize='boardSize'
  )
  v-overlay(
    absolute,
    :value='dragin',
    :z-index='$const.zIndex.sharedBoardOverlay'
  )
</template>
<script>
import SharedCard from '~/components/boards/shared-view/SharedCard'
import SharedBoardOverview from '~/components/boards/shared-view/SharedBoardOverview'
import SharedCardsTool from '~/components/boards/shared-view/SharedCardsTool'
import SharedCardsField from '~/components/boards/shared-view/SharedCardsField'
import Const from '~/libs/const'

export default {
  components: {
    SharedCard,
    SharedBoardOverview,
    SharedCardsField,
    SharedCardsTool,
  },
  props: {
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
    mode: {
      type: String,
      require: true,
      default: '',
    },
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
    dragin: {
      type: Boolean,
      default: false,
    },
    selectedItems: {
      type: Array,
      require: true,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      editText: false,
      isClickNow: false,
      isDragNow: false,
      isEditNow: false,
      opacity: 0,
      role: Const.ROLE_VIEWER,
    }
  },
  computed: {
    modeClass() {
      if (this.mode === 'drag') {
        return this.isClickNow ? 'grabbing-cursor' : 'hand-cursor'
      }
      return ''
    },
  },
  methods: {
    setMouseEnter(mouse) {
      this.$emit('mouseenter', mouse)
    },
    onItemChanged(item) {
      this.$emit('item-changed', item)
    },
    onSelectedChanged(selectedItems) {
      this.$emit('selected-changed', selectedItems)
    },
    onScroll(e) {
      e.preventDefault()
      const transform = _.cloneDeep(this.transform)
      if (e.ctrlKey) {
        transform.scale = transform.scale - e.deltaY * 0.005
      } else {
        transform.x =
          this.transform.x + (e.wheelDeltaX * 0.5) / this.transform.scale
        transform.y =
          this.transform.y + (e.wheelDeltaY * 0.5) / this.transform.scale
      }
      this.changeTransform(transform)
    },
    onDrag(e) {
      const transform = _.cloneDeep(this.transform)
      if (this.mode === 'drag' && this.isClickNow) {
        transform.x = this.transform.x + e.movementX / this.transform.scale
        transform.y = this.transform.y + e.movementY / this.transform.scale
      }
      this.changeTransform(transform)
    },
    changeTransform(transform) {
      this.$emit('transform-changed', transform)
    },
    onMouseOver(e) {
      this.setMouseEnter(true)
    },
    onMouseLeave(e) {
      this.setMouseEnter(false)
    },
    onSelectedItemsParamsChanged(param) {
      const newItems = []
      for (let i = 0; i < this.selectedItems.length; i++) {
        const id = this.selectedItems[i]
        newItems.push(_.assign({ id }, param))
      }
      this.onSelectedItemsChanged(newItems)
    },
    onSelectedItemsChanged(newItems) {
      this.$emit('items-changed', newItems)
    },
    removeSelectedItems() {
      this.$emit('remove-selected-items')
    },
    getItemById(id) {
      return this.sharedItems.find((item) => item.id === id)
    },
    cloneItemById(id) {
      return _.cloneDeep(this.sharedItems.find((item) => item.id === id))
    },
    setDragNow(drag) {
      this.isDragNow = drag
    },
    editCard(edit) {
      this.isEditNow = edit
    },
  },
}
</script>
<style>
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
