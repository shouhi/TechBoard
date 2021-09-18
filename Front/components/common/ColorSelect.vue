<template lang="pug">
v-card(max-width='160', color='#EEEEEE')
  v-row(justify='space-around', align='center', dense)
    v-col(v-for='(color, i) in $const.colors.board', :key='i', align='center')
      v-btn(text, @click='changeColor(color)' fab small outlined color ='#000')
        v-avatar(:color='color', size='36')
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},

  mounted() {},
  methods: {
    changeColor(color) {
      this.$emit('change-color', color)
    },
  },
}
</script>

<style></style>
