import Button from '@/components/FacebookLogin.vue'

export { default as VFBLogin } from '@/components/FacebookLogin.vue'
export { default as VFBLoginScope } from '@/components/Scope'
export { default as VFBLoginLoader } from '@/components/Loader.vue'
export { default as VFBLoginButton } from '@/components/Button.vue'

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
