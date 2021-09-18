<template lang="pug">
  v-snackbar(
    v-model="snackbar.snackbar"
    :top="snackbar.y === 'top'"
    :bottom="snackbar.y === 'bottom'"
    :centered="snackbar.y === 'center'"
    :color="snackbar.color"
    :timeout="snackbar.timeout"
    :style="`z-index:${$const.zIndex.snackBar}`"
  ) {{snackbar.text}}

    slot
</template>
<script>
export default {
  components: {},
  props: {
    snackbar: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
