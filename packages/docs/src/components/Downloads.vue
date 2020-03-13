<template>
  <div class="downloads">
    <img :src="src" alt="npm" />
  </div>
</template>

<script>
export default {
  props: {
    pkg: {
      type: Object,
      required: true
    }
  },
  computed: {
    src() {
      return `https://img.shields.io/npm/dt/${this.pkg.name}?style=social`
    }
  }
}
</script>

<style lang="scss" scoped>
.downloads {
  box-shadow: 0 0.25rem 0.15rem rgba(0, 0, 0, 0.25);

  img {
    display: block;
  }
}
</style>
