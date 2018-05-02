import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    doubleCounter: state => {
      return state.count * 2
    },
    stringCounter: state => {
      return state.count + ' Clicks'
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.count += payload.by
    },
    decrement: (state, payload) => {
      state.count -= payload.by
    }
  },
  actions: {
    increment: ({ commit }, payload) => {
      commit('increment', payload)
    },
    decrement: ({ commit }, payload) => {
      commit('decrement', payload)
    },

    asyncincrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload)
      }, payload.time)
    },
    asyncdecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('decrement', payload)
      }, payload.time)
    }
  }
})
