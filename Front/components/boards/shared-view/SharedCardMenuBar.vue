<template lang="pug">
    v-list.d-inline-flex(:elevation="4" height="80px" class="pb-0" )
      v-menu(:z-index="$const.zIndex.sharedCardMenuBar" offset-y)
        template(v-slot:activator="{ on: menu, attrs }")
          div(class="fontColor").text-center 整列
            v-list-item(class="pa-0" class="px-2")
             v-btn(
                v-bind="attrs"
                v-on="{...menu }"
                fab
                color="white"
                small
                :elevation="0"
                class="mt-2"
                class="ml-0"
              )
              v-icon(:color='$const.colors.grey' class="mt-0") mdi-select-group
        v-list
          v-list-item(v-for='i of 10' :key='i' @click='align(i)') {{i}} 列

      v-menu(:z-index="$const.zIndex.sharedCardMenuBar" offset-y)
        template(v-slot:activator="{ on: menu, attrs }")
          div(class="fontColor").text-center 大小
            v-list-item(class="pa-0" class="px-2")
             v-btn(
                v-bind="attrs"
                v-on="{...menu }"
                fab
                color="white"
                small
                :elevation="0"
                class="mt-2"
                class="ml-0"
              )
              v-icon(:color='$const.colors.grey' class="mt-0") mdi-format-letter-case
        v-list
          v-list-item(@click='fontSize($const.fontSize.xxlarge)') 超特大
          v-list-item(@click='fontSize($const.fontSize.xlarge)') 特大
          v-list-item(@click='fontSize($const.fontSize.large)') 大
          v-list-item(@click='fontSize($const.fontSize.medium)') 中
          v-list-item(@click='fontSize($const.fontSize.small)') 小

      v-menu(:z-index="$const.zIndex.sharedCardMenuBar" offset-y)
        template(v-slot:activator="{ on, attrs }")
          div(class="fontColor").text-center 太さ
           v-list-item(class="pa-0" class="px-2")
             v-btn(
                @click='bold'
                v-bind="attrs"
                fab
                color="white"
                small
                :elevation="0"
                class="mt-2"
                class="ml-0"
              )
              v-icon(:color='$const.colors.grey' class="mt-0") mdi-format-bold

      v-menu(:z-index="$const.zIndex.sharedCardMenuBar" offset-y)
        template(v-slot:activator="{ on, attrs }")
          div(class="fontColor").text-center 文字化
           v-list-item(class="pa-0" class="px-2")
             v-btn(
                @click='changeTextFromCard'
                v-bind="attrs"
                fab
                color="white"
                small
                :elevation="0"
                class="mt-2"
                class="ml-0"
              )
              v-icon(:color='$const.colors.grey' class="mt-0") mdi-format-text

      v-menu(:z-index="$const.zIndex.sharedCardMenuBar" offset-y)
        template(v-slot:activator="{ on: menu, attrs }")
          div(class="fontColor").text-center 寸法
           v-list-item(class="pa-0" class="px-2")
             v-btn(
                @click='openSharedCardSizeDialog'
                v-bind="attrs"
                v-on="{...menu }"
                fab
                color="white"
                small
                :elevation="0"
                class="mt-2"
                class="ml-0"
              )
              v-icon(:color='$const.colors.grey' class="mt-0") mdi-resize

      v-menu(:z-index="$const.zIndex.sharedCardMenuBar" offset-y)
        template(v-slot:activator="{ on: menu, attrs }")
          div(class="fontColor").text-center 色
           v-list-item(class="pa-0" class="px-2")
             v-btn(
                :color='selectedItems.length===1 ? item.cardColor : $const.colors.transparent'
                v-bind="attrs"
                v-on="{...menu }"
                fab
                small
                :elevation="0"
                class="mt-2"
                class="ml-0"
              )
              v-icon(:color='$const.colors.grey' class="mt-0") mdi-palette
        color-select(@change-color="changeColor" )

      v-menu(:z-index="$const.zIndex.sharedCardMenuBar" offset-y)
        template(v-slot:activator="{ on: menu, attrs }")
          div(class="fontColor").text-center 文色
            v-list-item(class="pa-0" class="px-2")
              v-btn(
                :color='selectedItems.length===1 ? item.fontColor : $const.colors.transparent'
                v-bind="attrs"
                v-on="{...menu }"
                fab
                small
                :elevation="0"
                class="mt-2"
                class="ml-0"
              )
                v-icon(:color='$const.colors.grey' class="mt-0") mdi-brush
        font-color-select(@change-font-color="changeFontColor")

      v-menu(:z-index="$const.zIndex.sharedCardMenuBar" offset-y)
        template(v-slot:activator="{ on, attrs }")
          div(class="fontColor").text-center 詳細
           v-list-item(class="pa-0" class="px-2")
             v-btn(
                @click='openSharedCardEditDialog'
                v-bind="attrs"
                fab
                color="white"
                small
                :elevation="0"
                class="mt-2"
                class="ml-0"
              )
              v-icon(:color='$const.colors.grey' class="mt-0") mdi-comment-text-outline

      v-menu(:z-index="$const.zIndex.sharedCardMenuBar" offset-y)
        template(v-slot:activator="{ on, attrs }")
          div(class="fontColor").text-center 削除
           v-list-item(class="pa-0" class="px-2")
             v-btn(
                @click='remove'
                v-bind="attrs"
                fab
                color="white"
                small
                :elevation="0"
                class="mt-2"
                class="ml-0"
              )
              v-icon(:color='$const.colors.grey' class="mt-0") mdi-trash-can-outline

</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    selectedItems: {
      type: Array,
      require: true,
      default: () => [],
    },
    item: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  data: () => ({}),
  mounted() {},
  methods: {
    openSharedCardEditDialog() {
      this.$emit('open-shared-card-edit-dialog')
    },
    openSharedCardSizeDialog() {
      this.$emit('open-shared-card-size-dialog')
    },
    sharedCardMenuBar() {
      this.$emit('shared-card-menu-bar')
    },
    align(i) {
      this.$emit('align', i)
    },
    remove() {
      this.$emit('remove')
    },
    bold() {
      this.$emit('bold')
    },
    fontSize(size) {
      this.$emit('font-size', size)
    },
    changeTextFromCard() {
      this.$emit('change-text-from-card')
    },
    changeColor(color) {
      this.$emit('change-color', color)
    },
    changeFontColor(color) {
      this.$emit('change-font-color', color)
    },
  },
  text: {
    get() {
      return this.item.text
    },
    set(val) {
      this.localText = val
    },
  },
}
</script>
<style>
.position {
  margin: 3px 10px 0px 10px;
}
.menubar-icon {
  padding-right: 20px;
}
.fontColor {
  color: #757575;
  font-weight: bold;
  font-size: 11px;
}
</style>
