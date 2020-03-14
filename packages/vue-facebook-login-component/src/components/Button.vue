<template>
  <!-- https://developers.facebook.com/docs/facebook-login/userexperience/#buttondesign -->
  <scope
    v-model="model"
    v-bind="$props"
    v-on="$listeners"
    @sdk-init="handleSdkInit"
  >
    <button
      slot-scope="scope"
      v-on:click="handleClick"
      class="v-facebook-login"
      :disabled="scope.disabled"
      :style="computedButtonStyle"
    >
      <slot name="before" v-bind="scope"></slot>
      <slot name="loader" v-bind="scope">
        <span
          :class="['loader', loaderClass]"
          v-if="scope.working"
          :style="loaderStyle"
        ></span>
      </slot>
      <slot name="logo" v-bind="scope" v-if="scope.idle && scope.disconnected">
        <template v-if="useAlternateLogo">
          <v-facebook-logo-alt
            :class="['logo', logoClass]"
            :style="logoStyle"
          ></v-facebook-logo-alt>
        </template>
        <template v-else>
          <v-facebook-logo
            :class="['logo', logoClass]"
            :style="logoStyle"
          ></v-facebook-logo>
        </template>
      </slot>
      <span :class="textClass" :style="textStyle">
        <slot
          name="login"
          v-bind="scope"
          v-if="scope.idle && scope.disconnected"
          >Continue with Facebook</slot
        >
        <slot name="logout" v-bind="scope" v-if="scope.idle && scope.connected"
          >Logout</slot
        >
        <slot name="working" v-bind="scope" v-if="scope.working"
          >Please wait...</slot
        >
        <slot name="error" v-bind="scope" v-if="scope.error">⛔ Error</slot>
      </span>
      <slot name="after" v-bind="scope"></slot>
    </button>
  </scope>
</template>

<script>
import Logo from './Logo'
import Scope from './Scope'
import LogoAlt from './LogoAlt'

export default {
  name: 'v-facebook-login',
  components: {
    Scope,
    VFacebookLogo: Logo,
    VFacebookLogoAlt: LogoAlt
  },
  props: {
    ...Scope.props,
    ...{
      buttonStyle: {
        type: Object,
        default: () => ({})
      },
      loaderClass: {
        type: String
      },
      loaderStyle: {
        type: Object,
        default: () => ({})
      },
      logoClass: {
        type: String
      },
      logoStyle: {
        type: Object,
        default: () => ({})
      },
      textClass: {
        type: String
      },
      textStyle: {
        type: Object,
        default: () => ({})
      },
      transition: {
        type: Array,
        default: () => []
      },
      useAlternateLogo: {
        type: Boolean,
        default: false
      }
    }
  },
  data: () => ({ scope: {} }),
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    computedTransition() {
      const transition = ['background-color 0.15s ease-in-out'].concat(
        this.transition
      )
      return { transition: [...new Set(transition)].join(', ') }
    },
    computedButtonStyle() {
      return { ...this.buttonStyle, ...this.computedTransition }
    }
  },
  methods: {
    handleSdkInit({ scope }) {
      this.scope = scope
    },
    handleClick() {
      this.$emit('click')
      this.scope.toggleLogin()
    }
  }
}
</script>

<style lang="scss" scoped>
// http://www.color-hex.com/color/1c284c
// https://iconmonstr.com/facebook-1-svg/
// http://www.color-hex.com/color-palette/185
// https://icons8.com/icon/set/facebook-f/all

$token-size: 1.5rem;
$color-white: #ffffff;
$color-nepal: #8b9dc3;
$color-chambray: #3b55a0;

.v-facebook-login {
  display: flex;
  cursor: default; // normalize IE 11
  color: $color-white;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  justify-content: center;
  border: 1px solid rgba($color-white, 0.05);
  background-color: lighten($color-chambray, 1%);

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
  height: auto;
  margin-right: 1.5ch;
}

.loader {
  display: block;
  border-radius: 50%;
  border-style: solid;
  border-width: 0.1rem;
  border-top-color: $color-nepal;
  border-right-color: rgba($color-white, 1);
  border-left-color: rgba($color-white, 1);
  border-bottom-color: rgba($color-white, 1);
  animation: spin 2s linear infinite;
}

.loader {
  height: $token-size;
  margin-right: 1ch;
}

.logo,
.loader {
  opacity: 0.925;
  width: $token-size;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
