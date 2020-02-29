import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import store from "./store";
import firebase from 'firebase'
import 'firebase/firestore'

Vue.config.productionTip = false
const configOptions = {
  apiKey: "AIzaSyCCsq8Y95GGZ9B9j_MgdwMYq0W6YGMUXRA",
  authDomain: "blog-87b92.firebaseapp.com",
  databaseURL: "https://blog-87b92.firebaseio.com",
  projectId: "blog-87b92",
  storageBucket: "blog-87b92.appspot.com",
  messagingSenderId: "426891010188",
  appId: "1:426891010188:web:14ea5137877edc117b5ba9"
}
firebase.initializeApp(configOptions);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");