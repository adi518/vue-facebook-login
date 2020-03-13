import {
  getSdk,
  login,
  logout,
  getLoginStatus,
  removeSdkScript
} from '@/helpers'

export default {
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
      default: () => ({})
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
    scope({ login, logout, toggleLogin, ...restScope }, _prevValue) {
      this.$emit('input', restScope)
    }
  },
  async beforeCreate() {
    await removeSdkScript()
  },
  async created() {
    const created = async () => {
      const sdk = await this.getSdk()
      if (this.error) return void 0
      this.$emit('sdk-init', { FB: sdk, scope: this.scope })
      const { status } = await getLoginStatus()
      if (status === 'connected') {
        this.connected = true
        this.$emit('login')
      }
    }
    this.async(created())
  },
  updated() {
    if (this.$slots.default?.length) {
      console.error('Slot must be scoped.')
    }
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
    async getSdk() {
      const { appId, version, options } = this
      const promise = getSdk({ appId, version, ...options })
      const sdk = await this.catchAsync(promise)
      return sdk
    },
    async login() {
      const promise = login(this.loginOptions)
      const { status } = await this.async(promise)
      if (status === 'connected') {
        this.connected = true
        this.$emit('login', status)
      }
      return promise
    },
    async logout() {
      await this.async(logout())
      this.connected = false
      this.$emit('logout')
      return logout
    },
    async catchAsync(promise) {
      return promise.catch(error => {
        if (error) {
          this.error = error
          console.error(this.error)
        }
      })
    },
    async async(promise) {
      this.working = true
      const handled = await this.catchAsync(promise)
      this.working = false
      return handled
    }
  },
  render() {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default(this.scope)
    }
  }
}
