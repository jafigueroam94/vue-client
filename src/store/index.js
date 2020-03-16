import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    SET_USER: function (state, user) {
      state.user = user
    },
    SET_LOGGED_IN: function (state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
    },
    SET_NOT_AUTH: function (state) {
      state.isLoggedIn = false
      state.user = {}
    }
  },
  actions: {
    async login ({ commit }, { username, password }) {
      try {
        const { data } = await axios.post('/api/login', { username: username, password: password })
        commit('SET_USER', data.user)
        commit('SET_LOGGED_IN', true)
        return Promise.resolve()
      } catch (error) {
        commit('SET_NOT_AUTH')
        throw error.response
      }
    },
    async logout ({ commit }) {
      try {
        const { data } = await axios.post('/api/logout')
        if (data.status === 'success') {
          commit('SET_LOGGED_IN', false)
          commit('SET_USER', {})
        }
        return Promise.resolve()
      } catch (error) {
        console.error(error)
      }
    },
    setUser ({ commit }, { user, isLoggedIn }) {
      commit('SET_LOGGED_IN', isLoggedIn)
      commit('SET_USER', user)
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    user: state => state.user
  },
  modules: {}
})
