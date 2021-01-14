import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import store from './store'
import 'buefy/dist/buefy.css'
import router from "./ router";
import axios from "axios";
// import firebase from 'firebase';
// import "./firebase-config";


// Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false
Vue.use(Buefy)


axios.interceptors.request.use(function(config) {
  const isAuthenticated = store.getters["auth/isAuthenticated"]();

  if (isAuthenticated) {
    config.headers["Authorization"] =
      "Bearer " + store.getters["auth/getAccessToken"]();
  } else {
    config.headers["Authorization"] = null;
  }
  return config;
});

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      // Якщо сервер відповів «401»
      router.push({ path: "/login" });
    }
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')