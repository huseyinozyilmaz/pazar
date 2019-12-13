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
    selectedShoppingList: null,
    status: 'Ready',
    shop: {}
  },
  mutations: {
    SET_PROFILE(state, profile) {
      state.profile = profile
      localStorage.setItem('pazar_p', btoa(sjcl.encrypt(K, JSON.stringify(state.profile))))
    },
    SET_STATUS(state, status) {
      state.status = status
    },
    SET_SHOP(state, shop) {
      state.shop = shop
    },
    SET_SHOPPING_LISTS(state, list) {
      console.log('Setting Shopping List')
      state.shoppingLists = list
    },
    SET_SELECTED_SHOPPING_LIST(state, list) {
      state.selectedShoppingList = list
    },
    ADD_TO_SHOPPING_LISTS(state, item) {
      state.shoppingLists.push(item)
    },
    ADD_TO_CART(state, item) {
      let foundItem = state.selectedShoppingList.items.find(i => i.id === item.id)
      if (foundItem) {
        foundItem.unit.value = foundItem.unit.value + item.unit.value
      } else {
        state.selectedShoppingList.items.push(item)
      }
    },
    REMOVE_FROM_CART(state, item) {
      if (state.selectedShoppingList.items) {
        state.selectedShoppingList.items = state.selectedShoppingList.items.filter(i => i.id !== item.id)
      }
    },
    EMPTY_CART(state) {
      state.selectedShoppingList.items = []
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
      let { data } = await Axios.get(`/api/profile/${getProfileId(state.profile)}/list`)
      console.log(data)
      commit('SET_SHOPPING_LISTS', data)
      commit('SET_STATUS', 'Ready')
    },
    async createShoppingList({ commit, state }, list) {
      list.profileId = getProfileId(state.profile)
      await Axios.post(`/api/profile/${list.profileId}/list`, list)
      commit('ADD_TO_SHOPPING_LISTS', list)
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
      if (!state.selectedShoppingList || !state.selectedShoppingList.items) return null
      return state.selectedShoppingList.items
    },
    hasProfile: (state) => {
      if (state.profile.name && state.profile.email && state.profile.pin && state.profile.contact.name && state.profile.contact.email) {
        return true
      } else {
        return false
      }
    },
    hasSelectedShoppingList: (state) => {
      return state.selectedShoppingList !== null ? true : false
    },
    profile: (state) => {
      let publicProfile = JSON.parse(JSON.stringify(state.profile))
      delete publicProfile.pin
      return publicProfile
    }
  },
  modules: {
  }
})

function getProfileId(profile) {
  let profileIdBitArray = sjcl.hash.sha256.hash(profile.email + profile.pin)
  return sjcl.codec.hex.fromBits(profileIdBitArray)
}