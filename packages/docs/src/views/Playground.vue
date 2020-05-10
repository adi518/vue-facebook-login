<template>
  <div class="demo">
    <h2>Vanilla Example</h2>
    <p>
      This is a vanilla example, using the bare miniumum required for using the
      component. Basically, all you need is your Facebook application id.
    </p>
    <h3>Disconnected State</h3>
    <p>
      <v-facebook-login-button :scope="disconnected"></v-facebook-login-button>
    </p>
    <h3>Working State</h3>
    <p>
      <v-facebook-login-button :scope="working"></v-facebook-login-button>
    </p>
    <h3>Connected State</h3>
    <p>
      <v-facebook-login-button :scope="connected"></v-facebook-login-button>
    </p>
    <h3>Error State</h3>
    <p>
      <v-facebook-login-button :scope="error"></v-facebook-login-button>
    </p>
    <h3>Disabled State</h3>
    <p>The component will be disabled on:</p>
    <ul>
      <li>Error</li>
      <li>Missing application id</li>
      <li>Asynchronous operation</li>
    </ul>
    <p>
      <v-facebook-login-button :scope="disabled"></v-facebook-login-button>
    </p>
  </div>
</template>

<script>
import { VFBLoginButton as VFacebookLoginButton } from 'vue-facebook-login-component'

export default {
  name: 'Playground',
  components: { VFacebookLoginButton },
  data: () => ({
    appId:
      process.env.NODE_ENV === 'development'
        ? '852858511574509'
        : '2146252248983683',
    disconnected: { idle: true, disconnected: true },
    working: { working: true, disabled: true },
    connected: { idle: true, connected: true },
    error: { hasError: true, disabled: true },
    disabled: { idle: true, disconnected: true, disabled: true }
  })
}
</script>

<style lang="scss" scoped>
.example {
  padding: 1rem;
  background-color: #0c1121;
}
</style>
