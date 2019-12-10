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
    path: '/passcode',
    name: 'passcode',
    component: () => import(/* webpackChunkName: "passcode" */ '../views/Passcode.vue')
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
    path: '/create-shopping-list',
    name: 'create-shopping-list',
    component: () => import(/* webpackChunkName: "create-shopping-list" */ '../views/ShoppingLists.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
