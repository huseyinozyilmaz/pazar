import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorage.getItem('u') ? atob(localStorage.getItem('u')) : '',
    pin: null,
    shoppingLists: []
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      localStorage.setItem('u', btoa(user))
    },
    SET_PIN(state, pin) {
      state.pin = pin
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
