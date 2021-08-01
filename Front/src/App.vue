<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import firebase from 'firebase'
import router from './router'

export default defineComponent({
  name: 'App',
  // ユーザーがログインしているかしていないかの条件分岐
  setup() {
    const defaultLayout = 'default'

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        router.replace('/dashboard')
      } else {
        router.replace('/')
      }
    })
    const { currentRoute } = useRouter()
    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    )
    return {
      layout,
    }
  },
})
</script>
