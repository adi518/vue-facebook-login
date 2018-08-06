<template>
  <div class="docs">
    <div class="docs-container docs-container--has-jumbotron docs-100vh js-vh-fix">
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
          :app-id="appId"
          @sdk-load="handleSdkLoad"
          @connect="handleConnect"
          @logout="handleLogout"
          @click="handleClick">
        </v-facebook-login>

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
            <!-- Do not remove global class `github-button`! -->
            <a
              class="github-button"
              :href="pkg.repository.url"
              data-icon="octicon-star"
              data-show-count="true"
              aria-label="Star iliran11/facebook-login-vue on GitHub"
            >Star</a>
          </div>
        </v-hide-at>

        <!-- VERSION -->
        <div class="docs-version">{{ pkg.version }} - {{ docspkg.version }}</div>

        <!-- ABSOLUTE ANCHOR -->
        <v-a class="docs-fixed-anchor"
          :scroll-to="$refs.docs">Install, Examples &amp; Documentation</v-a>

      </div>
    </div>

    <div ref="docs" class="docs-container docs-min-100vh">
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
              href="https://github.com/iliran11"
              target="_blank"
            >🐙&nbsp;Liran Cohen</a>
            <a
              class="docs-credit-anchor"
              href="https://github.com/adi518"
              target="_blank"
            >🦊&nbsp;Adi Sahar</a>
          </div>
        </div>
      </div>
    </footer>

    <v-breakpoint v-model="breakpoint"></v-breakpoint>

  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Prism from 'prismjs'

import typy from 'typy'
import VFacebookLogin from 'facebook-login-vuejs'
import VBreakpoint, {
  VHideAt,
  Model as Breakpoint
} from 'vue-breakpoint-component'

import vueLogo from '@/assets/vue-logo-facebook.svg'

