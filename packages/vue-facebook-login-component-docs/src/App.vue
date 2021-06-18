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
      <Button title="Vue 3 Support" @click="showModal = true">🔥 Vue 3</Button>
      <Social :pkg="pkg" />
    </Nav>
    <Menu
      :routes="routes"
      menu-class="app-menu"
      :token-style="{ backgroundImage: `url(${menuToken})` }"
    >
      <template v-slot:before>
        Facebook Login
      </template>
      <template v-if="breakpoint.noMatch">
        <Downloads :pkg="pkg" />
        <GithubStars :pkg="pkg" />
      </template>
    </Menu>
    <RouterView />
    <!-- <ShowAt small-down> -->
    <!-- </ShowAt> -->
    <Footer :pkg="pkg" />
    <ScrollToTopV2 />
    <ScrollToAnchor />
    <vue-final-modal
      escToClose
      v-model="showModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <span class="modal__title">Vue 3 is now supported 🔥</span>
      <center>
        <small>
          While there are no API changes, you should still mind breaking changes
          and test your app accordingly. Happy coding! 🖐
        </small>
      </center>
    </vue-final-modal>
    <Breakpoint v-model="breakpoint" />
  </div>
</template>

<script>
import { extend as extendBreakpoint } from 'vue-breakpoint-component'
import {
  getNavHeight,
  ScrollToAnchor as ScrollToAnchorCreator,
} from 'vue-components'

import docsPkg from 'vue-facebook-login-component-docs/package.json'
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

const { /* VShowAt: ShowAt, */ VBreakpoint: Breakpoint } = extendBreakpoint({
  breakpoints,
})

export default {
  name: 'app',
  components: {
    // ShowAt,
    Breakpoint,
    ScrollToAnchor,
  },
  data: () => ({
    pkg,
    routes,
    docsPkg,
    menuToken,
    showModal: false,
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

.modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 35vw;
  margin: 0 1rem;
  min-width: 22rem;
  border-radius: 1rem;
  padding: 1rem 1.5rem 1.5rem;
  background-color: rgba(0, 0, 0, 0.75);
}

.modal__title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
</style>
