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
| value         | Object  | `{}`                                                    | Used for one-way V-Model. [ &ast;&ast;&ast; ]                                                                                 |
| app-id        | String  | `NONE`                                                  | Required. [ &ast;&ast;&ast; ]                                                                                                 |
| version       | String  | `'v6.0'`                                                | [ &ast;&ast;, &ast;&ast;&ast; ]                                                                                               |
| options       | Object  | `{ cookie: true, xfbml: true, autoLogAppEvents: true }` | SDK options. [ &ast;, &ast;&ast;, &ast;&ast;&ast; ]                                                                           |
| login-options | Object  | `{ scope: 'email' }`                                    | [ &ast;, &ast;&ast;, &ast;&ast;&ast; ]                                                                                        |
| logo-class    | String  | `NONE`                                                  | [ &ast; ]                                                                                                                     |
| logo-style    | Object  | `{}`                                                    | [ &ast; ]                                                                                                                     |
| text-class    | String  | `NONE`                                                  | [ &ast; ]                                                                                                                     |
| text-style    | Object  | `{}`                                                    | [ &ast; ]                                                                                                                     |
| loader-class  | String  | `NONE`                                                  | [ &ast; ]                                                                                                                     |
| loader-style  | Object  | `{}`                                                    | [ &ast; ]                                                                                                                     |
| transition    | Array   | `[]`                                                    | Array of CSS transition values. Example:<br><br>`[ 'background-color 0.15s ease-in-out', 'padding 0.15s ease-in-out', ... ]`. |
| use-alt-logo  | Boolean | `false`                                                 | Use [Iconmonstr alternate Facebook logo](https://iconmonstr.com/facebook-6-svg/).                                             |

</div>

### Note Asterisks Legend

<div class="table">

| Type   | Description                                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------- |
| \*     | Properties should be camel-case. Example: `login-options` → `loginOptions`.                              |
| \*\*   | See [Facebook](https://developers.facebook.com/docs/javascript/reference/FB.init/) for available values. |
| \*\*\* | Scope component property.                                                                                |

</div>

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
| login        | Function | Login handler.                             |
| logout       | Function | Logout handler.                            |
| toggleLogin  | Function | Toggles login/logout.                      |
| idle         | Boolean  | No asynchronous operation is taking place. |
| working      | Boolean  | Asynchronous operation is taking place.    |
| connected    | Boolean  | User is logged in.                         |
| disconnected | Boolean  | User is logged out.                        |
| enabled      | Boolean  | Button is enabled.                         |
| disabled     | Boolean  | Button is disabled.                        |

</div>

### [Scope Component Example](#scope-component-example)

The following snippet is a minimal usage example, see [source](https://github.com/adi518/vue-facebook-login-component/blob/master/packages/vue-facebook-login-component/src/components/Composed.vue) for a full, real-word example.

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
  import { VFBLoginScope } from 'vue-facebook-login-component'

  export default {
    components: {
      VFBLoginScope
    }
  }
</script>
```

## [Loading Facebook SDK](#loading-facebook-sdk)

This component embeds the [Facebook SDK snippet](https://developers.facebook.com/docs/javascript/quickstart/), so you don't have to do it yourself. However, if you do want to embed it yourself, you can do so and the component will pick up your SDK instance instead.

## ["Uncaught ReferenceError: regeneratorRuntime is not defined"](#uncaught-referenceerror-regeneratorruntime-is-not-defined)

This package uses `async/await` syntax, which is based on [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators). In short, if you target old browsers (think about that carefully) you'll have to add [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime) to your dependencies. See this [issue](https://github.com/adi518/vue-facebook-login-component/issues/17) for more details.

```console
npm install --save regenerator-runtime
```

Then, import it at the topmost of your `main.js` (or a similar entry-point).

```js
import 'regenerator-runtime'

// ...rest of your imports
```

## [IE support](#ie-support)

Add [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill) to your dependencies. Notice the deprecated method and the newly recommended method.

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
