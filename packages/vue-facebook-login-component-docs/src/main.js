import 'core-js/stable'
import smoothscroll from 'smoothscroll-polyfill'

import 'prismjs' // https://github.com/vmware/clarity/issues/1832
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Components from 'vue-components'
import VueAnalytics from 'vue-analytics'
import VueFinalModal from 'vue-final-modal'
import VueCompositionApi from '@vue/composition-api'

smoothscroll.polyfill()

Vue.config.productionTip = false

Vue.use(Components)
Vue.use(VueFinalModal())
Vue.use(VueCompositionApi)
Vue.use(VueAnalytics, { id: 'UA-48463434-6', router })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
