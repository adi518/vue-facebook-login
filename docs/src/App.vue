<template>
  <div id="app">
    <v-menu :routes="routes" items="2" :token-style="{ backgroundImage: `url(${menuToken})` }">
      <!-- <template slot="item-1">
        <a href="https://www.npmjs.com/package/vue-facebook-login-component">
          <img src="https://img.shields.io/npm/dm/vue-facebook-login-component.svg" alt="npm">
        </a>
      </template> -->
      <template slot="item-2">
        <v-show-at no-match>
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
              aria-label="Star adi518/vue-facebook-login-component on GitHub"
            >Star</a>
          </span>
        </v-show-at>
      </template>
    </v-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import pkg from '../../package.json'

import VMenu from '@/components/Menu'
import { VShowAt } from 'vue-breakpoint-component'

import { routes } from '@/router'
import menuToken from '@/assets/vue-logo-facebook.svg'

export default {
  name: 'app',
  components: {
    VMenu,
    VShowAt
  },
  data: () => ({
    pkg,
    routes,
    menuToken
  })
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300');

/* Bootstrap */
$spacer: 1rem;
$spacers: ();
$spacers: map-merge(
  (
    10: $spacer * 1,
    15: $spacer * 1 + 0.5,
    20: $spacer * 2,
    25: $spacer * 2 + 0.5,
    30: $spacer * 3,
    35: $spacer * 3 + 0.5
  ),
  $spacers
);
$body-bg: #1c284c;
$body-color: rgba(#ffffff, 0.8);
$link-color: #8b9dc3;
$font-family-base: 'Roboto', sans-serif;
// Required
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
// Optional
@import '~bootstrap/scss/reboot';
@import '~bootstrap/scss/type';
@import '~bootstrap/scss/images';
@import '~bootstrap/scss/button-group';
@import '~bootstrap/scss/buttons';
@import '~bootstrap/scss/grid';
@import '~bootstrap/scss/utilities';
html {
  @include media-breakpoint-down(xs) {
    font-size: 87.5%;
  }
}
pre,
code,
kbd,
samp {
  font-size: 1rem;
}
/* Bootstrap end */
h1 {
  color: #8b9dc3;
  font-weight: 400;
  font-size: 1.6rem;
  margin-top: 0;
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-shadow: 0rem 0.15rem 0.15rem rgba(0, 0, 0, 1);
}
p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}
@import '~@/styles/Docs.scss';
@import '~@/styles/Docs.sass';
</style>

<style lang="stylus">
@import '~@/styles/prism-language-tags.stylus';
</style>
