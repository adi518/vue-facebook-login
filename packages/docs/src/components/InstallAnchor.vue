<template>
  <v-a class="install-anchor" :to="$attrs.to">
    Install, Examples & Documentation
  </v-a>
</template>

<script>
import VA from './Anchor'

export default {
  components: { VA }
}
</script>

<style lang="scss" scoped>
@import '@/styles/bootstrap-required';

.install-anchor {
  left: 50%;
  color: white;
  display: block;
  bottom: 0.8rem;
  font-size: 1.2rem;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);

  &:hover {
    color: inherit;
  }

  @include media-breakpoint-down(sm) {
    position: static;
    transform: translateX(0);
  }
}
</style>
