import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'
global.jQuery = jQuery 
global.$ = jQuery
let Bootstrap = require ('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
//Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars,  faUser, faAngleRight, faAngleDown, faLock, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faUser, faAngleRight, faAngleDown, faLock, faArrowDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
