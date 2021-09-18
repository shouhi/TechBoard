<template lang="pug">
div.bar
  v-toolbar(flat style="background-color:#ffffff03; padding:0px 8px;")
    v-row(justify='center', align='center')
      v-btn(icon x-large @click="toBack")
        v-icon mdi-arrow-left-circle
      v-toolbar-title(style="background-color:#ffffff; margin-left:0.5rem; padding:4px 12px;" @click="titleClick") {{boardName}}
</template>

<script>
export default {
  components: {},
  props: {
    boardName: {
      type: String,
      default: '',
    },
  },
  data: () => ({}),
  computed: {},
  async mounted() {},
  created() {},
  methods: {
    titleClick() {
      this.$emit('config')
    },
    toBack() {
      this.$emit('to-back')
    },
  },
}
</script>

<style scoped>
.bar {
  z-index: 1000;
  position: absolute;
  left: 0;
}
</style>
