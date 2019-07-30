import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from 'firebase'
import './assets/scss/style.scss'

Vue.config.productionTip = false
const config = {
  apiKey: "AIzaSyBsN3LGiI_8vez2-ydkHi5e68CDP63O9bA",
  authDomain: "sanzoku-camp.firebaseapp.com",
  databaseURL: "https://sanzoku-camp.firebaseio.com",
  projectId: "sanzoku-camp",
  storageBucket: "",
  messagingSenderId: "712339712985",
  appId: "1:712339712985:web:882b421f29395843"
};

firebase.initializeApp(config);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')