import axios from 'axios'
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import env from '../libs/environment'

export interface Board {
  name: string
  author: string
}

// ストアの型を定義する
export interface State {
  boards: Board[]
}

// InjectionKeyを定義する
export const key: InjectionKey<Store<State>> = Symbol()

// Storeを作成する
export const store = createStore<State>({
  state: {
    boards: [
      { name: 'hoge1', author: 'fuga' },
      { name: 'hoge2', author: 'fuga' },
    ],
  },
  getters: {
    getFirstBoard: (state) => {
      return state.boards ? state.boards[0] : ({} as Board)
    },
  },
  mutations: {
    setBoard(state, { board }) {
      state.boards.push(board)
    },
  },
  actions: {
    // createBoard({ commit, state }, board: Board) {
    //   commit('setBoard', { board: board })
    // },
    async createBoard({ commit, state }, payload) {
      const res = await axios.post(env.makeApiUrl(`/boards`), payload)
      console.log(res)
      commit('setBoard', res)
      return res
    },
  },
})

// 独自のuserStoreメソッドを定義する
export function useStore() {
  // InjectionKeyをuserStoreメソッドに渡す
  return baseUseStore(key)
}
