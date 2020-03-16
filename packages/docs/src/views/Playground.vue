<template>
  <div class="demo">
    <h2>Vanilla Example</h2>
    <p>
      This is a vanilla example, using the bare miniumum required for using the
      component. Basically, all you need is your application id, otherwise the
      component will be disabled.
    </p>
    <p>
      <v-facebook-login :app-id="appId"></v-facebook-login>
    </p>
    <h3>Working State</h3>
    <h3>Disabled State</h3>
    <p>The component will be disabled on:</p>
    <ul>
      <li>Error</li>
      <li>Missing application id</li>
      <li>Asynchronous operation</li>
    </ul>
    <p>
      <v-facebook-login></v-facebook-login>
    </p>
  </div>
</template>

<script>
import VFacebookLogin from 'vue-facebook-login-component'

export default {
  name: 'Demo',
  components: { VFacebookLogin },
  data: () => ({
    appId:
      process.env.NODE_ENV === 'development'
        ? '852858511574509'
        : '2146252248983683'
  })
}
</script>

<style lang="scss" scoped>
.example {
  padding: 1rem;
  background-color: #0c1121;
}
</style>
