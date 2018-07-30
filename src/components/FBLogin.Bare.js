// https://developers.facebook.com/docs/apps/versions/

import {
  getSdk,
  fbLogin,
  fbLogout,
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
    isWorking: false,
    isSdkLoaded: false,
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
    getSdk(this.appId, this.version)
      .then(getFbLoginStatus)
      .then(response => {
        if (response.status === 'connected') {
          this.isConnected = true
        } else { /* disconnected */ }
        this.isSdkLoaded = true
        this.$emit('sdk-load', { FB: window.FB })
      })
  },
  updated() {
    if (this.$scopedSlots.default) {
      // OK
    } else if (this.$slots.default) {
      console.error(`[V-Facebook-Login error]: Slot must be scoped.`)
    }
  },
  computed: {
    isIdle() {
      return this.isWorking === false
    },
    isDisconnected() {
      return this.isConnected === false
    },
    isEnabled() {
      return this.isDisabled === false
    },
    isDisabled() {
      return this.isWorking || this.isSdkLoaded === false
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
      const login = fbLogin(this.loginOptions)
        .then(response => {
          if (response.status === 'connected') {
            this.isConnected = true
          } else {
            this.isConnected = false
          }
          this.$emit('login', response)
        })
      return this.doAsync(login)
    },
    logout() {
      const logout = fbLogout().then(response => {
        this.isConnected = false
        this.$emit('logout', response)
      })
      return this.doAsync(logout)
    },
    doAsync(promise) {
      this.isWorking = true
      promise.then(() => (this.isWorking = false))
    }
  },
  render() {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default(this.scope)
    }
  }
}
