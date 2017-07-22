import facebookLogin from './components/facebook-login.vue'
const facebookLoginPlugin = {
  install: function (Vue, options) {
    Vue.component(facebookLogin.name, facebookLogin)
  }
}

export default facebookLoginPlugin
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(facebookLoginPlugin)
}
