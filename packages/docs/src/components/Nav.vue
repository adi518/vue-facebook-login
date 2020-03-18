<template>
  <nav class="nav" :class="{ 'is-sticky': isSticky }">
    <slot v-bind="{ isSticky }"></slot>
  </nav>
</template>

<script>
import { inject } from '@vue/composition-api'
import { useWindowScrollPosition } from 'vue-use-web'
import { provide, computed } from '@vue/composition-api'

export const NavSymbol = Symbol()
export const getNavHeight = () =>
  document
    .getElementsByTagName('nav')[0]
    .getBoundingClientRect()
    .height.toFixed(2)

export const VNavProvider = {
  setup() {
    const context = inject(NavSymbol)
    return { context }
  },
  render() {
    if (this.$scopedSlots.default)
      return this.$scopedSlots.default(this.context)
  }
}

export default {
  setup() {
    const { y: scrollYPosition } = useWindowScrollPosition()
    const isSticky = computed(() => scrollYPosition.value > 0)
    provide(NavSymbol, { isSticky })
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
    // padding-top: 0.8rem;
    // padding-bottom: 0.8rem;
    background-color: #3c57a4;
  }
}
</style>
