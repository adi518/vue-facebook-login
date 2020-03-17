import { Sdk, login, logout, getLoginStatus } from '@/sdk'

export default {
  inheritAttrs: false,
  name: 'v-facebook-login-scope',
  props: {
    value: {
      type: Object,
      default: () => ({ connected: false })
    },
    appId: {
      type: String,
      required: true
    },
    version: {
      type: String,
      default: 'v6.0' // https://developers.facebook.com/docs/graph-api/changelog/
    },
    options: {
      type: Object,
      default: () => ({ cookie: true, xfbml: true, autoLogAppEvents: true }) // https://developers.facebook.com/docs/javascript/quickstart
    },
    loginOptions: {
      type: Object,
      default: () => ({ scope: 'email' })
    }
  },
  data: () => ({
    error: null,
    working: true,
    connected: false
  }),
  watch: {
    // eslint-disable-next-line no-unused-vars
    scope({ login, logout, toggleLogin, ...restScope }) {
      this.$emit('input', restScope)
    }
  },
  async beforeCreate() {
    await Sdk.unsubscribe()
  },
  async created() {
    const created = async () => {
      const sdk = await this.initSdk()
      if (this.error) return
      this.$emit('sdk-init', { FB: sdk, scope: this.scope })
      const { status } = await getLoginStatus()
      if (Sdk.isConnected(status)) {
        this.connected = true
        this.$emit('login')
      }
    }
    this.async(created())
  },
  computed: {
    idle() {
      return !this.working
    },
    enabled() {
      return !this.disabled
    },
    disabled() {
      return this.working || Boolean(this.error) || !this.appId
    },
    disconnected() {
      return !this.connected
    },
    scope() {
      return {
        idle: this.idle,
        error: this.error,
        login: this.login,
        logout: this.logout,
        working: this.working,
        enabled: this.enabled,
        disabled: this.disabled,
        connected: this.connected,
        toggleLogin: this.toggleLogin,
        disconnected: this.disconnected
      }
    }
  },
  methods: {
    toggleLogin() {
      this.connected ? this.logout() : this.login()
    },
    async initSdk() {
      const { appId, version, options } = this
      const promise = Sdk.subscribe({ appId, version, ...options })
      const sdk = await this.catch(promise)
      return sdk
    },
    async login() {
      const promise = login(this.loginOptions)
      const { status } = await this.async(promise)
      if (Sdk.isConnected(status)) {
        this.connected = true
        this.$emit('login', status)
      }
      return promise
    },
    async logout() {
      const { status } = await getLoginStatus()
      if (Sdk.isConnected(status)) await this.async(logout())
      this.connected = false
      this.$emit('logout')
      return logout
    },
    catch(promise) {
      return promise.catch(error => {
        this.error = error
        console.error(this.error)
      })
    },
    async async(promise) {
      this.working = true
      promise = await this.catch(promise)
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
