<template>
  <span class="v-loader"></span>
</template>

<style lang="scss" scoped>
@import './colors';

.v-loader {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border-style: solid;
  border-width: 0.125rem;
  border-top-color: $color-nepal;
  border-left-color: $color-white;
  border-right-color: $color-white;
  border-bottom-color: $color-white;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
