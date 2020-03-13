<template>
  <v-a
    :href="href"
    :style="style"
    target="_blank"
    title="Go to GitHub"
    class="github-anchor"
    rel="noopener noreferrer"
  >
    <v-octocat />
    <!-- https://octodex.github.com/nyantocat/ -->
    <img :src="nyantocat" />
  </v-a>
</template>

<script>
import VA from '../Anchor'
import VOctocat from './Octocat'
import nyantocat from './nyantocat.gif'

export default {
  props: {
    href: {
      type: String,
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
  font-size: 0;
  display: flex;
  position: relative;
  align-items: center;
  transition: width var(--common-transition-time),
    height var(--common-transition-time);

  &:hover {
    img {
      opacity: 1;
      z-index: 1;
    }
  }

  svg,
  img {
    width: inherit;
    height: inherit;
  }

  img {
    opacity: 0;
    position: absolute;
    border-radius: 50%;
    transition: opacity var(--common-transition-time);
  }
}
</style>
