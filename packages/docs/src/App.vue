<template>
  <div id="app">
    <Menu
      :routes="routes"
      :token-style="{ backgroundImage: `url(${menuToken})` }"
    >
      <!-- <a href="https://jsfiddle.net/adi518/jfa0gys8">JS Fiddle</a> -->
      <template v-if="breakpoint.noMatch">
        <Downloads :pkg="pkg" />
        <GithubStars :pkg="pkg" />
      </template>
    </Menu>
    <RouterView />
    <!-- <ShowAt small-down> -->
    <ScrollToTop />
    <!-- </ShowAt> -->
    <ScrollToAnchor />
    <Footer :pkg="pkg" />
    <Breakpoint v-model="breakpoint" />
  </div>
</template>

<script>
import { extend as extendBreakpoint } from 'vue-breakpoint-component'
import {
  getNavHeight,
  ScrollToAnchor as ScrollToAnchorCreator
} from 'vue-components'

import router, { routes } from '@/router'
import menuToken from '@/assets/vue-logo-facebook.svg'
import pkg from 'vue-facebook-login-component/package.json'

const ScrollToAnchor = new ScrollToAnchorCreator(router, {
  offsetY: () => getNavHeight() * 2
})

const breakpoints = {
  small: '(min-width: 576px)',
  medium: '(min-width: 768px)',
  large: '(min-width: 992px)',
  xlarge: '(min-width: 1200px)',
  xsmallDown: '(max-width: 575.98px)',
  smallDown: '(max-width: 767.98px)',
  mediumDown: '(max-width: 991.98px)',
  largeDown: '(max-width: 1199.98px)'
}

const { VShowAt: ShowAt, VBreakpoint: Breakpoint } = extendBreakpoint({
  breakpoints
})

export default {
  name: 'app',
  components: {
    ShowAt,
    Breakpoint,
    ScrollToAnchor
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
