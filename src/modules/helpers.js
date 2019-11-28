// https://developers.facebook.com/docs/apps/versions/
// https://developers.facebook.com/docs/javascript/quickstart/
// https://developers.facebook.com/docs/javascript/reference/FB.init/
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement

/* global window, document */

export const FACEBOOK_SCRIPT_ID = 'facebook-jssdk'

function loadError(oError) {
  console.error(
    new URIError(`The script ${oError.target.src} didn't load correctly.`)
  )
}

export function removeFbSdkScript() {
  if (window.FB) return
  const fbSdkScript = document.getElementById(FACEBOOK_SCRIPT_ID)
  if (fbSdkScript) fbSdkScript.remove()
}

export function initFbSdk(options) {
  return new Promise((resolve, reject) => {
    // prettier-ignore
    window.fbAsyncInit = function() {
      const defaults = { cookie: true, xfbml: true }
      options = { ...defaults, ...options }
      window.FB.init(options)
      resolve()
    }; // eslint-disable-line
    /* eslint-disable */
    // prettier-ignore
    ;(function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) { return; }
      const js = d.createElement(s); js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      js.onerror = error => { loadError(error); reject(error) } // non-facebook line
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', FACEBOOK_SCRIPT_ID))
    /* eslint-enable */
  })
}

export function getFbSdk(options) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    if (window.FB) {
      resolve(window.FB)
    } else {
      try {
        await initFbSdk(options)
        resolve(window.FB)
      } catch (error) {
        reject(error)
      }
    }
  })
}

export function fbLogin(options) {
  return new Promise(resolve => window.FB.login(resolve, options))
}

export function getFbLoginStatus() {
  return new Promise(resolve => window.FB.getLoginStatus(resolve))
}

export function fbLogout() {
  return new Promise(resolve => window.FB.logout(resolve))
}
