import Vue from 'vue'
import Router from 'vue-router'

import Docs from '@/views/Docs'
import Readme from '@/views/Readme'
import ReadmeV1 from '@/views/ReadmeV1'
import Playground from '@/views/Playground'
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
      },
      ...(process.env.NODE_ENV === 'development'
        ? [
            {
              name: 'Playground',
              path: '/playground',
              component: Playground
            }
          ]
        : []),
      {
        path: '/js-fiddle',
        name: 'JS Fiddle',
        meta: { url: 'https://jsfiddle.net/adi518/jfa0gys8', target: '_blank' }
      },
      {
        name: 'Privacy Policy',
        path: '/privacy-policy',
        component: PrivacyPolicy
      }
    ]
  }
]

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  const url = to.meta?.url
  if (url) window.open(url, to.meta?.target)
  next(url ? false : undefined)
})

export default router
