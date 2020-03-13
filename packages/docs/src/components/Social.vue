<template>
  <div class="social">
    <v-hide-at no-match>
      <v-downloads></v-downloads>
    </v-hide-at>
    <v-hide-at no-match>
      <v-github-stars></v-github-stars>
    </v-hide-at>
    <v-github-anchor
      :href="pkg.repository.url"
      :size="githubAnchorSize"
    ></v-github-anchor>
  </div>
</template>

<script>
import { VHideAt } from 'vue-breakpoint-component'
import { inject, computed } from '@vue/composition-api'

import VDownloads from '@/components/Downloads'
import VGithubStars from '@/components/GitHubStars'
import VGithubAnchor from '@/components/GitHubAnchor/GitHubAnchor'

import { IsStickySymbol } from '@/components/Nav'

export default {
  setup() {
    const isSticky = inject(IsStickySymbol)
    const githubAnchorSize = computed(() =>
      isSticky.value ? '1.625rem' : '2rem'
    )
    return { githubAnchorSize }
  },
  props: {
    pkg: {
      type: Object,
      required: true
    }
  },
  components: {
    VHideAt,
    VDownloads,
    VGithubStars,
    VGithubAnchor
  }
}
</script>

<style lang="scss" scoped>
.social {
  z-index: 1;
  display: grid;
  grid-gap: 1rem;
  margin-left: auto;
  align-items: center;
  grid-auto-flow: column;
}
</style>
