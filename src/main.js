import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'

// import counter from './components/counter'
// import result from './components/result'
// import anotherresult from './components/anotherresult'
// import anothercounter from './components/anothercounter'
import home from './components/home'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Vuetify)
// Vue.component('app-counter', counter)
// Vue.component('app-result', result)
// Vue.component('app-anotherresult', anotherresult)
// Vue.component('app-anothercounter', anothercounter)

Vue.component('home', home)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
