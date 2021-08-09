<template>
  <div class="m-4 px-3 py-2 bg-gray-700 rounded-md shadow">
    <div class="flex flex-wrap content-center h-12">
      <div class="flex-grow-3 text-left">
        <div class="text-left flex-grow-1">
          <input
            v-model="state.board.title"
            type="text"
            class="
              w-full
              px-2
              py-1
              bg-gray-700
              border border-gray-400
              rounded-md
              focus:outline-none
            "
            placeholder="Title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type Board = {
  uuid: string
  title: string
}

export default defineComponent({
  props: {
    board: {
      type: Object as PropType<Board>,
      default: null,
    },
  },
  setup(props) {
    const state = {
      board: JSON.parse(JSON.stringify(props.board)),
    }

    return {
      state,
    }
  },
})
</script>
