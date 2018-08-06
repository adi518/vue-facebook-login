<template>
  <div id="app">
    <v-menu :routes="routes">
      <template slot="last-child">
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
              aria-label="Star iliran11/facebook-login-vue on GitHub"
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
</style>

<style lang="stylus">
// https://github.com/vuejs/vuepress/blob/fd46a26d3a884b62092581451028121fd0daf654/lib/default-theme/styles/code.styl
for lang in js ts html md vue css sass scss less stylus go java c sh yaml {
  pre{'[class~="language-' + lang + '"]'} {
    &:before {
      content: '' + lang;
    }
  }
}

pre[class*=language-] {
  position: relative;

  &::before {
    position: absolute;
    z-index: 3;
    top: 0.8rem;
    right: 1rem;
    font-size: 0.75rem;
  }
}

pre[class~='language-bash'] {
  &:before {
    content: 'bash';
  }
}

pre[class~='language-javascript'] {
  &:before {
    content: 'js';
  }
}

pre[class~='language-typescript'] {
  &:before {
    content: 'ts';
  }
}

pre[class~='language-markup'] {
  &:before {
    content: 'html';
  }
}

pre[class~='language-markdown'] {
  &:before {
    content: 'md';
  }
}

pre[class~='language-json']:before {
  content: 'json';
}

pre[class~='language-ruby']:before {
  content: 'rb';
}

pre[class~='language-python']:before {
  content: 'py';
}

pre[class~='language-bash']:before {
  content: 'sh';
}
</style>
