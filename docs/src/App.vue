<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  @media (max-width: 576px) {
    font-size: 90%;
  }
}

// body {
//   margin: 0;
//   color: #ffffff;
//   background-color: #2f4480;
//   font-family: 'Roboto', sans-serif;
// }

// a {
//   color: inherit;
// }

// h1 {
//   color: #8b9dc3;
//   font-weight: 400;
//   margin-top: 0;
//   margin-bottom: 1rem;
// }

// p {
//   margin-top: 0;
//   margin-bottom: 1.5rem;
// }

/* Bootstrap */
$spacer: 1rem;
$spacers: ();
$spacers: map-merge((20: $spacer * 2), $spacers);
$spacers: map-merge((25: $spacer * 2 + 0.5), $spacers);

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
  margin-top: 0;
  font-size: 2em; // Reset Bootstrap
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

div[class~='language-typescript'] {
  &:before {
    content: 'ts';
  }
}

div[class~='language-markup'] {
  &:before {
    content: 'html';
  }
}

div[class~='language-markdown'] {
  &:before {
    content: 'md';
  }
}

div[class~='language-json']:before {
  content: 'json';
}

div[class~='language-ruby']:before {
  content: 'rb';
}

div[class~='language-python']:before {
  content: 'py';
}

div[class~='language-bash']:before {
  content: 'sh';
}
</style>
