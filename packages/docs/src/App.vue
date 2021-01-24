<template>
  <div id="app">
    <Nav>
      <Title :pkg="pkg" :docsPkg="docsPkg" />
      <!-- <Button
        is-icon
        title="Alternate Logo"
        @click="toggleAltLogo"
        v-if="facebook.model.enabled && disconnected"
        >💋</Button
      > -->
      <!-- <Button is-icon title="Invert Colors" @click="toggleInvert">🍭</Button> -->
      <!-- <Button
        title="Logout"
        @click="facebook.scope.logout"
        v-if="facebook.scope.logout && connected"
        >logout</Button
      > -->
      <ScrollToTopScope>
        <Button
          is-icon
          slot-scope="scope"
          title="Back to Top"
          @click="scope.scrollToTop"
          >👆</Button
        >
      </ScrollToTopScope>
      <Social :pkg="pkg" />
    </Nav>
    <Menu
      :routes="routes"
      menu-class="app-menu"
      :token-style="{ backgroundImage: `url(${menuToken})` }"
    >
      <template v-slot:before>Vue.js Facebook Login</template>
      <!-- <a href="https://jsfiddle.net/adi518/jfa0gys8">JS Fiddle</a> -->
      <template v-if="breakpoint.noMatch">
        <Downloads :pkg="pkg" />
        <GithubStars :pkg="pkg" />
      </template>
    </Menu>
    <RouterView />
    <!-- <ShowAt small-down> -->
    <!-- <ScrollToTop /> -->
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
  ScrollToAnchor as ScrollToAnchorCreator,
} from 'vue-components'

import docsPkg from 'docs/package.json'
import router, { routes } from '@/router'
import menuToken from '@/assets/vue-logo-facebook.svg'
import pkg from 'vue-facebook-login-component/package.json'

const ScrollToAnchor = new ScrollToAnchorCreator(router, {
  offsetY: () => getNavHeight() * 2,
})

const breakpoints = {
  small: '(min-width: 576px)',
  medium: '(min-width: 768px)',
  large: '(min-width: 992px)',
  xlarge: '(min-width: 1200px)',
  xsmallDown: '(max-width: 575.98px)',
  smallDown: '(max-width: 767.98px)',
  mediumDown: '(max-width: 991.98px)',
  largeDown: '(max-width: 1199.98px)',
}

const { VShowAt: ShowAt, VBreakpoint: Breakpoint } = extendBreakpoint({
  breakpoints,
})

export default {
  name: 'app',
  components: {
    ShowAt,
    Breakpoint,
    ScrollToAnchor,
  },
  data: () => ({
    pkg,
    routes,
    docsPkg,
    menuToken,
    breakpoint: {},
  }),
}
</script>

<style lang="scss">
@import '@/styles/global';

.app-menu {
  background-image: linear-gradient(90deg, #0c1121 0%, #0c1121 100%);

  a {
    &:hover {
      color: #ffffff;
    }
  }
}

#app {
  min-width: 320px;
}
</style>
