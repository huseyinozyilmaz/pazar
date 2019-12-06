import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/create-list',
    name: 'CreateList',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateList.vue')
  },
  {
    path: '/passcode',
    name: 'passcode',
    component: () => import(/* webpackChunkName: "about" */ '../views/Passcode.vue')
  },
  {
    path: '/shopping-lists',
    name: 'shopping-lists',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingLists.vue')
  },
  {
    path: '/create-shopping-list',
    name: 'create-shopping-list',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingLists.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
