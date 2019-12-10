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
    shop: {},
    cart: []
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
    },
    ADD_TO_CART(state, item) {
      let foundItem = state.cart.find(i => i.id === item.id)
      if (foundItem) {
        foundItem.unit.value = foundItem.unit.value + item.unit.value
      } else {
        state.cart.push(item)
      }
    },
    REMOVE_FROM_CART(state, item) {
      state.cart = state.cart.filter(i => i.id !== item.id)
    },
    EMPTY_CART(state) {
      state.cart = []
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
      if(!state.shop.sections) {
        return []
      }
      return state.shop.sections.map(item => {
        return (({ id, title, image }) => ({ id, title, image }))(item);
      })
    },
    categoryItems: (state) => categoryId => {
      if (!state.shop.sections) return []
      let section = state.shop.sections.find(section => {return section.id == categoryId})
      return section.items || []
    },
    cart: (state) => {
      return state.cart
    }
  },
  modules: {
  }
})
