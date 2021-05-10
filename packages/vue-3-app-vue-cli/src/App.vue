<template>
  <p>
    <small>Facebook Login for Vue.js 3.x</small>
  </p>
  <p>
    <FacebookLogin
      app-id="852858511574509"
      data-foobar="foobar"
      useAltLogo
      @click="handleClick"
    >
    </FacebookLogin>
  </p>
  <p>
    <small>Static States</small>
  </p>
  <p>
    <Button
      :scope="states.disconnected"
      data-foobar="foobar"
      useAltLogo
      @click="handleClick"
    />
  </p>
  <p>
    <Button :scope="states.working" useAltLogo />
  </p>
  <p>
    <Button :scope="states.connected" useAltLogo />
  </p>
  <p>
    <Button :scope="states.disabled" useAltLogo />
  </p>
  <p>
    <Button :scope="states.error" useAltLogo />
  </p>
</template>

<script setup>
import FacebookLogin, {
  VFBLoginButton as Button,
} from 'vue-facebook-login-component-next'
import 'vue-facebook-login-component-next/dist/style.css'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

const handleClick = () => console.log('click from app')

const states = {
  disconnected: { idle: true, disconnected: true },
  working: { working: true, disabled: true },
  connected: { idle: true, connected: true },
  error: { hasError: true, disabled: true },
  disabled: { idle: true, disconnected: true, disabled: true },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Inter:300,700&display=swap');

html {
  font-size: 100%;
}

body {
  margin: 1rem;
  background-color: #0c1121;
}

#app {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  display: flex;
}
</style>
