<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">Create a board</h3>
    <div class="mt-4">
      <div class="mt-4">
        <div
          class="
            px-4
            py-4
            overflow-x-auto
            bg-white
            rounded-md
            whitespace-nowrap
          "
        >
          <button
            type="button"
            @click="showModal = !showModal"
            class="
              bg-blue-600
              hover:bg-blue-700
              text-white text-2xl
              hover:text-white
              mt-2
              ml-4
              py-7
              px-14
              border border-blue-500
              hover:border-transparent
              rounded-lg
            "
          >
            +
          </button>
          <CreateBoardDialog
            v-show="showModal"
            @close="showModal = !showModal"
          />
          <p class="ml-9 mt-3">New Board</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CreateBoardDialog from '../components/dialog/CreateBoardDialog.vue'
import { ref } from 'vue'
import { defineComponent } from 'vue'

const components = {
  CreateBoardDialog,
}
export default {
  name: 'App',
  components,
  setup() {
    const showModal = ref(false)
    return {
      showModal,
    }
  },
}
</script>
