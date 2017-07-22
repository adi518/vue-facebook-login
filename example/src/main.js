// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
// import VueGoodTable from '../../src/index.js'
import VueGoodTable from '../../dist/vue-good-table.js'

Vue.use(VueGoodTable)

/* eslint-disable no-new */
window.Vue = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
