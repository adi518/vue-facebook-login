# Vue Facebook Login

> A renderless Vue.js component for composing Facebook login.

## [Install](#install)

### NPM

```console
npm install vue-facebook-login-component
```

### Yarn

```console
yarn add vue-facebook-login-component
```

### Embed Directly

```html
<script src="https://unpkg.com/vue-facebook-login-component/dist/vue-facebook-login-component.umd.min.js"></script>
```

> When embedding, the script automatically registers itself as a Vue plugin.

## [Usage](#usage)

To use the component in your template, simply import and register with your component.

### Template and Script

```html
<template>
  <v-facebook-login app-id="966242223397117"></v-facebook-login>
</template>

<script>
  import VFacebookLogin from 'vue-facebook-login-component'

  export default {
    components: {
      VFacebookLogin
    }
  }
</script>
```

## [Features](#features)

- Zero dependencies (gzipped: 22.1K)
- Handpicked Facebook SVG logos ([Iconmonstr](<(https://iconmonstr.com/facebook-1-svg/)>))
- Customizable through props and scoped-slots
- Scope component (renderless/render-props pattern)
- Button component with flex-box CSS and `rem` sizing

## [JS Fiddle](#js-fiddle)

See [JS Fiddle](https://jsfiddle.net/adi518/jfa0gys8) for a vanilla example.

## [What's New in Version 2.0](#whats-new-in-version-20)

Simpler API, alongside newly added and updated features (mind breaking-changes).

### Added

- Added test coverage.
- Added multiple instance support.
- Added scope field `idle`.
- Added prop `logoClass`.
- Added prop `textClass`.
- Added prop `loaderClass`.
- Added prop [`useAltLogo`](#usealtlogo-prop).

### Updated

- Updated style with leaner CSS.
- Updated all slots to [scoped-slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots).
- Updated prop `version` default to: `v6.0`.
- Updated error slot to appear on all errors.
- Updated logo to comply with [Facebook guidelines](https://developers.facebook.com/docs/facebook-login/userexperience/#buttondesign).
- Updated labels to comply with [Facebook guidelines](https://developers.facebook.com/docs/facebook-login/userexperience/#buttondesign).

### Fixed

- Fixed `disabled` state when `app-id` is not provided.

### Removed

- Removed event `connect` (use `login` instead).
- Removed prop `buttonStyle` (use `style` instead).
- Removed scope field `hasError` (use `error` instead).

## [Props](#props)

<div class="table table-cols-4">

| Name          | Type    | Default                                                 | Note                                                                                                                          |
| ------------- | ------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| value         | Object  | `{}`                                                    | Used for one-way V-Model. [ &ast; ]                                                                                           |
| app-id        | String  | `NONE`                                                  | Required. [ &ast; ]                                                                                                           |
| version       | String  | `'v6.0'`                                                | See [versions](https://developers.facebook.com/docs/graph-api/changelog/). [ &ast; ]                                          |
| options       | Object  | `{ cookie: true, xfbml: true, autoLogAppEvents: true }` | See [options](https://developers.facebook.com/docs/javascript/reference/FB.init/). [ &ast; ]                                  |
| login-options | Object  | `{ scope: 'email' }`                                    | See [options](https://developers.facebook.com/docs/reference/javascript/FB.login/). [ &ast; ]                                 |
| logo-class    | String  | `NONE`                                                  |                                                                                                                               |
| logo-style    | Object  | `{}`                                                    |                                                                                                                               |
| text-class    | String  | `NONE`                                                  |                                                                                                                               |
| text-style    | Object  | `{}`                                                    |                                                                                                                               |
| loader-class  | String  | `NONE`                                                  |                                                                                                                               |
| loader-style  | Object  | `{}`                                                    |                                                                                                                               |
| transition    | Array   | `[]`                                                    | Array of CSS transition values. Example:<br><br>`[ 'background-color 0.15s ease-in-out', 'padding 0.15s ease-in-out', ... ]`. |
| use-alt-logo  | Boolean | `false`                                                 | Use [Iconmonstr alternate Facebook logo](https://iconmonstr.com/facebook-6-svg/).                                             |

</div>

[ &ast; ] - Scope component prop.

### [useAltLogo Prop](#use-alt-logo-prop)

Offering an alternative logo from [Iconmonstr](https://iconmonstr.com/facebook-1-svg/) (this will bring back `v1.x` logo). This prop was released as `useAlternateLogo` in `2.0.0` but shortened to `useAltLogo` in `2.1.0`, a one-off breaking change.

## [Slots](#slots)

<div class="table table-cols-3">

| Name    | Default                                                         | Description                                                            |
| ------- | --------------------------------------------------------------- | ---------------------------------------------------------------------- |
| login   | `'Continue with Facebook'`                                      |
| logout  | `'Logout'`                                                      |
| working | `'Please wait...'`                                              |
| logo    | [Iconmonstr Facebook 6](https://iconmonstr.com/facebook-6-svg/) | See [Iconmonstr](https://iconmonstr.com/?s=facebook) for more options. |
| before  | `NONE`                                                          | Before all nested elements.                                            |
| after   | `NONE`                                                          | After all nested elements.                                             |
| error   | `'⛔ Error'`                                                    | Shown on error (e.g., SDK load failure).                               |

</div>

## [Events](#events)

<div class="table table-cols-4">

| Name     | Payload            | Description                                                                               | Note      |
| -------- | ------------------ | ----------------------------------------------------------------------------------------- | --------- |
| sdk-init | (sdk[Object])      | Returns an object with <br> Facebook SDK instance and [`scope`](#-sdk-init-event) object. | [ &ast; ] |
| login    | (response[Object]) | User logged in.                                                                           | [ &ast; ] |
| logout   | (response[Object]) | User logged out.                                                                          | [ &ast; ] |
| click    | [Void]             | &nbsp;                                                                                    | [ &ast; ] |

</div>

[ &ast; ] - Scope component event.

### [Sdk-Init Event](#sdk-init-event)

You can use this event to grab the Facebook SDK instance, but **also** the underlying component `scope` object. Using this object, you can control the component empirically, similarly to how you would with `ref`.

> ⚠️ The scope reference is not reactive and you **cannot** relay on it for other than utilizing the scope methods. For reactivity, use the `v-model` directive.

### [Sdk-Init Event Example](#sdk-init-event-example)

```html
<template>
  <div>
    <v-facebook-login v-model="model" @sdk-init="handleSdkInit" />
    <button v-if="scope.logout && model.connected" @click="scope.logout">
      Logout
    </button>
  </div>
</template>

<script>
  export default {
    data: () => ({
      FB: {},
      model: {},
      scope: {}
    }),
    methods: {
      handleSdkInit({ FB, scope }) {
        this.FB = FB
        this.scope = scope
      }
    }
  }
</script>
```

## [Scope Component (Advanced Customization)](#scope-component-advanced-customization)

If props, slots and events do not provide enough customization, you can use an underlying component called `v-fb-login-scope`. This component uses the render prop (known as "scoped-slot" in Vue) approach for composition. This means, it does not render **any** HTML or CSS, but rather expose a scoped-slot with attributes and methods that are committed as API. [Read more](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) about scoped slots.

### Props and Events

Refer to the [tables](#props) above for scope component **specific** props/events.

### [Scoped-Slot Scope (Attributes and Methods)](#scoped-slot-scope-attributes-and-methods)

<div class="table table-cols-3">

| Name         | Type     | Description                                |
| ------------ | -------- | ------------------------------------------ |
| login        | Function | Call SDK login method.                     |
| logout       | Function | Call SDK logout method.                    |
| toggleLogin  | Function | Toggle SDK login/logout methods.           |
| working      | Boolean  | Asynchronous operation is taking place.    |
| idle         | Boolean  | No asynchronous operation is taking place. |
| connected    | Boolean  | User is logged in.                         |
| disconnected | Boolean  | User is logged out.                        |
| enabled      | Boolean  | Button is enabled.                         |
| disabled     | Boolean  | Button is disabled.                        |

</div>

### [Scope Component Example](#scope-component-example)

The following snippet is a minimal usage example, see [source](https://github.com/adi518/vue-facebook-login-component/blob/master/packages/vue-facebook-login-component/src/components/Composed.vue) for a real-world example.

```html
<template>
  <v-facebook-login-scope>
    <!-- Compose HTML/CSS here, otherwise nothing will be rendered -->
    <button slot-scope="scope">
      <!-- Compose with `scope` here -->
    </button>
  </v-facebook-login-scope>
</template>

<script>
  import { VFBLoginScope as VFacebookLoginScope } from 'vue-facebook-login-component'

  export default {
    components: {
      VFacebookLoginScope
    }
  }
</script>
```

## [Loading Facebook SDK](#loading-facebook-sdk)

This component embeds the [Facebook SDK snippet](https://developers.facebook.com/docs/javascript/quickstart/) unless it find an existing SDK instance. However, be sure to resolve `window.fbAsyncInit` **before** a component instance is created, otherwise a racing condition will occur and it may not be able to find the SDK instance. See [Facebook docs](https://developers.facebook.com/docs/javascript/quickstart/) for more.

## [Legacy Browser Support](#ie-support)

> ❤️ You probably don't need to apply transformations or polyfills to support IE.

The current build statistically targets legacy browsers like IE 11 and applies transforms and polyfills adaptively. However, it is bound to change in the future as statistics change. In such case, you'll need to add [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill) to your dependencies (notice the deprecated way to do it and the newly recommended one). Additionally, you'll have to add this component to your transpiled dependencies (e.g., using `transpileDependencies` option in [`vue.config.js`](https://cli.vuejs.org/config/#transpiledependencies)).

> ⚠️ Notice the difference between a transform and a polyfill. Future syntax has to be transformed, while new language API requires a polyfill.

### Version 1.x

> ⚠️ TL;DR: Upgrade to `2.x` to support legacy browsers. Versions `<=1.3.6` should work in legacy browsers without issues. Versions `1.3.7-1.5.0` require `@babel/polyfill` if your app doesn't already include it. Versions `1.5.1` to `1.6.0` have a maltransformed and unpolyfilled build that will not work with legacy browsers unless you add it to your transpiled dependencies and import `@babel/polyfill`. To fix that please upgrade to `2.x` (recommended) or downgrade to `<= 1.5.0`.

## [Development](#development)

Fork, clone and use the following scripts.

### Component

```console
yarn start
```

### Documentation

```console
yarn start:docs
```

## Support

Please search existing issues (including closed ones) before starting a new [issue](https://github.com/adi518/vue-facebook-login-component/issues). 🙌

## [Related Links](#related-links)

- Facebook API [documentation](https://developers.facebook.com/docs/reference/javascript/FB.login/v6.0).
- Facebook user experience [guideline](https://developers.facebook.com/docs/facebook-login/userexperience/#buttondesign).
- Facebook fonts and colors, article by [Sitepoint](https://www.sitepoint.com/fonts-colors-used-facebook-twitter-google/).

## License

Copyright (c) 2020 by [MIT](https://opensource.org/licenses/MIT)
