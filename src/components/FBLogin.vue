<template>
  <v-facebook-login-scope v-model="vmodel" v-bind="$props" v-on="$listeners">
    <button
      slot-scope="scope"
      class="v-facebook-login"
      :style="buttonStyle"
      :disabled="scope.disabled || scope.loading"
      @click="scope.toggleState"
    >
      <i class="loader" v-if="scope.loading" :style="loaderStyle"></i>
      <img class="token" :src="token" v-if="scope.idle" :style="tokenStyle">
      <span :style="textStyle">
        <slot name="login" v-if="scope.idle && scope.disconnected">
          Log in to Facebook
        </slot>
        <slot name="logout" v-if="scope.idle && scope.connected">
          Log out from Facebook
        </slot>
        <slot name="loading" v-if="scope.loading">
          Please wait...
        </slot>
      </span>
    </button>
  </v-facebook-login-scope>
</template>

<script>
import Scope from './FBLogin.Scope.js'
import token from '@/assets/images/iconmonstr-facebook-1.svg'

export default {
  name: 'v-facebook-login',
  components: { [Scope.name]: Scope },
  props: {
    ...Scope.props,
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
    }
  },
  data: () => ({
    token
  }),
  computed: {
    vmodel: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
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
  min-width: 14rem;
  color: $color-white;
  box-sizing: border-box;
  border: 1px solid rgba($color-white, 0.05);
  margin: 0; // Normalize Flex-box
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    darken($color-chambray, 10%),
    $color-chambray
  );

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  &[disabled] {
    opacity: 0.75;
  }
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
}

.token,
.loader {
  opacity: 0.9;
  width: 1.5rem;  
  margin-right: 0.5rem;
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
