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
            @createBoard="createBoard"
          />
          <p class="ml-9 mt-3">New Board</p>
        </div>
      </div>
      <BoardsList :boards="boards" />
    </div>
  </div>
</template>

<script lang="ts">
import CreateBoardDialog from '../../components/dialog/CreateBoardDialog.vue'
import BoardsList from '../../components/dashboard/BoardsList.vue'
import { ref } from 'vue'
import { Board } from '../../store/board'
import { useStore } from 'vuex'
import { defineComponent, computed } from 'vue'
import router from '../../router'

export default defineComponent({
  name: 'App',
  components: { CreateBoardDialog, BoardsList },
  setup() {
    const showModal = ref(false)
    const store = useStore()
    const createBoard = async (name: string) => {
      const res = await store.dispatch('createBoard', {
        name: name,
      } as Board)
      showModal.value = !showModal.value
      router.push(`/boards/${res.id}?notice=新しいボードを作成しました`)
    }
    return {
      showModal,
      boards: computed(() => store.state.boards), // ボードの一覧を返す
      createBoard,
    }
  },
})
</script>
