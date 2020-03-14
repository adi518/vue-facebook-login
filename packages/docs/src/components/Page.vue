<template>
  <v-container class="page">
    <slot></slot>
    <v-breakpoint v-model="breakpoint"></v-breakpoint>
  </v-container>
</template>

<script>
import VBreakpoint from 'vue-breakpoint-component'
import VContainer from '@/components/Container'

export default {
  components: {
    VContainer,
    VBreakpoint
  },
  data: () => ({ breakpoint: {} })
}
</script>

<style lang="scss" scoped>
@import '@/styles/bootstrap-required';
@import '~bootstrap/scss/grid';

.page {
  @extend .container;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
