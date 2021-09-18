// vuex (store)
import env from '~/libs/environment'
export const state = () => ({
  // private
  user: undefined,
  firebaseUid: '',
})

export const mutations = {
  // public
  setUser(state, payload) {
    // storeのuser/nameを書き換える
    state.user = payload
  },
  setFirebaseUid(state, uid) {
    // storeのuser/firebaseUidを書き換える
    state.firebaseUid = uid
  },
  clearState(state) {
    state.user = undefined
    state.firebaseUid = ''
  },
}
export const getters = {
  // public
  user(state) {
    // me.vueにstoreに保存されているnameを送っている
    return state.user
  },
  firebaseUid(state) {
    // me.vueにstoreに保存されているfirebaseUidを送っている
    return state.firebaseUid
  },
}
export const actions = {
  // public (非同期処理)
  async fetchMe({ commit, state }) {
    // ユーザーの情報（データ）を取得する
    const res = await this.$axios.$get(
      env.makeApiUrl(`/users/${state.firebaseUid}`)
    )
    commit('setUser', res)
  },
  async updateMe({ commit, state }, payload) {
    // 更新API
    await this.$axios.$put(
      env.makeApiUrl(`/users/${state.firebaseUid}`),
      payload
    )
    commit('setUser', payload)
  },
}
