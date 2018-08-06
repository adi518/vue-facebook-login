<template>
  <v-facebook-login-bare v-model="vmodel" v-bind="$props" v-on="$listeners">
    <button
      slot-scope="scope"
      class="v-facebook-login"
      :style="buttonStyle"
      :disabled="scope.disabled || scope.loading"
    >
      <span v-if="scope.enabled" class="event-capturer" @click="scope.handleClick()"></span>
      <i class="loader" v-if="scope.loading" :style="loaderStyle"></i>
      <img class="token" :src="token" v-if="scope.idle" :style="tokenStyle">
      <span :style="slotStyle">
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
  </v-facebook-login-bare>
</template>

<script>
import Bare from './FBLogin.Bare.js'
import token from '@/assets/images/iconmonstr-facebook-1.svg'

export default {
  name: 'v-facebook-login',
  components: { [Bare.name]: Bare },
  props: {
    ...Bare.props,
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
    slotStyle: {
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
  position: relative;
  box-sizing: border-box;
  transition: background-image 2s;

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  &[disabled] {
    opacity: 0.75;
  }
}

.v-facebook-login {
  color: $color-white;
  border: 1px solid rgba($color-white, 0.05);
  min-width: 14rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.5rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    darken($color-chambray, 10%),
    $color-chambray
  );
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

.token,
.loader {
  opacity: 0.9;
}

.token,
.loader {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.event-capturer {
  width: 100%;
  height: 100%;
  position: absolute;
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
