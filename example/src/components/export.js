import Bare from '@/components/FBlogin.js'
import FBLogin from '@/components/FBLogin.vue'

export { default as Bare } from '@/components/FBlogin.js'
export { default as FBLogin } from '@/components/FBLogin.vue'

export const Install = {
  install(Vue, config) {
    Vue.component(Bare.name, Bare)
    Vue.component(FBLogin.name, FBLogin)
  }
}
