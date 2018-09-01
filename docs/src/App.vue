<template>
  <div id="app">
    <v-menu :routes="routes" items="2">
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

export default {
  name: 'app',
  components: {
    VMenu,
    VShowAt
  },
  data: () => ({
    pkg,
    routes
  })
}
</script>

<style lang="scss">
/* Bootstrap */
$spacer: 1rem;
$spacers: ();
$spacers: map-merge((10: $spacer * 1), $spacers);
$spacers: map-merge((15: $spacer * 1 + 0.5), $spacers);
$spacers: map-merge((20: $spacer * 2), $spacers);
$spacers: map-merge((25: $spacer * 2 + 0.5), $spacers);
$spacers: map-merge((30: $spacer * 3), $spacers);
$spacers: map-merge((35: $spacer * 3 + 0.5), $spacers);

$body-bg: #1c284c;
$body-color: #ffffff;
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
    font-size: 80%;
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
  font-size: 2rem; // Reset Bootstrap
  margin-top: 0;
  margin-bottom: 1rem;
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
