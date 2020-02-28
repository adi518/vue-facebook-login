import {
  getFbSdk as getFbSdkHelper,
  fbLogin,
  fbLogout,
  removeFbSdkScript,
  getFbLoginStatus
} from '@/helpers'

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
    options: {
      type: Object,
      default: () => ({})
    },
    loginOptions: {
      type: Object,
      default: () => ({
        scope: 'email'
      })
    }
  },
  data: () => ({
    error: null,
    working: true,
    hasError: false,
    connected: false
  }),
  watch: {
    connected(connected) {
      this.$emit('input', { connected })
      if (connected) {
        this.$emit('connect')
      }
    }
  },
  beforeCreate() {
    removeFbSdkScript()
  },
  created() {
    // eslint-disable-next-line no-async-promise-executor
    const created = async () => {
      const sdk = await this.getFbSdk().catch(console.error)
      const fbLoginStatus = await getFbLoginStatus().catch(console.error)
      if (fbLoginStatus.status === 'connected') {
        this.connected = true
      }
      this.$emit('sdk-init', { FB: sdk, scope: this.scope })
    }
    this.doAsync(created())
  },
  updated() {
    if (this.$slots.default && this.$slots.default.length) {
      console.error('[V-Facebook-Login-Scope error]: Slot must be scoped.')
    }
  },
  computed: {
    disconnected() {
      return !this.connected
    },
    enabled() {
      return !this.disabled
    },
    disabled() {
      return this.working || this.hasError
    },
    scope() {
      return {
        error: this.error,
        login: this.login,
        logout: this.logout,
        working: this.working,
        enabled: this.enabled,
        disabled: this.disabled,
        hasError: this.hasError,
        connected: this.connected,
        toggleLogin: this.toggleLogin,
        disconnected: this.disconnected
      }
    }
  },
  methods: {
    toggleLogin() {
      this.$emit('click')
      if (this.connected) {
        this.logout()
      } else {
        this.login()
      }
    },
    async getFbSdk() {
      try {
        const { appId, version, options } = this
        const fbSdk = await getFbSdkHelper({ appId, version, ...options })
        return fbSdk
      } catch (error) {
        this.error = error
        this.hasError = true
        throw error
      }
    },
    async login() {
      const login = fbLogin(this.loginOptions)
      const response = await this.doAsync(login)
      if (response.status === 'connected') {
        this.connected = true
      } else {
        this.connected = false
      }
      this.$emit('login', response)
      return login
    },
    async logout() {
      const logout = fbLogout()
      const response = await this.doAsync(logout)
      this.connected = false
      this.$emit('logout', response)
      return logout
    },
    async doAsync(promise) {
      this.working = true
      await promise.catch(console.error)
      this.working = false
      return promise
    }
  },
  render() {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default(this.scope)
    }
  }
}
