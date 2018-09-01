<template>
  <div class="docs">
    <div class="docs-container docs-container--has-jumbotron" :style="{ height: `${breakpoint.innerHeight}px` }">
      <div class="docs-jumbotron container" :class="breakpoint.noMatch && ['pl-3', 'pr-3'] || 'p-0'">

        <!-- GITHUB RIBBON -->
        <a class="docs-github" :href="pkg.repository.url" target="_blank"><img src="octocat.png" alt="Go to GitHub"></a>

        <!-- HEADING -->
        <div class="docs-clearfix text-center">
          <v-hide-at no-match>
            <img class="docs-vue-logo mb-10" :src="assets.vueLogo">
          </v-hide-at>
          <h1>Facebook Login</h1>
          <p class="docs-tagline text-center mb-20">
            Integrate Facebook Login and <br v-if="breakpoint.noMatch"> access the benefits quickly and easily.
          </p>
        </div>

        <!-- DEMO -->
        <v-facebook-login
          class="docs-facebook-button mx-auto mb-35"
          v-model="facebook.model"
          :app-id="facebook.appId"
          @sdk-init="handleSdkInit"
          @connect="handleConnect"
          @logout="handleLogout"
          @click="handleClick"
        ></v-facebook-login>

        <!-- DEMO:USER -->
        <div class="docs-user mx-auto" :class="breakpoint.noMatch ? null : 'mb-35'">
          <div class="docs-user-picture"
            :class="{ 'docs-user-picture--is-visible': computed.picture }"
            :style="{ backgroundImage: `url(${connected && computed.picture || ''}` }"></div>
          <template v-if="connected && flags.nopicture">{{ computed.name }}</template>
          <div v-if="disconnected" class="docs-user-state-placeholder">Disconnected</div>
          <div class="docs-user-state-indicator" :class="{ 'docs-user-state-indicator--green': connected }"></div>
        </div>

        <!-- GITHUB STAR -->
        <v-hide-at no-match>
          <div class="d-flex justify-content-center">
            <!--
              Do not remove global class `github-button`!
              We need to wrap `.github-button` because
              GitHub buttons looks for a parent element.
            -->
            <span>
              <a
                class="github-button"
                :href="pkg.repository.url"
                data-icon="octicon-star"
                data-show-count="true"
                aria-label="Star adi518/vue-facebook-login on GitHub"
              >Star</a>
            </span>
          </div>
        </v-hide-at>

        <!-- VERSION -->
        <div class="docs-version">{{ pkg.version }} - {{ docspkg.version }}</div>

        <!-- ABSOLUTE ANCHOR -->
        <v-a class="docs-fixed-anchor"
          :scroll-to="$refs.docs">Install, Examples &amp; Documentation</v-a>

      </div>
    </div>

    <div ref="docs" class="docs-container">
      <div class="container docs-clearfix" :class="breakpoint.noMatch && ['pl-3', 'pr-3'] || 'p-0'">
       <div class="docs-markdown" v-html="markdowns.readme"></div>
      </div>
    </div>

    <footer class="docs-footer">
      <div class="container" :class="breakpoint.noMatch && ['pl-3', 'pr-3'] || 'p-0'">
        <div class="docs-credit">
          <span class="d-flex">Made by</span>
          <div class="d-flex">            
            <a
              class="docs-credit-anchor"
              href="https://github.com/adi518"
              target="_blank"
            >🦊&nbsp;@adi518</a>
            <a
              class="docs-credit-anchor"
              href="https://github.com/iliran11"
              target="_blank"
            >🐙&nbsp;@iliran11</a>
          </div>
        </div>
      </div>
    </footer>

    <v-breakpoint v-model="breakpoint"></v-breakpoint>

  </div>
</template>

<script>
import Prism from 'prismjs'

import typy from 'typy'
import VFacebookLogin from 'vue-facebook-login-component'
import VBreakpoint, {
  VHideAt,
  Model as Breakpoint
} from 'vue-breakpoint-component'

import vueLogo from '@/assets/vue-logo-facebook.svg'

import docspkg from '../../package.json'
import pkg from '../../../package.json'
import readme from '../../../README.md'

import VA from '@/components/Anchor'

export default {
  name: 'Docs',
  components: {
    VA,
    VHideAt,
    VBreakpoint,
    VFacebookLogin
  },
  data: () => ({
    pkg,
    docspkg,

    assets: {
      vueLogo
    },

    markdowns: {
      readme
    },

    facebook: {
      FB: {},
      model: {},
      appId: '2146252248983683'
    },

    flags: {
      nopicture: false
    },

    user: {},

    breakpoint: new Breakpoint()
  }),
  mounted() {
    window.setTimeout(Prism.highlightAll)
  },
  computed: {
    computed() {
      const name = this.user.name
      const picture = typy(this.user, 'picture.data.url').safeString
      return { name, picture }
    },
    connected() {
      return this.facebook.model.connected
    },
    disconnected() {
      return !this.connected
    }
  },
  methods: {
    getUserData() {
      const { api } = this.facebook.FB
      api('/me', { fields: 'id, name' }, user => {
        this.user = user
        api(`${this.user.id}/picture?width=9999&redirect=false`, picture => {
          if (picture) {
            this.$set(this.user, 'picture', picture)
          } else {
            this.flags.nopicture = true
          }
        })
      })
    },
    handleSdkInit({ FB }) {
      this.facebook.FB = FB
    },
    handleConnect() {
      this.getUserData()
    },
    handleLogout() {
      // eslint-disable-next-line
      console.info('[V-Facebook-Login info]: Logged `logout` event.')
    },
    handleClick() {
      // eslint-disable-next-line
      console.info('[V-Facebook-Login info]: Logged `click` event.')
    }
  }
}
</script>
