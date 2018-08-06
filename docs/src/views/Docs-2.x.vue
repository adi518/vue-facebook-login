<template>
  <div class="docs">
    <div class="docs-container mt-5 mb-5">
      <div class="container docs-clearfix" :class="breakpoint.noMatch && ['pl-3', 'pr-3'] || 'p-0'">
        <div class="docs-markdown" v-html="markdowns.readme"></div>
      </div>
    </div>
    <v-breakpoint v-model="breakpoint"></v-breakpoint>
  </div>
</template>

<script>
import Prism from 'prismjs'

import readme from '../../../README-2.x.md'

import VBreakpoint, { Model as Breakpoint } from 'vue-breakpoint-component'

export default {
  components: {
    VBreakpoint
  },
  data: () => ({
    markdowns: {
      readme
    },
    breakpoint: new Breakpoint()
  }),
  mounted() {
    window.setTimeout(Prism.highlightAll)
  }
}
</script>
