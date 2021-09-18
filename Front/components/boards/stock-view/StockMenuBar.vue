<template lang="pug">
div
    v-toolbar(absolute)
      v-btn(
          class="button"
          v-for="(color,i) in $const.colors.board" :key="i"
          v-shortkey="{mac:['meta', 'enter'],win:['ctrl', 'enter']}"
          @shortkey="addItemShortkey(color)"
          fab
          x-small
          @click="addItem(color)"
          :color="color")
          v-icon(color="brown lighten-2") mdi-plus
      v-menu(
          transition="slide-y-transition"
          bottom
      )
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    addItem(color) {
      this.$emit('add-stock-item', color)
    },
    changeColor(color) {
      this.$emit('change-color', color)
    },
    addItemShortkey(color) {
      this.$emit('add-item-shortkey', color)
    },
  },
}
</script>

<style scoped>
.button {
  margin: 3px;
}
</style>
