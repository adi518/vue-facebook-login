<template>
  <div
    class="container"
    :class="(breakpoint.noMatch && ['pl-3', 'pr-3']) || 'px-0'"
  >
    <slot></slot>
    <v-breakpoint v-model="breakpoint"></v-breakpoint>
  </div>
</template>

<script>
import VBreakpoint from 'vue-breakpoint-component'

export default {
  components: { VBreakpoint },
  data: () => ({ breakpoint: {} })
}
</script>

<style lang="scss"></style>
