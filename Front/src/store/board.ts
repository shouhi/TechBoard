import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

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
  actions: {
    add({ commit, state }, board: Board) {
      commit('add', { board: board })
    },
  },
  mutations: {
    add(state, { board }) {
      state.boards.push(board)
    },
  },
})

// 独自のuserStoreメソッドを定義する
export function useStore() {
  // InjectionKeyをuserStoreメソッドに渡す
  return baseUseStore(key)
}
