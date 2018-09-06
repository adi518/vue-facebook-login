import {
  getFbSdk,
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
    isWorking: true,
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
      const { appId, version, options } = this
      const sdk = await getFbSdk({ appId, version, options })
      const fbLoginStatus = await getFbLoginStatus()
      if (fbLoginStatus.status === 'connected') {
        this.isConnected = true
      }
      this.$emit('sdk-init', { FB: sdk })
      resolve()
    })
    this.doAsync(created)
  },
  updated() {
    if (this.$slots.default && this.$slots.default.length) {
      console.error('[V-Facebook-Login-Scope error]: Slot must be scoped.')
    }
  },
  computed: {
    isDisconnected() {
      return this.isConnected === false
    },
    isEnabled() {
      return this.isDisabled === false
    },
    isDisabled() {
      return this.isWorking === true
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
        toggleLogin: this.toggleLogin,
        disconnected: this.isDisconnected
      }
    }
  },
  methods: {
    toggleLogin() {
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
      this.isWorking = true
      await promise
      this.isWorking = false
      return promise
    }
  },
  render() {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default(this.scope)
    }
  }
}
