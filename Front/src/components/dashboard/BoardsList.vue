<template>
  <div class="flex flex-wrap">
    <div
      v-for="board in boards"
      :key="board"
      class="
        m-4
        px-3
        py-2
        h-60
        w-48
        bg-white
        rounded-md
        shadow
        hover:bg-gray-100
      "
    >
      <div class="mt-5">
        <img v-bind:src="image" class="w-48" />
      </div>
      <p>{{ board.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type Board = {
  name: string
}

export default defineComponent({
  props: {
    boards: {
      type: Object as PropType<Board>,
      default: null,
    },
  },
  setup(props) {
    return {
      image: 'src/assets/logo.png',
    }
  },
})
</script>
