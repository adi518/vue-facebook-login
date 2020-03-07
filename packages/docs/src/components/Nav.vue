<template>
  <nav class="nav" :class="{ 'is-sticky': isSticky }">
    <slot v-bind="{ isSticky }"></slot>
  </nav>
</template>

<script>
import { useWindowScrollPosition } from 'vue-use-web'
import { provide, computed } from '@vue/composition-api'

export const IsStickySymbol = Symbol()
export const NAV_STICKY_HEIGHT = 65.3125

export default {
  setup() {
    const { y: scrollYPosition } = useWindowScrollPosition()
    const isSticky = computed(() => scrollYPosition.value > 0)
    provide(IsStickySymbol, isSticky)
    return { isSticky }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  padding: 1rem;
  position: absolute;
  align-items: center;
  transition: padding var(--common-transition-time),
    background-color var(--common-transition-time);

  &.is-sticky {
    position: fixed;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    background-color: #1c284c;
    // background-color: darken(#3c57a4, 25%);
  }
}
</style>
