import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorage.getItem('u') ? atob(localStorage.getItem('u')) : '',
    pin: null,
    shoppingLists: [],
    status: 'Ready',
    shop: {}
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      localStorage.setItem('u', btoa(user))
    },
    SET_PIN(state, pin) {
      state.pin = pin
    },
    SET_STATUS(state, status) {
      state.status = status
    },
    SET_SHOP(state, shop) {
      state.shop = shop
    }
  },
  actions: {
    fetchUser(context) {
      context.commit('SET_USER', localStorage.getItem('u'))
    },
    async fetchShop(context) {
      context.commit('SET_STATUS', 'Loading')
      let { data } = await Axios.get('/json/shop.json')
      context.commit('SET_STATUS', 'Ready')
      context.commit('SET_SHOP', data)
    }
  },
  getters: {
    shopCategories(state) {
      return state.shop.sections.map(item => {
        return (({ id, title, image }) => ({ id, title, image }))(item);
      })
    }
  },
  modules: {
  }
})
