<template>
  <div>
    <span class="meta">📦 {{ pkg.version }}</span>
    <span class="meta">📃 {{ docsPkg.version }}</span>
  </div>
</template>

<script>
export default {
  props: {
    pkg: {
      type: Object,
      required: true
    },
    docsPkg: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.meta:not(:first-child) {
  margin-left: 1ch;
}
</style>
