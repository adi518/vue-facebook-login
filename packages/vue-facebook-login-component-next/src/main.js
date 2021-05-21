import Button from '@/FacebookLogin.vue'

export { default as VFBLogin } from '@/FacebookLogin.vue'
export { default as VFBLoginScope } from '@/Scope'
export { default as VFBLoginLoader } from '@/Loader.vue'
export { default as VFBLoginButton } from '@/Button.vue'

export const Install = {
  install(Vue) {
    Vue.component(Button.name, Button)
  },
}

function autoInstall() {
  let GlobalVue
  if (typeof window !== 'undefined') GlobalVue = window.Vue
  else if (typeof global !== 'undefined') GlobalVue = global.Vue
  if (GlobalVue) GlobalVue.use(Install)
}

autoInstall()

export default Button
