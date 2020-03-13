<template>
  <span class="avatar-wrap" :class="{ 'is-visible': avatarUrl }">
    <span class="avatar" :style="style"></span>
  </span>
</template>

<script>
export default {
  props: {
    avatarUrl: {
      type: String
    }
  },
  computed: {
    style() {
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
  --avatar-size: 2rem;
  border-radius: 50%;
  margin-left: 1.25ch;
  width: var(--avatar-size);
  height: var(--avatar-size);
  // background-color: darken(#3c57a4, 5%);
  // animation: loading 1.5s infinite;
  background-image: radial-gradient(
    circle var(--avatar-size) at center,
    white 99%,
    transparent 0
  );

  @keyframes loading {
    to {
      background-position: 350% 0, 0 0;
    }
  }

  @include media-breakpoint-down(xs) {
    --avatar-size: 1.75rem;
  }

  &.is-visible {
    background-image: none;

    .avatar {
      opacity: 1;
      z-index: 2; // Fix Chrome 69 bug (replace `z-index: 1` with `z-index: 2`)
    }
  }

  .avatar {
    opacity: 0;
    display: block;
    width: inherit;
    height: inherit;
    position: absolute;
    border-radius: inherit;
    background-size: cover;
    background-repeat: no-repeat;
    transition: opacity 1s ease-in-out;
  }
}
</style>
