<template lang="pug">
  div
    v-menu(v-model="localShowMenu" :position-x="dialog.x" :position-y="dialog.y" absolute offset-y)
      slot
  
</template>

<script>
export default {
  model: {
    prop: 'dialog',
  },
  props: {
    dialog: {
      type: Object,
      require: true,
      default: () => ({
        show: false,
        x: 0,
        y: 0,
      }), // Objectを生成する関数を指定する
    },
  },
  data: () => ({}),
  computed: {
    localShowMenu: {
      // getの後にsetの処理
      get() {
        return this.dialog.show
      },
      // v-modelで渡ってきたものをいじって返す時はinput
      //  valにはgetのものが入ってる
      set(val) {
        this.$emit('input', {
          x: this.dialog.x,
          y: this.dialog.y,
          show: val,
        })
      },
    },
  },
  methods: {},
}
</script>
