// https://developers.facebook.com/docs/apps/versions/
// https://developers.facebook.com/docs/javascript/reference/
// https://developers.facebook.com/docs/javascript/reference/FB.init/
// https://developers.facebook.com/docs/javascript/quickstart/

export const FACEBOOK_SCRIPT_ID = 'facebook-jssdk'

function handleSdkLoadError(error) {
  console.error(
    new URIError(`The script ${error.target.src} didn't load correctly.`)
  )
}

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement
export function initSdk(options) {
  return new Promise((resolve, reject) => {
    // prettier-ignore
    window.fbAsyncInit = function() {
      const defaults = { cookie: true, xfbml: true, autoLogAppEvents: true, }
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
      js.onerror = error => { handleSdkLoadError(error); reject(error) } // non-facebook line
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', FACEBOOK_SCRIPT_ID))
    /* eslint-enable */
  })
}

export function getSdk(options) {
  return new Promise((resolve, reject) => {
    if (window.FB) {
      resolve(window.FB)
    } else {
      initSdk(options)
        .then(() => resolve(window.FB))
        .catch(reject)
    }
  })
}

export function login(options) {
  return new Promise(resolve => window.FB.login(resolve, options))
}

export function logout() {
  return new Promise(resolve => window.FB.logout(resolve))
}

export function getLoginStatus() {
  return new Promise(resolve => window.FB.getLoginStatus(resolve))
}

export function removeSdkScript() {
  if (window.FB) return
  return new Promise(resolve => {
    const fbSdkScript = document.getElementById(FACEBOOK_SCRIPT_ID)
    if (fbSdkScript) fbSdkScript.remove()
    window.setTimeout(resolve)
  })
}
