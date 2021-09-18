<template lang="pug">
v-card(max-width='130', color='#E0E0E0')
  v-row(justify='space-around', align='center', dense)
    v-col(
      v-for='(color, i) in $const.fontColors.board',
      :key='i',
      align='center'
    )
      v-btn(text, @click='changeFontColor(color)' fab small outlined color='#000') 
        v-avatar(:color='color', size='36')
</template>

<script>
export default {
  data: () => ({}),

  mounted() {},
  methods: {
    changeFontColor(color) {
      this.$emit('change-font-color', color)
    },
  },
}
</script>

<style></style>
