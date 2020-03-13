<template>
  <v-github-button
    class="github-stars"
    data-show-count="true"
    data-icon="octicon-star"
    :href="pkg.repository.url"
    :aria-label="`Star ${pkg.author}/${pkg.name} on GitHub`"
    >Star</v-github-button
  >
</template>

<script>
import VGithubButton from 'vue-github-button'

export default {
  props: {
    pkg: {
      type: Object,
      required: true
    }
  },
  components: {
    VGithubButton
  }
}
</script>

<style lang="scss" scoped>
.github-stars {
  font-size: 0;
  box-shadow: 0 0.25rem 0.15rem rgba(0, 0, 0, 0.25);
}
</style>
