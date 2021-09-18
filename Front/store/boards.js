// vuex (store)
import Vue from 'vue'
import env from '~/libs/environment'
export const state = () => ({
  boards: {},
  boardAccesses: {},
})
export const mutations = {
  setBoards(state, boards) {
    for (let i = 0; i < boards.length; i++) {
      const board = boards[i]
      Vue.set(state.boards, board.id, board) // state.boards[board.id]=boardと同じ
    }
  },
  setBoardAccesses(state, boardAccesses) {
    for (let i = 0; i < boardAccesses.length; i++) {
      const boardAccess = boardAccesses[i]
      Vue.set(
        state.boardAccesses,
        boardAccess.board_id,
        boardAccess.accessed_at
      )
    }
  },
  setBoardAccess(state, boardAccess) {
    Vue.set(state.boardAccesses, boardAccess.board_id, boardAccess.accessed_at)
  },
  setBoard(state, board) {
    board.permissions = board.board_permissions
    Vue.set(state.boards, board.id, board)
  },
  deleteBoard(state, boardId) {
    Vue.delete(state.boards, boardId)
  },
  clearState(state) {
    state.boards = {}
    state.boardAccesses = {}
  },
}
export const getters = {
  // public
  boards(state) {
    return state.boards
  },
  boardAccesses(state) {
    return state.boardAccesses
  },
}
export const actions = {
  // public (非同期処理)
  async fetchBoards({ commit, state }) {
    // boardsの情報（データ）を取得する
    const res = await this.$axios.$get(env.makeApiUrl(`/boards`))
    commit('setBoards', res)
  },
  async fetchBoardAccesses({ commit, state }) {
    // boardsの情報（データ）を取得する
    const res = await this.$axios.$get(env.makeApiUrl(`/board-accesses`))
    commit('setBoardAccesses', res)
  },
  async fetchBoard({ commit, state }, payload) {
    // boardsの情報（データ）を取得する
    const res = await this.$axios.$get(env.makeApiUrl(`/boards/${payload.id}`))
    commit('setBoard', res)
  },
  async updateBoard({ commit, state }, payload) {
    // boardsの情報（データ）を取得する
    const res = await this.$axios.$put(
      env.makeApiUrl(`/boards/${payload.id}`),
      payload
    )
    commit('setBoard', res)
  },
  async updateBoardAccess({ commit, state }, payload) {
    // boardsの情報（データ）を取得する
    const res = await this.$axios.$post(
      env.makeApiUrl(`/board-accesses`),
      payload
    )
    commit('setBoardAccess', res)
  },
  async createBoard({ commit, state }, payload) {
    const res = await this.$axios.$post(
      this.$env.makeApiUrl(`/boards`),
      payload
    )
    commit('setBoard', res)
    return res
  },
  async removeBoard({ commit, state }, payload) {
    await this.$axios.$delete(
      this.$env.makeApiUrl(`/boards/${payload.id}`),
      payload
    )
    commit('deleteBoard', payload.id)
  },
}
