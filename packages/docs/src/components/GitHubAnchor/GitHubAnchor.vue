<template>
  <v-a
    :style="style"
    target="_blank"
    title="Go to GitHub"
    class="github-anchor"
    rel="noopener noreferrer"
    :href="pkg.repository.url"
  >
    <v-octocat class="octocat"></v-octocat>
    <!-- https://octodex.github.com/nyantocat/ -->
    <div class="nyantocat" :style="{ backgroundImage: `url(${nyantocat})` }" />
  </v-a>
</template>

<script>
import VA from '../Anchor'
import VOctocat from './Octocat'
import nyantocat from './nyantocat.gif'

export default {
  props: {
    pkg: {
      type: Object,
      required: true
    },
    size: {
      type: String,
      default: '2rem'
    }
  },
  components: { VA, VOctocat },
  data: () => ({ nyantocat }),
  computed: {
    style() {
      return {
        width: this.size,
        height: this.size
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.github-anchor {
  position: relative;
  transition: width var(--common-transition-time),
    height var(--common-transition-time);

  &:hover {
    .nyantocat {
      opacity: 1;
    }
  }

  .octocat,
  .nyantocat {
    width: inherit;
    height: inherit;
  }

  .nyantocat {
    top: 0;
    opacity: 0;
    position: absolute;
    border-radius: 50%;
    background-size: 100%;
    transition: opacity var(--common-transition-time);
  }
}
</style>
