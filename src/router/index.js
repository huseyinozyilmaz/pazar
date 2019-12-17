import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shopping-lists',
    name: 'shopping-lists',
    component: () => import(/* webpackChunkName: "shopping-lists" */ '../views/ShoppingLists.vue')
  },
  {
    path: '/new-shopping-list',
    name: 'new-shopping-list',
    component: () => import(/* webpackChunkName: "create-list" */ '../views/NewShoppingList.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/backend',
    name: 'backend',
    component: () => import(/* webpackChunkName: "backend" */ '../views/Backend.vue')
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: () => import(/* webpackChunkName: "confirmation" */ '../views/Confirmation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'home') {
    next()
  } else if (!store.getters.hasProfile) {
    next('/profile')
  } else if (!store.getters.hasSelectedShoppingList && to.name === 'cart') {
    next('/shopping-lists')
  } else {
    next()
  }
})

export default router
