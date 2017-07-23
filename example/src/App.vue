<template>
  <div id="app">
    <facebookLogin appId="326022817735322">
    </facebookLogin>
  </div>
</template>

<script>
import facebookLogin from './facebook-login.vue'
export default {
  name: 'app-app',
  components: { facebookLogin }
}
</script>

<style>

</style>
