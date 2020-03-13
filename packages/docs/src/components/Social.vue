<template>
  <div class="social">
    <v-hide-at no-match>
      <v-downloads :pkg="pkg"></v-downloads>
    </v-hide-at>
    <v-hide-at no-match>
      <v-github-stars :pkg="pkg"></v-github-stars>
    </v-hide-at>
    <v-nav-provider>
      <v-github-anchor
        :pkg="pkg"
        slot-scope="{ isSticky }"
        :size="isSticky.value ? '1.625rem' : '2rem'"
      ></v-github-anchor>
    </v-nav-provider>
  </div>
</template>

<script>
import { VHideAt } from 'vue-breakpoint-component'

import { VNavProvider } from '@/components/Nav'
import VDownloads from '@/components/Downloads'
import VGithubStars from '@/components/GitHubStars'
import VGithubAnchor from '@/components/GitHubAnchor/GitHubAnchor'

export default {
  props: {
    pkg: {
      type: Object,
      required: true
    }
  },
  components: {
    VHideAt,
    VDownloads,
    VNavProvider,
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
