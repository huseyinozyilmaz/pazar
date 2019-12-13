import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { DateTime } from "luxon";

import '@/assets/css/default.css'

Vue.config.productionTip = false

Vue.filter('cartsize', function(value) {
  if (!value) return "Empty List";
  return value > 1 ? `${value} Items` : `${value} Item`;
})
Vue.filter('day', function(value) {
  if (!value) return "";
  return DateTime.fromISO(value).toFormat("dd");
})
Vue.filter('month', function(value) {
  if (!value) return "";
  return DateTime.fromISO(value).toFormat("LLL");
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
