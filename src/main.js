import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { DateTime } from "luxon";

import '@/assets/css/default.css'

Vue.config.productionTip = false

Vue.filter('cartsize', function (value) {
  if (!value) return "Empty List";
  return value > 1 ? `${value} Items` : `${value} Item`;
})
Vue.filter('day', function (value) {
  if (!value) return "";
  return DateTime.fromISO(value).toFormat("dd");
})
Vue.filter('month', function (value) {
  if (!value) return "";
  return DateTime.fromISO(value).toFormat("LLL");
})
Vue.filter('ago', function (value) {
  if (!value) return "";
  const past = DateTime.fromISO(value)
  return past.toRelative();
})
Vue.filter('dateformat', function(value) {
  if (!value) return "";
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(value)
  return date.toLocaleDateString(undefined, options)
})
Vue.filter('priority', function (value) {
  if (!value) return "";
  return value.charAt(0).toUpperCase()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
