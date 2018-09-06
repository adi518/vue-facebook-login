import Vue from 'vue'
import Router from 'vue-router'
import Docs from './views/Docs.vue'

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
  //   component: () => import('./views/Docs-2.x.vue')
  // },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: () => import('./views/PrivacyPolicy.vue')
  }
]

export default new Router({ routes })
