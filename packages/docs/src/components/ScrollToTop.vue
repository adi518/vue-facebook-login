<template>
  <div @click="handleClick" class="scroll-to-top" :class="visibilityClass">
    ↑
  </div>
</template>

<script>
import { useWindowScrollPosition } from 'vue-use-web'
import { ref, computed, watch } from '@vue/composition-api'

const SCROLL_HEIGHT_SCALE = 0.667

export default {
  setup() {
    const visible = ref(false)
    const { y: scrollYPosition } = useWindowScrollPosition()
    const visibilityClass = computed(() => ({ 'is-visible': visible.value }))
    const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    const isScrollEnd = () =>
      new Promise(resolve =>
        window.requestAnimationFrame(() =>
          resolve(
            scrollYPosition.value >=
              document.body.scrollHeight * SCROLL_HEIGHT_SCALE
          )
        )
      )
    watch(
      () => scrollYPosition.value,
      async () => (visible.value = await isScrollEnd())
    )
    return { visibilityClass, handleClick }
  }
}
</script>

<style lang="scss" scoped>
.scroll-to-top {
  right: 0;
  bottom: 0;
  opacity: 0;
  margin: 1rem;
  cursor: default;
  position: fixed;
  color: #8b9dc3;
  line-height: normal;
  border-radius: 1rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-bottom: 0.15rem;
  background-color: lighten(#0c1121, 20%);
  transition: color var(--common-transition-time),
    padding var(--common-transition-time), opacity var(--common-transition-time);

  &:hover {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  &.is-visible {
    opacity: 1;
  }
}
</style>
