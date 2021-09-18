<template lang="pug">
  div(:style="`z-index:${$const.zIndex.stockView}`")
    v-navigation-drawer#stock-view(
      v-if="display",
      permanent
    )
      stock-menu-bar(
        @add-item-shortkey='addItemShortkey'
        @add-stock-item='addStockItem'
        @delete-stock-card-undo='deleteStockCardUndo'
      )
      draggable(
        v-model="localItems"
        :group="{ name: 'people', pull: 'clone', put: false }"
        :options="{animation:300}"
        fallbackOnBody="true"
        forceFallback="true"
        @start="onDragStart"
        @end="onDragEnd"
        style="padding-top:64px"
      )
        stock-card(
          v-for="(item, i) in localItems" :key="i"
          :item="item" :id="item.id"
          :elevation="4"
          @delete-stock-card='deleteStockCard'
          @item-changed="changeItem"
          @item-focus="onFocusItem"
        )


</template>
<script>
import draggable from 'vuedraggable'
import StockMenuBar from '~/components/boards/stock-view/StockMenuBar'
import StockCard from '~/components/boards/stock-view/StockCard'
import Const from '~/libs/const'
export default {
  components: {
    draggable,
    StockMenuBar,
    StockCard,
  },
  props: {
    value: {
      type: Array,
      require: true,
      default: () => [],
    },
    boardInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      role: Const.ROLE_VIEWER,
      display: false,
    }
  },
  computed: {
    localItems: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  mounted() {
    this.display = this.editable
  },
  methods: {
    addStockItem(color) {
      this.$emit('add-stock-item', color)
    },
    addItemShortkey(color) {
      this.$emit('add-item-shortkey', color)
    },
    onDragEnd(event) {
      this.$emit('send-item', event)
      this.$emit('drag', false)
    },
    onDragStart(e) {
      this.$emit('drag', true)
    },
    onFocusItem(item) {
      this.$emit('item-focus', item)
    },
    deleteStockCard(item) {
      this.$emit('delete-stock-card', item)
    },
    deleteStockCardUndo() {
      this.$emit('undo')
    },
    changeItem(item) {
      this.$emit('item-changed', item)
    },
  },
}
</script>
<style>
#stock-view {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  max-height: 70vh;
}
</style>
