<template>
  <button
    class="button"
    v-on="$listeners"
    @click="toggleActive"
    :class="{ 'is-icon': isIcon, 'is-active': active }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isIcon: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({ active: false }),
  methods: {
    toggleActive() {
      this.active = !this.active
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/bootstrap-required';

.button {
  border-width: 0;
  font-size: 0.825rem;
  font-family: inherit;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  text-transform: capitalize;
  color: white;
  // color: rgba(139, 157, 195, 0.5);
  background-color: darken(#3c57a4, 25%);
  // border: 1px solid rgba(139, 157, 195, 0.15);
  transition: color 0.5s, background-color 0.5s;

  &.is-icon {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  &:hover,
  &.is-active {
    color: white;
    background-color: darken(#3c57a4, 15%);
    // background-color: transparent;
    border-color: rgba(255, 255, 255, 0.25);
  }

  &:not(:first-child) {
    margin-left: 2ch;
  }

  @include media-breakpoint-down(sm) {
    display: none;
  }
}
</style>
