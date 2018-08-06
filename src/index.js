import FBLogin from '@/components/FBLogin.vue'

export { default as VFBLogin } from '@/components/FBLogin.vue'
export { default as VFBLoginScope } from '@/components/FBLogin.Scope.js'

export const Install = {
  install(Vue, config) {
    Vue.component(FBLogin.name, FBLogin)
  }
}

// Auto-install (Window/Node)
let GlobalVue
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(Install)
}

export default FBLogin
