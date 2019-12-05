import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorage.getItem('u') ? atob(localStorage.getItem('u')) : ''
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      localStorage.setItem('u', btoa(user))
    }
  },
  actions: {
    fetchUser(context) {
      context.commit('SET_USER', localStorage.getItem('u'))
    }
  },
  modules: {
  }
})
