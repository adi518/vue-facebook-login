<template>
  <v-facebook-login-scope v-model="vModel" v-bind="$props" v-on="$listeners">
    <button
      slot-scope="scope"
      class="v-facebook-login"
      :style="computedButtonStyle"
      :disabled="scope.disabled"
      @click="scope.toggleLogin"
    >
      <slot name="before"></slot>
      <i class="loader" v-if="scope.working" :style="loaderStyle"></i>
      <img class="token" :src="token" v-if="scope.enabled" :style="tokenStyle">
      <span :style="textStyle">
        <slot name="login" v-if="scope.enabled && scope.disconnected">
          Sign in with Facebook
        </slot>
        <slot name="logout" v-if="scope.enabled && scope.connected">
          Sign out with Facebook
        </slot>
        <slot name="working" v-if="scope.working">
          Please wait...
        </slot>        
      </span>
      <slot name="after"></slot>
    </button>
  </v-facebook-login-scope>
</template>

<script>
import Scope from './FBLogin.Scope.js'
import token from '@/assets/images/iconmonstr-facebook-1.svg'

export default {
  name: 'v-facebook-login',
  components: { [Scope.name]: Scope },
  props: Object.assign({}, Scope.props, {
    buttonStyle: {
      type: Object,
      default: () => ({})
    },
    loaderStyle: {
      type: Object,
      default: () => ({})
    },
    tokenStyle: {
      type: Object,
      default: () => ({})
    },
    textStyle: {
      type: Object,
      default: () => ({})
    },
    transition: {
      type: Array,
      default: () => []
    }
  }),
  data: () => ({
    token
  }),
  computed: {
    vModel: {
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
      return {
        transition: [...new Set(transition)].join(', ')
      } // Bootstrap 4 (`.btn`)
    },
    computedButtonStyle() {
      return Object.assign({}, this.buttonStyle, this.computedTransition)
    }
  }
}
</script>

<style lang="scss" scoped>
// http://www.color-hex.com/color/1c284c
// https://iconmonstr.com/facebook-1-svg/
// http://www.color-hex.com/color-palette/185
// https://icons8.com/icon/set/facebook-f/all

$color-white: #ffffff;
$color-nepal: #8b9dc3;
$color-chambray: #3b55a0;

.v-facebook-login {
  cursor: default; // Normalize IE 11
  min-width: 15rem;
  color: $color-white;
  box-sizing: border-box;
  border: 1px solid rgba($color-white, 0.05);
  margin: 0; // Normalize Flex-box
  padding-top: 0.5rem;
  padding-left: 1.275rem;
  padding-right: 1.275rem;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  justify-content: center;
  background-color: lighten($color-chambray, 1%);

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  &[disabled] {
    opacity: 0.75;
  }

  &:hover {
    background-color: lighten($color-chambray, 5%);
  }

  &:focus {
    outline-width: 0;
    box-shadow: 0 0 0 1px rgba($color-nepal, 0.5);
  }
}

.token {
  margin-right: 0.2rem;
  transform: translateX(-0.5rem);
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
  animation: v-facebook-login-spin 2s linear infinite;
}

.loader {
  height: 1.5rem;
  margin-right: 0.5rem;
}

.token,
.loader {
  opacity: 0.9;
  width: 1.5rem;
}

@keyframes v-facebook-login-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
