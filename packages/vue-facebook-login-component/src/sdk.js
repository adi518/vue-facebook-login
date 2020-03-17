// https://developers.facebook.com/docs/apps/versions/
// https://developers.facebook.com/docs/javascript/quickstart/
// https://developers.facebook.com/docs/javascript/reference/
// https://developers.facebook.com/docs/javascript/reference/FB.init/
// https://stackoverflow.com/questions/43445301/access-token-warning-when-logging-in-using-facebook-javascript-sdk

export const FACEBOOK_SCRIPT_ID = 'facebook-jssdk'

// https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
export const LOGIN_STATUSES = {
  UNKNOWN: 'unknown',
  CONNECTED: 'connected',
  NOT_AUTHORIZED: 'not_authorized'
}

function handleLoadError(error) {
  console.error(
    new URIError(`The script ${error.target.src} didn't load correctly.`)
  )
}

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement
export function initSdk(options) {
  return new Promise((resolve, reject) => {
    // prettier-ignore
    window.fbAsyncInit = function() {
      window.FB.init(options)
      resolve(window.FB)
    }; // eslint-disable-line
    /* eslint-disable */
    // prettier-ignore
    ;(function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) { return; }
      const js = d.createElement(s); js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      js.onerror = error => { handleLoadError(error); reject(error) } // non-facebook line
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', FACEBOOK_SCRIPT_ID))
    /* eslint-enable */
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

export function removeScript() {
  return new Promise(resolve => {
    const script = document.getElementById(FACEBOOK_SCRIPT_ID)
    if (script) script.remove()
    window.setTimeout(resolve)
  })
}

export class Sdk {
  static state = Object.seal({ isExternal: false, pending: null, consumers: 0 })

  static async _init(options) {
    if (Sdk.state.isExternal) return window.FB
    if (window.FB) {
      Sdk.state.isExternal = true
      return window.FB
    }
    if (Sdk.state.pending) return Sdk.state.pending
    Sdk.state.pending = initSdk(options)
    return Sdk.state.pending
  }

  reset() {
    Sdk.state.consumers = 0
    Sdk.state.pending = null
    Sdk.state.isExternal = false
  }

  static subscribe(...args) {
    Sdk.state.consumers++
    return Sdk._init(...args)
  }

  static unsubscribe() {
    Sdk.state.consumers--
    if (Sdk.state.isExternal || Sdk.state.consumers) return
    Sdk.reset()
    return removeScript()
  }

  static isConnected(status) {
    return status === LOGIN_STATUSES.CONNECTED
  }
}
