<template lang="pug">
div(@contextmenu='showContextMenu')
  div.mx-auto
    v-card-text
      v-textarea(
        v-model='item.text',
        ref='textarea',
        :id="`stock-card-text-area-${item.id}`",
        :color='$const.colors.grey',
        :background-color='item.cardColor',
        @focus='onFocusItem',
        rows='2',
        auto-grow,
        hide-details,
        solo,
        flat
      )
        template(v-slot:append)
          v-btn.stock-card-trush-button(@click='trushStockCard(item)', x-small, icon)
            v-icon mdi-trash-can-outline
      slot
  context-menu(v-model='contextMenu')
    v-list
      v-list-item(@click='deleteStockCard(item)') 削除
      v-list-item
        v-list-item-title コピー
      v-list
      v-list-item
        v-menu(open-on-hover, bottom, offset-x)
          template(v-slot:activator='{ on, attrs }')
            v-list-item-title(v-bind='attrs', v-on='on') 色 ▶︎
          color-select(@change-color='changeColor')
</template>
<script>
import ContextMenu from '~/components/common/ContextMenu'
import ColorSelect from '~/components/common/ColorSelect'
import contextmenu from '~/mixins/contextmenu'
// nuxt.config.jsにカラーのやつがあるからそれをインポート

export default {
  components: {
    ContextMenu,
    ColorSelect,
  },
  mixins: [contextmenu],
  props: {
    item: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    deleteStockCard(item) {
      this.$emit('delete-stock-card', item)
    },
    trushStockCard(item) {
      this.$emit('delete-stock-card', item)
    },
    changeColor(color) {
      const item = _.cloneDeep(this.item)
      item.cardColor = color
      this.$emit('item-changed', item)
    },
    onFocusItem(item) {
      this.$emit('item-focus', this.item)
    },
  },
}
</script>
<style scoped>
.stock-card-trush-button {
  position: absolute;
  top: 4px;
  right: 4px;
}
</style>
