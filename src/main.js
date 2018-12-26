import Vue from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// import 'jquery/dist/jquery.js';
// import 'popper.js/dist/popper.js'

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
