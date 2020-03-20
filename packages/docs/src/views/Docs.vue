<template>
  <div>
    <!-- NAV -->
    <v-nav>
      <v-title :pkg="pkg" :docsPkg="docs"></v-title>
      <v-button
        is-icon
        title="Alternate Logo"
        @click="toggleAltLogo"
        v-if="facebook.model.enabled && disconnected"
      >💋</v-button>
      <v-button is-icon title="Invert Colors" @click="toggleInvert">🍭</v-button>
      <v-button
        title="Logout"
        @click="facebook.scope.logout"
        v-if="facebook.scope.logout && connected"
      >logout</v-button>
      <v-social :pkg="pkg"></v-social>
    </v-nav>
    <!-- NAV end -->

    <v-hero>
      <vue-logo class="mb-25"></vue-logo>

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
          <v-avatar v-if="idle && connected" :avatarUrl="avatarUrl"></v-avatar>
        </template>
      </v-facebook-login>
      <!-- DEMO end -->

      <v-install-anchor class="mt-25" :to="$refs.readme ? $refs.readme.$el : null"></v-install-anchor>
    </v-hero>

    <!-- README -->
    <v-page ref="readme">
      <router-view></router-view>
    </v-page>
    <!-- README end -->

    <v-breakpoint v-model="breakpoint"></v-breakpoint>
  </div>
</template>

<script>
import { get } from 'lodash'
import VFacebookLogin from 'vue-facebook-login-component'
import VBreakpoint, { VHideAt, VShowAt } from 'vue-breakpoint-component'

import VNav from '@/components/Nav'
import VPage from '@/components/Page'
import VHero from '@/components/Hero'
import VTitle from '@/components/Title'
import VAvatar from '@/components/Avatar'
import VueLogo from '@/components/VueLogo'
import VSocial from '@/components/Social'
import VButton from '@/components/Button'
import VInstallAnchor from '@/components/InstallAnchor'

import docs from 'docs/package.json'
import pkg from 'vue-facebook-login-component/package.json'

export default {
  name: 'Docs',
  components: {
    VNav,
    VHero,
    VPage,
    VTitle,
    VAvatar,
    VueLogo,
    VHideAt, // eslint-disable-line
    VShowAt, // eslint-disable-line
    VSocial,
    VButton,
    VBreakpoint,
    VInstallAnchor,
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
  box-shadow: 0rem 12rem 1.825rem -0.125rem rgba(0, 0, 0, 0.2) !important;

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
    }

    .docs-v-facebook-login-loader {
      height: 1.75rem !important;
    }
  }
}
</style>
