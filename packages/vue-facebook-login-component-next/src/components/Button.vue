<template>
  <!-- https://developers.facebook.com/docs/facebook-login/userexperience/#buttondesign -->
  <button
    class="v-facebook-login"
    :style="inlineStyle"
    :disabled="scope.disabled"
    @click="handleClick"
  >
    <slot name="before" v-bind="scope"></slot>
    <slot name="loader" v-bind="scope">
      <Loader
        v-if="scope.working"
        :class="['loader', loaderClass]"
        :style="loaderStyle"
      ></Loader>
    </slot>
    <slot name="logo" v-bind="scope" v-if="scope.idle && scope.disconnected">
      <LogoAlt
        v-if="useAltLogo"
        :class="['logo', logoClass]"
        :style="logoStyle"
      ></LogoAlt>
      <Logo v-else :class="['logo', logoClass]" :style="logoStyle"></Logo>
    </slot>
    <span :class="textClass" :style="textStyle">
      <slot name="login" v-bind="scope" v-if="scope.idle && scope.disconnected"
        >Continue with Facebook</slot
      >
      <slot name="logout" v-bind="scope" v-if="scope.idle && scope.connected"
        >Logout</slot
      >
      <slot name="working" v-bind="scope" v-if="scope.working"
        >Please wait...</slot
      >
      <slot name="error" v-bind="scope" v-if="scope.hasError">⛔ Error</slot>
    </span>
    <slot name="after" v-bind="scope"></slot>
  </button>
</template>

<script>
import Logo from './Logo.vue'
import Loader from './Loader.vue'
import LogoAlt from './LogoAlt.vue'

export default {
  emits: ['click'],
  name: 'facebook-login-button',
  components: {
    Loader,
    Logo,
    LogoAlt,
  },
  props: {
    scope: {
      type: Object,
      default: () => ({}),
    },
    logoClass: {
      type: String,
    },
    logoStyle: {
      type: Object,
      default: () => ({}),
    },
    textClass: {
      type: String,
    },
    textStyle: {
      type: Object,
      default: () => ({}),
    },
    loaderClass: {
      type: String,
    },
    loaderStyle: {
      type: Object,
      default: () => ({}),
    },
    transition: {
      type: Array,
      default: () => [],
    },
    useAltLogo: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inlineStyle() {
      const CSSTransition = 'background-color 0.25s ease-in-out'
      let transition = [CSSTransition].concat(this.transition)
      transition = [...new Set(transition)].join(', ')
      return { transition }
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
      this.scope.toggleLogin?.()
    },
  },
}
</script>

<style lang="scss" scoped>
// http://www.color-hex.com/color/1c284c
// http://www.color-hex.com/color-palette/185
// https://iconmonstr.com/?s=facebook
// https://icons8.com/icon/set/facebook-f/all

@import './colors';

$token-size: 1.25rem;

.v-facebook-login {
  display: flex;
  font-size: inherit;
  font-family: inherit;
  cursor: default; // normalize IE 11
  min-width: 16rem;
  min-height: 2.375rem;
  color: $color-white;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  justify-content: center;
  border: 1px solid rgba($color-white, 0.05);
  background-color: lighten($color-chambray, 1%);

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  &[disabled] {
    opacity: 0.75;
    cursor: not-allowed;
    background-color: darken($color-chambray, 10%);

    &:hover {
      background-color: darken($color-chambray, 10%);
    }
  }

  &:hover {
    background-color: lighten($color-chambray, 5%);
  }

  &:focus {
    outline-width: 0;
    box-shadow: 0 0 0 1px rgba($color-nepal, 0.5);
  }
}

.logo {
  width: $token-size;
  height: $token-size;
}

.logo,
.loader {
  opacity: 0.925;
  margin-right: 1.25ch;
}
</style>
