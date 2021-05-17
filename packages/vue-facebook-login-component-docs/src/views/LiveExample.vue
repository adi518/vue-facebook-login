<template>
  <Page>
    <h1>Live Example</h1>
    <p>
      To use the component all you need is a Facebook application id, which is a
      <b>required</b> a prop. Otherwise, the component will appear disabled and
      Vue will print warnings for a missing required prop in your console.
    </p>
    <p>
      <VFacebookLogin />
    </p>
    <h2>States</h2>
    <h3>Disconnected State</h3>
    <p>
      <VFacebookLoginButton :scope="disconnected"></VFacebookLoginButton>
    </p>
    <h3>Disconnected State (Alternative Logo)</h3>
    <p>
      <VFacebookLoginButton
        :scope="disconnected"
        useAltLogo
      ></VFacebookLoginButton>
    </p>
    <h3>Working State</h3>
    <p>
      <VFacebookLoginButton :scope="working"></VFacebookLoginButton>
    </p>
    <h3>Connected State</h3>
    <p>
      <VFacebookLoginButton :scope="connected"></VFacebookLoginButton>
    </p>
    <h3>Error State</h3>
    <p>
      <VFacebookLoginButton :scope="error"></VFacebookLoginButton>
    </p>
    <h3>Disabled State</h3>
    <p>
      <VFacebookLoginButton :scope="disabled"></VFacebookLoginButton>
    </p>
    <p>The component will be disabled on:</p>
    <ul>
      <li>Error</li>
      <li>Missing application id</li>
      <li>Asynchronous operation</li>
    </ul>
  </Page>
</template>

<script>
import VFacebookLogin, {
  VFBLoginButton as VFacebookLoginButton,
} from 'vue-facebook-login-component'

export default {
  name: 'LiveExample',
  components: {
    VFacebookLogin,
    VFacebookLoginButton,
  },
  data: () => ({
    appId:
      process.env.NODE_ENV === 'development'
        ? '852858511574509'
        : '2146252248983683',
    disconnected: { idle: true, disconnected: true },
    working: { working: true, disabled: true },
    connected: { idle: true, connected: true },
    error: { hasError: true, disabled: true },
    disabled: { idle: true, disconnected: true, disabled: true },
  }),
}
</script>

<style lang="scss" scoped></style>
