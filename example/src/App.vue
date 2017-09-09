<template>
  <div id="app">
    <facebook-login class="button"
      appId="326022817735322"
      @login="onLogin"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded">
    </facebook-login>
    <img v-if="!isConnected"
      :src="loginImage"
      class="login">
    <div v-if="isConnected"
      class="information">
      <h1>My Facebook Information</h1>
      <div class="well">
        <div class="list-item">
          <img :src="loginImage">
          <i>{{name}}</i>
        </div>
        <div class="list-item">
          <img :src="mailImage">
          <i>{{email}}</i>
        </div>
        <div class="list-item">
          <img :src="faceImage">
          <i>{{personalID}}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import facebookLogin from '../../src/index.js'
import idImage from './id.svg'
import loginImage from './login.svg'
import mailImage from './mail.svg'
import faceImage from './face.svg'
export default {
  name: 'app',
  data() {
    return {
      idImage, loginImage, mailImage, faceImage,
      isConnected: false,
      name: '',
      email: '',
      personalID: '',
      FB: undefined
    }
  },
  components: { facebookLogin },
  methods: {
    getUserData() {
      this.FB.api('/me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
        }
      )
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin() {
      this.isConnected = true
      this.getUserData()
    },
    onLogout() {
      this.isConnected = false;
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: flex-start
}

.information {
  margin-top: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.well {
  background-color: rgb(191, 238, 229);
  margin: auto;
  padding: 50px 50px;
  ;
  border-radius: 20px;
  /* display:inline-block; */
}

.login {
  width: 200px;
  margin: auto;
}

.list-item:first-child {
  margin: 0;
}

.list-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.button {
  margin: auto;
}
</style>
