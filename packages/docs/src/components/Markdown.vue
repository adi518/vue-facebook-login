<template>
  <div class="markdown" v-html="markdown"></div>
</template>

<script>
import Prism from 'prismjs'

export default {
  props: {
    markdown: {
      type: String
    }
  },
  mounted() {
    setTimeout(Prism.highlightAll)
  }
}
</script>

<style lang="scss">
@import '@/styles/bootstrap-required';
@import '~prism-themes/themes/prism-duotone-space.css';

.markdown {
  pre[class*='language-'] {
    margin-top: 0;
    margin-bottom: 2em;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    line-height: 2;
    font-size: 1em;
    color: #767693;
    // https://www.colorhexa.com/1c284c
    // https://www.colorhexa.com/0c1121
    background: #0c1121;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    padding-top: 2em;
    padding-bottom: 2em;

    @include media-breakpoint-down(xs) {
      padding-top: 3em;
      padding-bottom: 3em;
    }
  }

  /* show-language/copy-to-clipboard */
  .code-toolbar {
    position: relative;
  }

  .toolbar {
    right: 0;
    bottom: 100%;
    display: flex;
    position: absolute;
    margin-bottom: 0.5em;
  }

  .toolbar-item {
    margin-left: 0.5em;
  }

  /* show-language */
  .toolbar-item:nth-child(1) {
    cursor: default;
    color: #666666;
    font-size: 0.6em;
    font-weight: bold;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: color var(--common-transition-time);

    &:hover {
      color: var(--color-gray);
    }
  }

  /* copy-to-clipboard */
  .toolbar-item:nth-child(2) {
    button {
      padding: 0;
      display: block;
      border-width: 0;
      font-size: 0.6em;
      font-weight: 700;
      color: var(--color-gray);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      background-color: transparent;
      transition: background-color var(--common-transition-time),
        padding var(--common-transition-time);

      &:hover {
        color: #8b9dc3;
      }
    }
  }

  blockquote {
    margin: 0;

    p {
      padding-left: 1em;
      border-left: 0.125em solid #8b9dc3;

      img {
        display: block;
      }
    }
  }

  a {
    code {
      word-break: break-word;
      padding-top: 0.125em;
      padding-left: 0.5em;
      padding-right: 0.5em;
      padding-bottom: 0.125em;
      background-color: #0c1121;
    }
  }

  code {
    color: #fe8c52;
  }

  h1 {
    color: #8b9dc3;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      &::before {
        content: '⚡️ ';
      }
    }
  }

  table {
    width: 100%;
    max-width: 200%;
    color: #2f4480;
    margin-bottom: 1.5em;
    background-color: rgba(#f5f2f0, 0.9);

    code {
      color: #2f4480;
    }

    @include media-breakpoint-down(xs) {
      width: 200%;
    }
  }

  th {
    font-weight: bold;
    vertical-align: middle;
    background-color: rgba(#8b9dc3, 0.9);
  }

  td {
    vertical-align: top;
    border-top: 1px solid;

    &:first-child {
      background-color: rgba(lighten(#8b9dc3, 20%), 0.9);
    }
  }

  th,
  td {
    padding: 1em;
    border-right: 1px solid;

    a {
      code {
        padding: 0;
        background-color: transparent;
      }
    }
  }
}
</style>
