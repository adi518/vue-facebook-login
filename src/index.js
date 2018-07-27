import FBLogin from '@/components/FBLogin.vue'
import FBLoginBare from '@/components/FBLogin.Bare.js'

export { default as FBLogin } from '@/components/FBLogin.vue'
export { default as FBLoginBare } from '@/components/FBLogin.Bare.js'

export default FBLogin

export const Install = {
  install(Vue, config) {
    Vue.component(FBLogin.name, FBLogin)
    Vue.component(FBLoginBare.name, FBLoginBare)
  }
}
