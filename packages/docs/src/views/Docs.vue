<template>
  <div>
    <!-- NAV -->
    <Nav>
      <Title :pkg="pkg" :docsPkg="docs" />
      <Button
        is-icon
        title="Alternate Logo"
        @click="toggleAltLogo"
        v-if="facebook.model.enabled && disconnected"
        >💋
      </Button>
      <Button is-icon title="Invert Colors" @click="toggleInvert">🍭</Button>
      <Button
        title="Logout"
        @click="facebook.scope.logout"
        v-if="facebook.scope.logout && connected"
        >logout</Button
      >
      <Social :pkg="pkg" />
    </Nav>
    <!-- NAV end -->

    <Hero>
      <VueLogo class="mb-25" />

      <!-- DEMO -->
      <v-facebook-login
        @login="handleLogin"
        @click="handleClick"
        v-model="facebook.model"
        :app-id="facebook.appId"
        @sdk-init="handleSdkInit"
        :useAltLogo="facebook.useAltLogo"
        class="docs-v-facebook-login mx-auto"
        logo-class="docs-v-facebook-login-logo"
        loader-class="docs-v-facebook-login-loader"
        :class="{ 'is-connected': connected, 'is-inverted': inverted }"
      >
        <template slot="after">
          <Avatar v-if="idle && connected" :avatarUrl="avatarUrl" />
        </template>
      </v-facebook-login>
      <!-- DEMO end -->

      <InstallAnchor
        class="mt-25"
        :to="$refs.readme ? $refs.readme.$el : null"
      ></InstallAnchor>
    </Hero>

    <!-- README -->
    <Page ref="readme">
      <router-view></router-view>
    </Page>
    <!-- README end -->

    <Breakpoint v-model="breakpoint" />
  </div>
</template>

<script>
import { get } from 'lodash'
import VFacebookLogin from 'vue-facebook-login-component'
import Breakpoint, { VHideAt, VShowAt } from 'vue-breakpoint-component'

import docs from 'docs/package.json'
import Avatar from '@/components/Avatar'
import pkg from 'vue-facebook-login-component/package.json'

export default {
  name: 'Docs',
  components: {
    Avatar,
    VHideAt, // eslint-disable-line
    VShowAt, // eslint-disable-line
    Breakpoint,
    VFacebookLogin
  },
  data: () => ({
    pkg,
    docs,
    facebook: {
      FB: {},
      model: {},
      scope: {},
      appId:
        process.env.NODE_ENV === 'development'
          ? '852858511574509'
          : '2146252248983683',
      useAltLogo: false
    },
    user: {},
    breakpoint: {},
    inverted: false
  }),
  computed: {
    idle() {
      return this.facebook.model.idle
    },
    connected() {
      return this.facebook.model.connected
    },
    disconnected() {
      return !this.connected
    },
    avatarUrl() {
      return get(this.user, 'picture.data.url')
    }
  },
  methods: {
    getUserData() {
      this.facebook.FB.api(
        '/me',
        { fields: 'id, name, picture' },
        user => (this.user = user)
      )
    },
    toggleAltLogo() {
      this.facebook.useAltLogo = !this.facebook.useAltLogo
    },
    handleSdkInit({ FB, scope }) {
      this.facebook.scope = scope
      this.facebook.FB = FB
    },
    handleLogin() {
      this.getUserData()
    },
    handleClick() {
      // eslint-disable-next-line no-console
      console.warn('Button was clicked.')
    },
    toggleInvert() {
      this.inverted = !this.inverted
    }
  }
}
</script>

<style lang="scss">
// https://getemoji.com/
// https://octodex.github.com/
// http://www.color-hex.com/color/2f4480
// https://www.tablesgenerator.com/markdown_tables
// https://stackoverflow.com/questions/23571724/github-markdown-colspan

@import '@/styles/bootstrap-required';
@import '~bootstrap/scss/utilities';
@import '~bootstrap/scss/grid';
@import '@/styles/markdown';

// https://tobiasahlin.com/blog/how-to-animate-box-shadow/
.docs-v-facebook-login {
  font-family: inherit !important;
  box-shadow: 0rem 21vh 1.825rem -0.125rem rgba(0, 0, 0, 0.2) !important;

  &.is-inverted {
    color: #3b55a0 !important;
    background-color: white !important;

    &.is-connected {
      color: white !important;
    }

    &[disabled] {
      color: #3b55a0 !important;
      background: #cccccc !important;
    }

    &:hover {
      color: white !important;
      background-color: #3b55a0 !important;
    }
  }

  &.is-connected:not(:hover) {
    background-color: transparent !important;
    border-color: rgba(255, 255, 255, 0.25) !important;
  }

  @include media-breakpoint-up(sm) {
    font-size: 1.25rem !important;
  }

  @at-root {
    .docs-v-facebook-login-logo,
    .docs-v-facebook-login-loader {
      width: 1.75rem !important;
      height: 1.75rem !important;
    }
  }
}
</style>
