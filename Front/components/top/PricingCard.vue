<template lang="pug">
v-col(cols="12" md="4")
  v-card(flat style="padding-bottom: 2rem;" tile)
    v-card(:color="value.color" flat style="padding: 1rem 0px;" tile)
      p.text-h6.text-center.font-weight-bold.white--text() {{value.title}}
      p.display-1.text-center.font-weight-bold.white--text {{value.price}}
    v-list
      p.text-h5.text-center.font-weight-bold(:class="`${value.color}--text`") {{value.subtitle}}
      v-list-item(v-for="(feature, key) in value.features" :key="key")
        v-icon(v-if="feature" :color="value.color") mdi-check-circle
        v-list-item-content(style="padding-left:0.5rem;") {{feature}}

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
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
