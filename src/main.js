import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'

import store from './store'

import 'buefy/dist/buefy.css'

import router from "./ router";

Vue.config.productionTip = false

Vue.use(Buefy)


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
