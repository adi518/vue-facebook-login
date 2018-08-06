// https://developers.facebook.com/docs/apps/versions/

import {
  getSdk,
  fbLogin,
  fbLogout,
  getFbLoginStatus
} from '@/modules/helpers.js'

export default {
  name: 'v-facebook-login-scope',
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
    isLoading: true,
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
  async created() {
    const created = new Promise(async resolve => {
      const sdk = await getSdk(this.appId, this.version)
      const fbLoginStatus = await getFbLoginStatus()
      if (fbLoginStatus.status === 'connected') {
        this.isConnected = true
      }
      this.isSdkLoaded = true
      this.$emit('sdk-load', { FB: sdk })
      resolve()
    })
    this.doAsync(created)
  },
  updated() {
    if (this.$slots.default && this.$slots.default.length) {
      console.error(`[V-Facebook-Login error]: Slot must be scoped.`)
    }
  },
  computed: {
    isIdle() {
      return this.isLoading === false
    },
    isDisconnected() {
      return this.isConnected === false
    },
    isEnabled() {
      return this.isDisabled === false
    },
    isDisabled() {
      return this.isLoading || this.isSdkLoaded === false
    },
    scope() {
      return {
        idle: this.isIdle,
        login: this.login,
        logout: this.logout,
        loading: this.isLoading,
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
    async login() {
      const login = fbLogin(this.loginOptions)
      const response = await this.doAsync(login)
      if (response.status === 'connected') {
        this.isConnected = true
      } else {
        this.isConnected = false
      }
      this.$emit('login', response)
      return login
    },
    async logout() {
      const logout = fbLogout()
      const response = await this.doAsync(logout)
      this.isConnected = false
      this.$emit('logout', response)
      return logout
    },
    async doAsync(promise) {
      this.isLoading = true
      await promise
      this.isLoading = false
      return promise
    }
  },
  render() {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default(this.scope)
    }
  }
}
