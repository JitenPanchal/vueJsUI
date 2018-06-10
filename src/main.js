// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate'
import VueResource from 'vue-resource'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueResource)
Vue.use(store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
