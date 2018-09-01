import Vue from 'vue'
import Router from 'vue-router'
import Docs from './views/Docs.vue'
import Docs2x from './views/Docs-2.x.vue'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Documentation',
    component: Docs
  },
  // {
  //   path: '/documentation-2.x',
  //   name: 'Documentation 2.x',
  //   component: Docs2x
  // },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/PrivacyPolicy.vue')
  }
]

export default new Router({ routes })
