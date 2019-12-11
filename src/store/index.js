import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import sjcl from 'sjcl'
const K = 'Thsjha6gastsab5asokcyw7a£gskMa0PqgsT'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: localStorage.getItem('pazar_p') ? JSON.parse(sjcl.decrypt(K, atob(localStorage.getItem('pazar_p')))) : { name: '', email: '', pin: '', contact: { name: '', email: '' } },
    shoppingLists: [],
    status: 'Ready',
    shop: {},
    cart: []
  },
  mutations: {
    SET_PROFILE(state, profile) {
      state.profile = profile
      console.log(JSON.stringify(state.profile))
      localStorage.setItem('pazar_p', btoa(sjcl.encrypt(K, JSON.stringify(state.profile))))
    },
    // SET_USER(state, user) {
    //   state.user = user
    //   localStorage.setItem('u', btoa(user))
    // },
    // SET_CONTACT(state, contact) {
    //   state.contact = contact
    //   localStorage.setItem('c', btoa(contact))
    // },
    // SET_PIN(state, pin) {
    //   state.pin = pin
    //   localStorage.setItem('c', btoa(pin))
    // },
    SET_STATUS(state, status) {
      state.status = status
    },
    SET_SHOP(state, shop) {
      state.shop = shop
    },
    SET_SHOPPING_LIST(state, list) {
      state.shoppingLists = list
    },
    ADD_TO_SHOPPING_LIST(state, item) {
      state.shoppingLists.push(item)
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
    fetchProfile(context) {
      context.commit('SET_PROFILE', JSON.parse(sjcl.decrypt(K, atob(localStorage.getItem('pazar_p')))))
    },
    async fetchShop(context) {
      context.commit('SET_STATUS', 'Loading')
      let { data } = await Axios.get('/json/shop.json')
      context.commit('SET_STATUS', 'Ready')
      context.commit('SET_SHOP', data)
    },
    async fetchShoppingLists({ commit, state }) {
      commit('SET_STATUS', 'Loading')
      let userId = sjcl.encrypt(state.pin, state.user)
      let { data } = await Axios.get(`/api/user/${userId}`)
      commit('SET_STATUS', 'Ready')
      commit('SET_SHOPPING_LIST', data)
    }
  },
  getters: {
    shopCategories(state) {
      if (!state.shop.sections) {
        return []
      }
      return state.shop.sections.map(item => {
        return (({ id, title, image }) => ({ id, title, image }))(item);
      })
    },
    categoryItems: (state) => categoryId => {
      if (!state.shop.sections) return []
      let section = state.shop.sections.find(section => { return section.id == categoryId })
      return section.items || []
    },
    cart: (state) => {
      return state.cart
    },
    hasProfile: (state) => {
      return (state.profile.name && state.profile.email && state.profile.pin && state.profile.contact.name && state.profile.contact.email)
    }
  },
  modules: {
  }
})
