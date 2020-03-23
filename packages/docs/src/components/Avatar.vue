<template>
  <span class="avatar-wrap">
    <span :class="['avatar', { 'is-visible': avatarUrl }]" :style="avatarStyle"></span>
    <Loader class="loader" v-show="!avatarUrl" />
  </span>
</template>

<script>
import { VFBLoginLoader as Loader } from 'vue-facebook-login-component'

export default {
  props: {
    avatarUrl: {
      type: String
    }
  },
  components: { Loader },
  computed: {
    avatarStyle() {
      return {
        backgroundImage: `url(${this.avatarUrl})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/bootstrap-required';

.avatar-wrap {
  width: 1.75rem;
  height: 1.75rem;
  position: relative;
  margin-left: 1.25ch;
}

.avatar {
  opacity: 0;
  display: block;
  border-radius: 50%;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 1s ease-in-out;

  &.is-visible {
    opacity: 1;
    z-index: 2; // Fix Chrome 69 bug (replace `z-index: 1` with `z-index: 2`)
  }
}

.loader,
.avatar {
  width: inherit !important;
  height: inherit !important;
}
</style>
