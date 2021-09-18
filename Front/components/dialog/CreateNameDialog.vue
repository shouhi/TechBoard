<template lang="pug">
v-dialog(v-model='dialog', max-width="550",persistent )
  v-card.create-name-dialog-style
    h1 Tech.Boardへようこそ🎉
    h3 まずは、名前を入力しましょう！
      v-spacer
    v-text-field.field-position(v-model='name', label='名前を入れてください' outlined)
    v-card-actions.position
      v-btn(color="primary" block @click="createName" :disabled='!name') 作成
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      name: undefined,
    };
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  methods: {
    createName() {
      this.$emit("create-name", this.name);
    },
  },
};
</script>
<style>
.create-name-dialog-style {
  position: relative;
  height: 55vh;
  width: 50vw;
  padding: 30px;
}

.field-position {
  padding-top: 110px;
}
.position {
  padding-top: 50px;
}
.btn-position {
  position: absolute;
  padding-right: 10px;
  padding-bottom: 30px;
  right: 43%;
  bottom: 0%;
}
h1 {
  text-align: center;
}
h3 {
  text-align: center;
  font-weight: 300;
  padding-top: 10px;
  padding-bottom: 70px;
}
</style>
