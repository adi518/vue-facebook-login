import { Sdk } from '@/Sdk'

export default {
  inheritAttrs: false,
  name: 'v-facebook-login-scope',
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    appId: {
      type: String,
      required: true
    },
    version: {
      type: String,
      default: 'v9.0' // https://developers.facebook.com/docs/graph-api/changelog/
    },
    options: {
      type: Object,
      default: () => ({ cookie: true, xfbml: true, autoLogAppEvents: true }) // https://developers.facebook.com/docs/javascript/quickstart
    },
    loginOptions: {
      type: Object,
      default: () => ({ scope: 'email' })
    },
    asyncDelay: {
      type: Number,
      default: 0
    },
    sdkLocale: {
      type: String,
      default: 'en_US'
    }
  },
  data: () => ({
    error: null,
    working: true,
    connected: false
  }),
  watch: {
    value({ error, working, connected }) {
      this.error = error
      this.working = working
      this.connected = connected
    },
    // eslint-disable-next-line no-unused-vars
    scope({ login, logout, toggleLogin, ...restScope }) {
      this.$emit('input', restScope)
    }
  },
  async created() {
    this.async(async () => {
      const { appId, version, options, sdkLocale } = this
      const sdk = await Sdk.subscribe({ appId, version, ...options }, sdkLocale)
      if (this.error) return void 0
      this.$emit('sdk-init', { FB: sdk, scope: this.scope })
      const { status } = await Sdk.getLoginStatus()
      if (Sdk.isConnected(status)) {
        this.connected = true
        this.$emit('login')
      }
    })
  },
  beforeDestroy() {
    Sdk.unsubscribe()
  },
  computed: {
    idle() {
      return !this.working && !this.hasError
    },
    enabled() {
      return !this.disabled
    },
    disabled() {
      return this.working || this.hasError || !this.appId
    },
    disconnected() {
      return !this.connected
    },
    hasError() {
      return Boolean(this.error)
    },
    scope() {
      return {
        idle: this.idle,
        error: this.error,
        hasError: this.hasError,
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
    async login() {
      return this.async(async () => {
        const response = await Sdk.login(this.loginOptions)
        if (Sdk.isConnected(response.status)) {
          this.connected = true
          this.$emit('login', response)
        }
        return response
      })
    },
    async logout() {
      return this.async(async () => {
        const response = await Sdk.getLoginStatus()
        if (Sdk.isConnected(response.status)) await Sdk.logout()
        this.connected = false
        this.$emit('logout', response)
        return response
      })
    },
    async async(asyncFn) {
      this.working = true
      const promise = await asyncFn().catch(this.catchHandler)
      const delay = new Promise(resolve => setTimeout(resolve, this.asyncDelay))
      const [, result] = await Promise.all([delay, promise])
      this.working = false
      return result
    },
    catchHandler(error) {
      this.error = error
      console.error(this.error)
    }
  },
  render() {
    return this.$scopedSlots.default?.(this.scope)
  }
}
