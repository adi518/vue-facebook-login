import Vue from 'vue'
import Router from 'vue-router'

import Docs from '@/views/Docs'
import Readme from '@/views/Readme'
import ReadmeV1 from '@/views/ReadmeV1'
import PrivacyPolicy from '@/views/PrivacyPolicy'

Vue.use(Router)
export const routes = [
  {
    path: '/',
    component: Docs,
    children: [
      {
        path: '/',
        component: Readme,
        name: 'Documentation'
      },
      {
        path: '/v1.x',
        component: ReadmeV1,
        name: 'Documentation v1.x'
      }
    ]
  },
  {
    name: 'Privacy Policy',
    path: '/privacy-policy',
    component: PrivacyPolicy
  }
]

const router = new Router({ routes })

export default router
