<template>
  <div id="app">
    <facebook-login appId="326022817735322">
    </facebook-login>
  </div>
</template>

<script>
// FB.api(path, method, params, callback)
FB.api('/me', 'get', function (response) {
  console.log(response);
})
export default {
  name: 'app-app'
}
</script>

<style>

</style>