import docspkg from '../../package.json'
import pkg from '../../../package.json'
import readme from '../../../README.md'
import { VhChromeFix } from '@/modules/VhChromeFix'

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
      model: {}
    },

    flags: {
      nopicture: false
    },

    user: {},

    instances: {},

    breakpoint: new Breakpoint()
  }),
  created() {
    /**
     * Initiate non-reactive properties.
     */
    this.instances.ChromeFix = undefined
  },
  mounted() {
    window.setTimeout(Prism.highlightAll)

    this.instances.vhChromeFix = new VhChromeFix([
      { selector: '.js-vh-fix', vh: 100 }
    ])
  },
  destroyed() {
    this.instances.vhChromeFix.destroy()
  },
  computed: {
    appId() {
      if (process.env.NODE_ENV === 'production') {
        return '2181039348841705'
      }
      return '326022817735322'
    },
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
    handleSdkLoad({ FB }) {
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

<style lang="scss">
// https://getemoji.com/
// https://octodex.github.com/
// http://www.color-hex.com/color/2f4480
// https://www.tablesgenerator.com/markdown_tables
// https://stackoverflow.com/questions/23571724/github-markdown-colspan

@import url('https://fonts.googleapis.com/css?family=Roboto:300');

$app-min-width: 320px;

/* Bootstrap */
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
/* Bootstrap end */

/* Prismjs */
@import '~prismjs/themes/prism.css';

.docs {
  pre[class*='language-'] {
    margin-top: 0;
    margin-bottom: 0;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    margin-bottom: 1.5rem;
    background: rgba(#f5f2f0, 0.9);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    background: none;
  }
}
/* Prismjs end */

/* Common Layout */
.docs {
  min-width: $app-min-width;
}

.docs-container {
  position: relative;
}

.docs-container--has-jumbotron {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2f4480;
}

.docs-vue-logo {
  width: 4rem;
  opacity: 0.9;

  @include media-breakpoint-down(xs) {
    width: 3rem;
  }
}

.docs-tagline {
  line-height: 1.5;
}

.docs-credit {
  color: #8b9dc3;
  line-height: 3.5;
  display: inline-block;
  // position: absolute;
  // left: 1rem;
  // bottom: 0;

  a {
    --transition-duration: 0.5s;

    min-width: 8rem;
    position: relative;
    text-decoration: none;
    transition: color var(--transition-duration);

    &:not(:first-child) {
      margin-left: 0.5rem;
    }

    &:hover {
      color: lighten(#8b9dc3, 10%);

      &::before {
        background-color: lighten(#8b9dc3, 10%);
      }
    }

    &::before {
      content: '';
      height: 1px;
      width: 100%;
      position: absolute;
      background-color: #8b9dc3;
      transition: background-color var(--transition-duration);
    }
  }
}

.docs-credit-anchor {
  &:hover {
    text-decoration: none;
  }
}

.docs-facebook-button {
  --box-shadow-opacity: 0.25;

  font-family: inherit;
  transition: box-shadow 0.5s;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, var(--box-shadow-opacity));

  &:hover {
    --box-shadow-opacity: 0.16;
  }
}

.docs-user {
  position: relative;
  width: 7rem;
  height: 7rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  // background-color: rgba(28, 40, 76, 0.5);
  box-shadow: 0 0.1rem 0rem rgba(255, 255, 255, 0.2),
    inset 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
}

.docs-user-picture {
  opacity: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 1s;

  &--is-visible {
    z-index: 1;
    opacity: 1;
  }
}

.docs-user-state-placeholder {
  opacity: 0.9;
}

.docs-user-state-indicator {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: crimson;

  &--green {
    background-color: greenyellow;
  }
}

@keyframes docs-fade-in {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  25% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}

.docs-github {
  top: 1rem;
  right: 1rem;
  z-index: 1;
  position: absolute;

  &:hover {
    animation: docs-shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  img {
    width: 4rem;
    opacity: 0.9;
  }
}

.docs-version {
  top: 1rem;
  left: 1rem;
  color: #8b9dc3;
  position: absolute;
}

.docs-fixed-anchor {
  font-size: 1.2rem;
  color: #ffffff;
  left: 50%;
  bottom: 0.8rem;
  position: absolute;
  white-space: nowrap;
  transform: translateX(-50%);

  &:hover {
    color: inherit;
  }
}

.docs-footer {
  margin-top: 2rem;
  padding-top: 2rem;
  min-height: 20rem;
  background-color: #2f4480;
}

.docs-markdown {
  h2 {
    font-size: 1.5rem; // h4
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem; // h5
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    max-width: 200%;
    color: #2f4480;
    margin-bottom: 1.5rem;
    background-color: rgba(#f5f2f0, 0.9);

    @include media-breakpoint-down(xs) {
      width: 200%;
    }
  }

  th {
    font-weight: bold;
    background-color: rgba(#8b9dc3, 0.9);
  }

  td {
    border-top: 1px solid;

    &:first-child {
      background-color: rgba(lighten(#8b9dc3, 20%), 0.9);
    }
  }

  th,
  td {
    padding: 1rem;
    vertical-align: top;
    vertical-align: middle;
    border-right: 1px solid;
  }
}

.docs-table-wrap {
  @extend .docs-clearfix;

  + h2 {
    margin-top: 1rem;
  }

  @include media-breakpoint-down(xs) {
    overflow-x: scroll;
  }
}

#props-table-wrap,
#events-table-wrap,
#slots-table-wrap,
#scope-table-wrap {
  th:nth-child(1) {
    width: 20%;
  }
}

#props-table-wrap,
#events-table-wrap,
#scope-table-wrap {
  th:nth-child(2) {
    width: 20%;
  }
}

#props-table-wrap,
#events-table-wrap {
  th:nth-child(3),
  th:nth-child(4) {
    width: 30%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Utils */
.docs-c-pointer {
  cursor: pointer;
}
.docs-100vh {
  height: 100vh;
}
.docs-min-100vh {
  min-height: 100vh;
}
.docs-clearfix {
  &::after,
  &::before {
    height: 0;
    display: block;
    content: '\0020';
    overflow: hidden;
  }
  &::after {
    clear: both;
  }
}
/* Utils end */

/* Animations */
@keyframes docs-shake {
  10%,
  90% {
    transform: translateX(-1px);
  }
  20%,
  80% {
    transform: translateX(2px);
  }
  30%,
  50%,
  70% {
    transform: translateX(-3px);
  }
  40%,
  60% {
    transform: translateX(3px);
  }
}
/* Animations end */
</style>

<style lang="sass">
// https://codepen.io/mfritsch/pen/VYdeEE

.docs-scroll-down
  bottom: 2.5rem
  position: absolute
  transform: translateX(-50%)
  left: 50%
  display: flex
  align-items: center
  flex-direction: column

.docs-arrow
  opacity: .5;
  cursor: pointer
  width: 1.25rem
  height: 1.25rem
  z-index: 99
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yOTMuNzUxLDQ1NS44NjhjLTIwLjE4MSwyMC4xNzktNTMuMTY1LDE5LjkxMy03My42NzMtMC41OTVsMCwwYy0yMC41MDgtMjAuNTA4LTIwLjc3My01My40OTMtMC41OTQtNzMuNjcyICBsMTg5Ljk5OS0xOTBjMjAuMTc4LTIwLjE3OCw1My4xNjQtMTkuOTEzLDczLjY3MiwwLjU5NWwwLDBjMjAuNTA4LDIwLjUwOSwyMC43NzIsNTMuNDkyLDAuNTk1LDczLjY3MUwyOTMuNzUxLDQ1NS44Njh6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjIwLjI0OSw0NTUuODY4YzIwLjE4LDIwLjE3OSw1My4xNjQsMTkuOTEzLDczLjY3Mi0wLjU5NWwwLDBjMjAuNTA5LTIwLjUwOCwyMC43NzQtNTMuNDkzLDAuNTk2LTczLjY3MiAgbC0xOTAtMTkwYy0yMC4xNzgtMjAuMTc4LTUzLjE2NC0xOS45MTMtNzMuNjcxLDAuNTk1bDAsMGMtMjAuNTA4LDIwLjUwOS0yMC43NzIsNTMuNDkyLTAuNTk1LDczLjY3MUwyMjAuMjQ5LDQ1NS44Njh6Ii8+DQo8L3N2Zz4=)
  background-size: 100%
  background-repeat: no-repeat
  background-position: center

.docs-bounce
  animation: docs-bounce 4s infinite

@keyframes docs-bounce
  0%, 20%, 50%, 80%, 100%
    transform: translateY(0)
  40%
    transform: translateY(-30px)
  60%
    transform: translateY(-15px)
</style>
