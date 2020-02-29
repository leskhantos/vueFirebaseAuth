import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import store from "./store";
import firebase from 'firebase'
import 'firebase/firestore'

Vue.config.productionTip = false
const configOptions = {
//
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