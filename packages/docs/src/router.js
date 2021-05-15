import Vue from 'vue'
import Router from 'vue-router'

import Root from '@/views/Docs'
import Readme from '@/views/Readme'
import LiveExample from '@/views/LiveExample'
import PrivacyPolicy from '@/views/PrivacyPolicy'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: Root,
    children: [
      {
        path: '/',
        component: Readme,
        name: 'Get Started',
      },
    ],
  },
  {
    name: 'Live Example',
    path: '/live-example',
    component: LiveExample,
  },
  {
    path: '/js-fiddle',
    name: '🧙 JS Fiddle',
    meta: { url: 'https://jsfiddle.net/adi518/jfa0gys8', target: '_blank' },
  },
  {
    name: 'Privacy Policy',
    path: '/privacy-policy',
    component: PrivacyPolicy,
  },
]

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  const url = to.meta?.url
  if (url) window.open(url, to.meta?.target)
  next(url ? false : undefined)
})

export default router
