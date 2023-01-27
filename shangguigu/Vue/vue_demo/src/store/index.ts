import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    bigCount(state) {
      return state.count * 10
    }
  },
  mutations: {
    increment(state, payload) {
      state.count += payload
    },
    decrement(state, payload) {
      state.count -= payload
    }
  },
  actions: {
    incrementSync({ commit, state }, payload) {
      if (state.count % 2 !== 0) {
        commit('increment', payload)
      }
    },
    incrementWait({ commit }, payload) {
      setTimeout(() => {
        commit('increment', payload)
      }, 1000)
    }
  },
  modules: {
  }
})
