<template>
  <!-- https://www.color-hex.com/color/41b883 -->
  <!-- https://www.schemecolor.com/vue-js-logo-colors.php -->
  <!-- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Gradients -->
  <a href="#" class="animated fadeInDown">
    <svg
      version="1.1"
      class="vue-logo"
      viewBox="0 0 261.76 226.69"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#2d805b" />
          <stop offset="80%" stop-color="#1a2547" />
        </linearGradient>
        <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#1a2547" />
          <stop offset="120%" stop-color="#2d805b" />
        </linearGradient>
      </defs>
      <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
        <g transform="translate(178.06 235.01)">
          <path
            fill="url(#Gradient1)"
            d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
          />
        </g>
        <g transform="translate(178.06 235.01)">
          <path
            fill="url(#Gradient2)"
            d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
          />
        </g>
      </g>
    </svg>
  </a>
</template>

<style lang="scss" scoped>
@import '@/styles/bootstrap-required';

.vue-logo {
  width: 10rem;
  margin-top: -4rem;
  transition: width var(--common-transition-time);

  &:hover {
    width: 10.5rem;
  }

  @include media-breakpoint-down(xs) {
    width: 8rem;

    &:hover {
      width: 8.5rem;
    }
  }
}
</style>
