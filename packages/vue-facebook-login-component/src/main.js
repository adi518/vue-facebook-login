import Button from '@/components/Composed.vue'

export { default as VFBLogin } from '@/components/Composed.vue'
export { default as VFBLoginScope } from '@/components/Scope.js'

export const Install = {
  install(Vue) {
    Vue.component(Button.name, Button)
  }
}

function autoInstall() {
  let GlobalVue
  if (typeof window !== 'undefined') GlobalVue = window.Vue
  else if (typeof global !== 'undefined') GlobalVue = global.Vue
  if (GlobalVue) GlobalVue.use(Install)
}

autoInstall()

export default Button
