import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: atob(localStorage.getItem('u')) || null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
