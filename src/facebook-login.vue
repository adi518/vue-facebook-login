<template>
  <div class="container">
    <button @click="buttonClicked">
      <div class="spinner" v-if="isWorking"> </div>
      <img :src="icon" v-if="!isWorking"> {{getButtonText}}
    </button>
  </div>
</template>

<script>
import { loadFbSdk, getLoginStatus, fbLogout, fbLogin } from './helpers.js'
import icon from './icon.png'
export default {
  name: 'facebook-login',
  data() {
    return {
      isWorking: false,
      isConnected: false,
      icon
    }
  },
  computed: {
    getButtonText() {
      switch (this.isConnected) {
        case true:
          return this.logoutLabel;
        case false:
          return this.loginLabel;
        default:
          return 'this is default';
      }
    }
  },
  methods: {
    buttonClicked() {
      // this.props.onClick();
      if (this.isConnected) {
        this.logout();
      } else {
        this.login();
      }
    },
    logout() {
      this.isWorking = true;
      fbLogout()
        .then(response => {
          console.info('logout response', response);
          this.isWorking = false;
          this.isConnected = false;
          // this.props.onLogoutEvent(response);
        }
        );
    },
    login() {
      this.isWorking = true;
      fbLogin(this.loginOptions)
        .then(response => {
          console.info('login response', response);
          if (response.status === 'connected') {
            this.isConnected = true;
          } else {
            this.isConnected = false;
          }
          this.isWorking = false;
          // this.props.onLoginEvent(response);
        });
    }
  },
  props: {
    appId: {
      type: String,
      required: true
    },
    version: {
      type: String,
      default: 'v2.9'
    },
    logoutLabel: {
      type: String,
      default: 'Log out from Facebook'
    },
    loginLabel: {
      type: String,
      default: 'Log In To Facebook'
    },
    loginOptions: {
      type: Object,
      default: function () {
        return {
          scope: 'email'
        }
      }
    }
  },
  mounted() {
    this.isWorking = true;
    loadFbSdk(this.appId, this.version)
      .then(loadingResult => {
        console.info(loadingResult, window.FB);
      })
      .then(() => getLoginStatus())
      .then(response => {
        if (response.status === 'connected') {
          this.isConnected = true;
        }
        this.isWorking = false;
        // this.props.onWillMount(response);
      });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  position: relative;
  padding: 0 15px 0px 46px;
  border: none;
  line-height: 34px;
  font-size: 16px;
  color: #FFF;
  min-width:225px;
  background-image: linear-gradient(#4C69BA, #3B55A0);
}

.spinner {
  box-sizing: border-box;
  width: 30px;
  height: 90%;
  border-radius: 50%;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  animation: spin 2s linear infinite;
  position: absolute;
  left: 5px;
}

img {
    position: absolute;
    top: 3px;
    left: 10px;
    width: 30px;

}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
