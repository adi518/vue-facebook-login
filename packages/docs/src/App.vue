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
    <ScrollToTop />
    <ScrollToAnchor />
    <Footer :pkg="pkg" />
    <Breakpoint v-model="breakpoint" />
  </div>
</template>

<script>
import Breakpoint from 'vue-breakpoint-component'
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

export default {
  name: 'app',
  components: {
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
