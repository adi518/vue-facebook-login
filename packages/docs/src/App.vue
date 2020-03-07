<template>
  <div id="app">
    <v-menu
      :routes="routes"
      :token-style="{ backgroundImage: `url(${menuToken})` }"
    >
      <template v-if="breakpoint.noMatch">
        <v-github-stars></v-github-stars>
        <v-downloads></v-downloads>
      </template>
    </v-menu>
    <v-scroll-to-anchor></v-scroll-to-anchor>
    <v-scroll-to-top></v-scroll-to-top>
    <router-view></router-view>
    <v-footer :pkg="pkg"></v-footer>
    <v-breakpoint v-model="breakpoint"></v-breakpoint>
  </div>
</template>

<script>
import { VBreakpoint } from 'vue-breakpoint-component'

import VMenu from '@/components/Menu'
import VFooter from '@/components/Footer'
import VDownloads from '@/components/Downloads'
import VGithubStars from '@/components/GitHubStars'
import VScrollToTop from '@/components/ScrollToTop'
import ScrollToAnchor from '@/components/ScrollToAnchor'

import router, { routes } from '@/router'
import { NAV_STICKY_HEIGHT } from '@/components/Nav'
import menuToken from '@/assets/vue-logo-facebook.svg'
import pkg from 'vue-facebook-login-component/package.json'

const VScrollToAnchor = new ScrollToAnchor(router, {
  offsetY: NAV_STICKY_HEIGHT
})

export default {
  name: 'app',
  components: {
    VMenu,
    VFooter,
    VDownloads,
    VBreakpoint,
    VGithubStars,
    VScrollToTop,
    VScrollToAnchor
  },
  data: () => ({
    pkg,
    routes,
    menuToken,
    breakpoint: {}
  })
}
</script>

<style lang="scss">
@import '@/styles/global';

#app {
  min-width: 320px;
}
</style>
