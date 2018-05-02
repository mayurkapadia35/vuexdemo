import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import leftbar from './components/leftbar'
import middlecontent from './components/content'

import home from './components/home'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.component('app-leftbar', leftbar)
Vue.component('app-content', middlecontent)

Vue.component('home', home)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
