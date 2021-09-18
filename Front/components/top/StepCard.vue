<template lang="pug">
v-col(cols="12" md="4")
  v-card.mx-auto(style="padding:1rem;" flat min-height="300")
    p.step-number() {{num+1}}
    p.title.text-center.font-weight-bold {{value.title}}
    v-img(
        class="white--text align-end"
        contain
        max-height="120"
        :src='require(`~/assets/images/step/${num+1}.png`)'

    )
    v-card-text {{value.description}}

</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      },
    },
    num: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
<style scoped>
.step-number {
  font-size: 6rem;
  font-weight: bold;
  color: #00000010;
  float: left;
  position: absolute;
  left: 8px;
  top: 0;
  line-height: 1;
  z-index: 3;
}
</style>
