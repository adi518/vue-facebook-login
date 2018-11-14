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
    working: true,
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
  created() {
    const created = new Promise(async resolve => {
      const { appId, version, options } = this
      const sdk = await getFbSdk({ appId, version, options })
      const fbLoginStatus = await getFbLoginStatus()
      if (fbLoginStatus.status === 'connected') {
        this.connected = true
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
    disconnected() {
      return this.connected === false
    },
    enabled() {
      return this.disabled === false
    },
    disabled() {
      return this.working === true
    },
    scope() {
      return {
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
      this.$emit('click')
      if (this.connected) {
        this.logout()
      } else {
        this.login()
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
      await promise
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
