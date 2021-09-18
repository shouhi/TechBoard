<template>
  <v-container>
    <v-layout justify-center align-ceter>
      <v-text-field v-model="name" label="name"></v-text-field>
      <v-btn
        @click="onSave"
        color="blue darken-1"
        class="white--text font-weight-bold"
        >保存</v-btn
      >
    </v-layout>
  </v-container>
</template>

<script>
import extensions from '~/mixins/extensions'

export default {
  components: {},
  mixins: [extensions],
  // mouted はログインの一連の動作
  async asyncData({ store, params }) {
    await store.dispatch('user/fetchMe')
  },
  data() {
    return {
      localName: undefined,
    }
  },
  computed: {
    name: {
      // getter 関数
      get() {
        // 更新されてない時に初期値をセットする
        return this.$store.getters['user/user']?.name
      },
      // setter 関数
      set(newValue) {
        // 最新のnameを初期値としてセットする
        this.localName = newValue
      },
    },
  },
  async mounted() {},
  methods: {
    async onSave() {
      await this.actionWithLoadingSnackbar(async () => {
        await this.$store.dispatch('user/updateMe', { name: this.localName })
        this.localName = undefined
      }, '更新しました')
    },
  },
}
</script>
