<template>
  <div>
    <v-nav>
      <template>
        <v-title :pkg="pkg" :docsPkg="docs"></v-title>
        <v-button
          is-icon
          title="Alternate Logo"
          @click="toggleAlternateLogo"
          v-if="facebook.model.enabled && disconnected"
        >
          💋
        </v-button>
        <v-button is-icon title="Invert Colors" @click="toggleInvert">
          🍭
        </v-button>
        <v-button
          title="Logout"
          @click="facebook.scope.logout"
          v-if="facebook.scope.logout && connected"
        >
          logout
        </v-button>
        <v-social :pkg="pkg"></v-social>
      </template>
    </v-nav>

    <v-hero>
      <vue-logo class="mb-25"></vue-logo>

      <!-- DEMO -->
      <v-facebook-login
        @login="handleLogin"
        @click="handleClick"
        v-model="facebook.model"
        :app-id="facebook.appId"
        @sdk-init="handleSdkInit"
        class="docs-facebook-login-button mx-auto"
        logo-class="docs-facebook-login-button-logo"
        :useAlternateLogo="facebook.useAlternateLogo"
        :transition="['padding-right 0.15s ease-in-out']"
        :class="{ 'is-connected': connected, 'is-inverted': inverted }"
      >
        <template slot="after">
          <v-avatar v-if="idle && connected" :avatarUrl="avatarUrl"></v-avatar>
        </template>
      </v-facebook-login>
      <!-- DEMO end -->

      <v-install-anchor
        class="mt-25"
        :to="$refs.readme ? $refs.readme.$el : null"
      ></v-install-anchor>
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
      useAlternateLogo: false
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
      const { api } = this.facebook.FB
      api('/me', { fields: 'id, name' }, user => {
        this.user = user
        api(`${this.user.id}/picture?width=9999&redirect=false`, picture =>
          this.$set(this.user, 'picture', picture)
        )
      })
    },
    toggleAlternateLogo() {
      this.facebook.useAlternateLogo = !this.facebook.useAlternateLogo
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
.docs-facebook-login-button {
  min-width: auto !important;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
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
    .docs-facebook-login-button-logo {
      width: 1.75rem !important;
    }
  }
}
</style>
