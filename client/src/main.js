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
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import
 { 
   faBars,  faUser, faAngleRight, faAngleDown,
   faLock, faArrowDown, faTimesCircle, faCheck, faPlus, faTimes, faTrashAlt, faChevronCircleDown  
 } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add
(
  faBars, faUser, faAngleRight, faAngleDown, faLock,
  faArrowDown, faTimesCircle, faCheck, faPlus, faTimes, faTrashAlt, faChevronCircleDown
);
library.add(far);
library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.prototype.$BaseURL = "http://localhost:3000/api/"

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


