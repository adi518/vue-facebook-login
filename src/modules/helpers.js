// https://developers.facebook.com/docs/apps/versions/
// https://developers.facebook.com/docs/javascript/quickstart/
// https://developers.facebook.com/docs/javascript/reference/FB.init/

/* global window, document */

export function initFbSdk(options) {
  return new Promise(resolve => {
    window.fbAsyncInit = function () {
      const defaults = { cookie: true, xfbml: true }
      options = { ...defaults, ...options }
      window.FB.init(options)
      resolve()
    };
    /* eslint-disable */
    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) { return; }
      const js = d.createElement(s); js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
    /* eslint-enable */
  })
}

export function getFbSdk(options) {
  return new Promise(async resolve => {
    if (window.FB) {
      resolve(window.FB)
    } else {
      await initFbSdk(options)
      resolve(window.FB)
    }
  })
}

export function fbLogin(options) {
  return new Promise(resolve => {
    window.FB.login(response => resolve(response), options)
  })
}

export function getFbLoginStatus() {
  return new Promise(resolve => {
    window.FB.getLoginStatus(response => resolve(response))
  })
}

export function fbLogout() {
  return new Promise(resolve => {
    window.FB.logout(response => resolve(response))
  })
}
