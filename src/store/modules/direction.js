export default {
  namespaced: true,
  state: {
    isLoading: false,
    direction: 'forward'
  },
  getters: {},
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  }
}
