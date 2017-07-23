<template>
  <div id="app">
    <facebook-login appId="326022817735322" :onLoginEvent="getInitialInformation" :onWillMount="getInitialInformation" :onLogoutEvent="onLogout"
    logoutLabel="bye bye!"
    loginLabel="hi!"
    >
    </facebook-login>
    <div v-if="isConnected" class="well">
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
</template>

<script>
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
      personalID: ''
    }
  },
  methods: {
    getInitialInformation: function (response) {
      if (response.status === "connected") {
        this.isConnected = true;
        FB.api('/me', 'GET', { fields: 'id,name,email' },
          userInformation => {
            this.personalID = userInformation.id;
            this.email = userInformation.email;
            this.name = userInformation.name;
          }
        )
      }
    },
    onLogout(){
      this.isConnected=false;
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

.well {
  background-color: rgb(191, 238, 229);
  margin: auto;
  padding: 50px;
  border-radius: 20px;
  margin-top: 100px;
  /* display:inline-block; */
}

.list-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
</style>
