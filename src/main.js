import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import store from './store'
import 'buefy/dist/buefy.css'
import router from "./ router";

import firebase from 'firebase';
import "./firebase-config";
Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')