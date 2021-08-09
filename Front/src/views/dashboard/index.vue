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
        <BoardsList
          v-for="item in state.boards"
          :key="item.uuid"
          :board="item"
        ></BoardsList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CreateBoardDialog from '../../components/dialog/CreateBoardDialog.vue'
import BoardsList from '../../components/dashboard/BoardsList.vue'
import { ref } from 'vue'
import { defineComponent, reactive } from 'vue'
import axios from 'axios'

const baseURL = 'http://localhost:3000/'

type Todo = {
  uuid: string
  title: string
}

export default defineComponent({
  name: 'App',
  components: { CreateBoardDialog, BoardsList },
  setup() {
    const getBoards = () => {
      axios.get(baseURL).then((res) => {
        if (res && res.data) {
          console.log(res)
          state.boards = res.data.resBody
        }
      })
    }

    getBoards()

    const createBoard = async () => {
      await axios.put(baseURL, { title: state.title })
      getBoards()
    }

    const state = reactive({
      title: '',
      boards: [],
    })
    const showModal = ref(false)
    return {
      state,
      showModal,
      createBoard,
    }
  },
})
</script>
