import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import VueCompositionApi from '@vue/composition-api'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.use(VueAnalytics, { id: 'UA-48463434-6', router })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
