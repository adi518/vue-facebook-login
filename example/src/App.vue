<template>
  <div id="app">
    <div class="docs-demo">
      <img class="docs-github-anchor" src="static/octocat.png">
      <img class="vue-logo mb-1" style="width: 4rem" src="static/vue-fb.svg">
      <h1>Vue Facebook Login</h1>
      <p class="docs-tagline text-center mb-2">
        Integrate Facebook into your application faster than the sun.
      </p>
      <!-- DEMO -->
      <v-facebook-login
        :value="facebook.model"
        class="docs-facebook-button mb-3"
        app-id="326022817735322"
        @sdk-loaded="handleSdk">
      </v-facebook-login>
      <!-- DEMO:USER -->
      <div
        class="docs-user mb-3"
        :style="computed.picture && `background-image: url(${computed.picture})`">
        <template v-if="computed.nopicture">{{ computed.name }}</template>        
      </div>
      <!-- GITHUB STAR -->
      <p class="mb-3">
        <a
          class="github-button"
          href="https://github.com/iliran11/facebook-login-vue"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star adi518/vue-breakpoint-component on GitHub"
        >Star</a>
      </p>
      <!-- CREDIT -->
      <div class="docs-credit">
        <span class="docs-credit-made-by">Made by</span>
        <div class="docs-credit-authors">
          <a
            class="docs-anchor--author"
            href="https://github.com/iliran11"
            target="_blank"
          >🐙&nbsp; Liran Cohen</a>
          <a
            class="docs-anchor--author"
            href="https://github.com/adi518"
            target="_blank"
          >🦊&nbsp;Adi Sahar</a>
        </div>
      </div>
      <!-- VERSION -->
      <div class="docs-version">{{ pkg.version }}</div>
    </div>
  </div>
</template>

<script>
import typy from 'typy'
import VFacebookLogin from '@/components/FBLogin.vue'

export default {
  name: 'app',
  components: {
    VFacebookLogin
  },
  data: () => ({
    pkg: { version: '2.0.0' },
    facebook: {
      FB: {},
      model: {}
    },
    user: {}
  }),
  computed: {
    computed() {
      const name = this.user.name
      const picture = typy(this.user, 'picture.data.url').safeString
      const nopicture = !picture
      return { name, picture, nopicture }
    }
  },
  methods: {
    getUserData() {
      const { api } = this.facebook.FB
      api('/me', { fields: 'id, name' }, user => {
        this.user = user
        api(`${this.user.id}/picture?width=9999&redirect=false`, picture => {
          this.$set(this.user, 'picture', picture)
        })
      })
    },
    handleSdk({ FB, isConnected }) {
      this.facebook.FB = FB
      if (isConnected) {
        this.getUserData()
      }
    }
  }
}
</script>

<style lang="scss">
// https://getemoji.com/
// https://octodex.github.com/
// http://www.color-hex.com/color/2f4480

@import url('https://fonts.googleapis.com/css?family=Roboto:300');

html {
  box-sizing: border-box;

  @media (max-width: 576px) {
    font-size: 90%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
}

body {
  margin: 0;
  color: #ffffff;
  background-color: #2f4480;
  font-family: 'Roboto', sans-serif;
}

a {
  color: inherit;
}

h1 {
  color: #8b9dc3;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.docs-demo {
  height: 100vh;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.docs-tagline {
  line-height: 1.5;

  @media (max-width: 576px) {
    max-width: 16rem;
  }
}

.docs-credit {
  color: #8b9dc3;
  font-size: 0.8rem;
  line-height: 3.5;

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

.docs-credit-made-by {
  display: flex;
  text-align: center;
}

.docs-credit-authors {
  display: flex;
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
  width: 6rem;
  height: 6rem;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: rgba(28, 40, 76, 0.5);
  z-index: 1;
  left: 1rem;
  bottom: 1rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0.1rem 0rem rgba(255, 255, 255, 0.2),
    inset 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.7);
}

.docs-github-anchor {
  width: 4rem;
  top: 1rem;
  right: 1rem;
  opacity: 0.9;
  position: fixed;
}

.docs-version {
  top: 1rem;
  left: 1rem;
  opacity: 0.25;
  position: fixed;
}

/* Bootstrap helpers */
.mt-05 {
  margin-top: 0.5rem !important;
}

.mt-1 {
  margin-top: 1rem !important;
}

.mb-1 {
  margin-bottom: 1rem !important;
}

.mb-2 {
  margin-bottom: 2rem !important;
}

.mb-3 {
  margin-bottom: 3rem !important;
}

.text-center {
  text-align: center;
}
</style>
