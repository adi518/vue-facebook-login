// https://developers.facebook.com/docs/apps/versions/

import {
  fbLogin,
  fbLogout,
  loadFbSdk,
  getFbLoginStatus
} from '@/modules/helpers.js'

export default {
  name: 'v-facebook-login-bare',
  props: {
    value: {
      type: Object,
      default: () => ({
        connected: false
      })
    },
    appId: {
      type: String,
      required: true
    },
    version: {
      type: String,
      default: 'v3.1'
    },
    loginOptions: {
      type: Object,
      default: () => ({
        scope: 'email'
      })
    }
  },
  data: () => ({
    isSdkLoaded: false,
    isDisabled: true,
    isWorking: false,
    isConnected: false
  }),
  watch: {
    isConnected(connected) {
      this.$emit('input', { connected })
      if (connected) {
        this.$emit('connect')
      }
    }
  },
  created() {
    loadFbSdk(this.appId, this.version)
      .then(getFbLoginStatus)
      .then(response => {
        if (response.status === 'connected') {
          this.isConnected = true
        } else { /* disconnected */ }
        this.isSdkLoaded = true
        this.isDisabled = false
        this.$emit('sdk-load', { FB: window.FB })
      })
  },
  mounted() {
    if (this.$scopedSlots.default) {
      // OK
    } else {
      console.error(`[V-Facebook-Login error]: Slot must be scoped.`)
    }
  },
  computed: {
    isIdle() {
      return this.isSdkLoaded && this.isWorking === false
    },
    isDisconnected() {
      return this.isConnected === false
    },
    isEnabled() {
      return this.isDisabled === false
    },
    scope() {
      return {
        idle: this.isIdle,
        login: this.login,
        logout: this.logout,
        working: this.isWorking,
        enabled: this.isEnabled,
        disabled: this.isDisabled,
        connected: this.isConnected,
        handleClick: this.handleClick,
        disconnected: this.isDisconnected
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
      if (this.isConnected) {
        this.logout()
      } else {
        this.login()
      }
    },
    login() {
      this.isWorking = true
      fbLogin(this.loginOptions)
        .then(response => {
          if (response.status === 'connected') {
            this.isConnected = true
          } else {
            this.isConnected = false
          }
          this.isWorking = false
          this.$emit('login', response)
        })
    },
    logout() {
      this.isWorking = true
      fbLogout().then(response => {
        this.isWorking = false
        this.isConnected = false
        this.$emit('logout', response)
      })
    }
  },
  render() {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default(this.scope)
    }
  }
}
