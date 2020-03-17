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
    margin-bottom: 2rem;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    line-height: 2;
    font-size: 1rem;
    color: #767693;
    // https://www.colorhexa.com/1c284c
    // https://www.colorhexa.com/0c1121
    background: #0c1121;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    padding-top: 1.5em;
    padding-bottom: 1.5em;

    @include media-breakpoint-down(xs) {
      padding-top: 3em;
      padding-bottom: 3em;
    }
  }

  /* show-language/copy-to-clipboard */
  .code-toolbar {
    position: relative;
  }

  .toolbar > div {
    position: absolute;
  }

  /* show-language */
  .toolbar > div:nth-child(1) {
    top: 0;
    right: 0;
    color: #666666;
    margin-top: 1rem;
    font-size: 0.6rem;
    font-weight: bold;
    margin-right: 1rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    transition: color var(--common-transition-time);

    &:hover {
      color: var(--color-gray);
    }
  }

  /* copy-to-clipboard */
  .toolbar > div:nth-child(2) {
    right: 0;
    bottom: 0;
    margin-right: 1rem;
    margin-bottom: 0.825rem;

    button {
      padding: 0;
      display: block;
      border-width: 0;
      font-size: 0.6rem;
      color: var(--color-gray);
      letter-spacing: 0.05rem;
      border-radius: 0.325rem;
      text-transform: uppercase;
      background-color: transparent;
      transition: background-color var(--common-transition-time),
        padding var(--common-transition-time);

      &:hover {
        color: #1d1f21;
        padding: 0.05rem 1rem;
        background-color: rgba(245, 242, 240, 0.9);
      }
    }
  }

  blockquote {
    margin: 0;

    p {
      padding-left: 1rem;
      border-left: 0.125rem solid #8b9dc3;

      img {
        display: block;
      }
    }
  }

  a {
    code {
      word-break: break-word;
      padding-top: 0.125rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.125rem;
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
    margin-bottom: 1.5rem;
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
    padding: 1rem;
    border-right: 1px solid;
  }
}
</style>
