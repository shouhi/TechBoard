<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import firebase from 'firebase'
import router from './router'

export default defineComponent({
  name: 'App',
  // ユーザーがログインしているかしていないかの条件分岐
  setup() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        router.replace('/dashboard')
      } else {
        router.replace('/')
      }
    })
  },
})
</script>
