# Vue Facebook Login

> A renderless Vue.js component for composing Facebook login.

## [Install](#install)

```console
npm install --save vue-facebook-login-component
```

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
- Button component with production-ready CSS (scales well with `rem` and `font-size`)

## [What's New in Version 2.0](#whats-new-in-version-20)

Simpler API, alongside newly added and updated features:

- Improved documentation. 👌
- Added test coverage. 🧪
- Added `idle` field to `scope`.
- Added new prop `logoClass` for manipulating logo style easily.
- Added new prop `useAlternateLogo`, enabling an alternative logo from [Iconmonstr](https://iconmonstr.com/facebook-1-svg/) (this will bring back `v1.x` logo).
- Fixed `disabled` state when `app-id` is not provided.
- Updated all slots to [scoped-slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots).
- Updated error slot to appear on all errors. You can pick up the error object from `scope` and customize further.
- Updated labels to comply better with [Facebook guidelines](https://developers.facebook.com/docs/facebook-login/userexperience/#buttondesign).
- Replaced logo to comply better with [Facebook guidelines](https://developers.facebook.com/docs/facebook-login/userexperience/#buttondesign).
- Replaced `connect` event with `login` event.
- Removed redundant key `hasError` from scope (`error` is sufficient).

## [Props](#props)

<div id="props-table-wrap" class="docs-table-wrap">

| Name               | Type    | Default                | Note                                                                                                                          |
| ------------------ | ------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| value              | Object  | `{ connected: false }` | Used for one-way V-Model. [ &ast;&ast;&ast; ]                                                                                 |
| app-id             | String  | None                   | Required. [ &ast;&ast;&ast; ]                                                                                                 |
| version            | String  | `'v6.0'`               | [ &ast;&ast;, &ast;&ast;&ast; ]                                                                                               |
| options            | Object  | `{}`                   | SDK Options. [ &ast;, &ast;&ast;, &ast;&ast;&ast; ]                                                                           |
| login-options      | Object  | `{ scope: 'email' }`   | [ &ast;, &ast;&ast;, &ast;&ast;&ast; ]                                                                                        |
| button-style       | Object  | `{}`                   | [ &ast; ]                                                                                                                     |
| loader-style       | Object  | `{}`                   | [ &ast; ]                                                                                                                     |
| logo-style         | Object  | `{}`                   | [ &ast; ]                                                                                                                     |
| text-style         | Object  | `{}`                   | [ &ast; ]                                                                                                                     |
| transition         | Array   | `[]`                   | Array of CSS transition values. Example:<br><br>`[ 'background-color 0.15s ease-in-out', 'padding 0.15s ease-in-out', ... ]`. |
| use-alternate-logo | Boolean | `false`                | Use [Iconmonstr alternate Facebook logo](https://iconmonstr.com/facebook-6-svg/).                                             |

</div>

### Notes Asterisks Legend

<div id="notes-table-wrap" class="docs-table-wrap">

| Type   | Description                                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------- |
| \*     | Properties should be camel-case.                                                                         |
| \*\*   | See [Facebook](https://developers.facebook.com/docs/javascript/reference/FB.init/) for available values. |
| \*\*\* | Scope-component property.                                                                                |

</div>

## [Slots](#slots)

<div id="slots-table-wrap" class="docs-table-wrap">

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

<div id="events-table-wrap" class="docs-table-wrap">

| Name     | Payload            | Description                                                                               | Note      |
| -------- | ------------------ | ----------------------------------------------------------------------------------------- | --------- |
| sdk-init | (sdk[Object])      | Returns an object with <br> Facebook SDK instance and [`scope`](#-sdk-init-event) object. | [ &ast; ] |
| login    | (response[Object]) | User logged in.                                                                           | [ &ast; ] |
| logout   | (response[Object]) | User logged out.                                                                          | [ &ast; ] |
| click    | [Void]             | &nbsp;                                                                                    | [ &ast; ] |

</div>

[ &ast; ] - Scope-component event.

### [Sdk-Init Event](#sdk-init-event)

You can use this event to grab the Facebook SDK instance, but **also** the underlying component `scope` object. Using this object, you can control the component empirically, similarly to how you would with `ref`. See example:

```html
<template>
  <div>
    <v-facebook-login @sdk-init="handleSdkInit" />
    <button v-if="facebook.scope.logout" @click="facebook.scope.logout">
      Logout
    </button>
  </div>
</template>

<script>
  export default {
    data: () => ({
      facebook: {
        FB: {},
        scope: {}
      }
    }),
    methods: {
      handleSdkInit({ FB, scope }) {
        this.facebook.scope = scope
        this.facebook.FB = FB
      }
    }
  }
</script>
```

## [Advanced Customization (Scope Component)](#advanced-customization-scope-component)

If props, slots and events do not provide enough customization, you can use an underlying component called `v-fb-login-scope`. This component uses the render prop (known as "scoped-slot" in Vue) approach for composition. This means, it does not render **any** html or css, hence it has no added-value on its own. It only exposes a scoped-slot with attributes and methods that are committed as API. Read more about [scoped slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots).

### Props and Events

Refer to the [tables](#props) above for scope-component **specific** props/events.

### Scoped-Slot Scope (Attributes and Methods)

<div id="scope-table-wrap" class="docs-table-wrap">

| Name         | Type     | Description                                                |
| ------------ | -------- | ---------------------------------------------------------- |
| login        | Function | Login handler.                                             |
| logout       | Function | Logout handler.                                            |
| toggleLogin  | Function | Toggles login/logout.                                      |
| working      | Boolean  | SDK-initialization/login/logout is currently taking place. |
| connected    | Boolean  | User is logged in.                                         |
| disconnected | Boolean  | User is logged out.                                        |
| enabled      | Boolean  | Button is enabled.                                         |
| disabled     | Boolean  | Button is disabled.                                        |

</div>

### Scope Component Example

The following snippet is a minimal usage example, see [source](https://github.com/adi518/vue-facebook-login-component/blob/master/src/components/FBLogin.vue) for a full, real-word example.

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

## Uncaught ReferenceError: regeneratorRuntime is not defined

This package uses `async/await` syntax, which is based on [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators). In short, if you target old browsers (think about that carefully) you'll have to add [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime) to your dependencies. See this [issue](https://github.com/adi518/vue-facebook-login-component/issues/17) for more details.

```console
npm install --save regenerator-runtime
```

Then, import it at the topmost of your `main.js` (or similar entry-point).

```js
import 'regenerator-runtime'

// ...rest of your imports
```

## [IE support](#ie-support)

Add [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill) to your dependencies. Notice the deprecated method and the newly recommended method.

## Development

Fork, clone and use the following scripts.

For component:

```console
yarn start
```

For documentation (includes a demo):

```console
yarn start:docs
```

## Support

Please search existing issues (including closed ones) before starting a new [issue](https://github.com/adi518/vue-facebook-login-component/issues). 🙌

## [Related Links](#related-links)

- You'll probably need to utilize the [Facebook API](https://developers.facebook.com/docs/reference/javascript/FB.login/v6.0).
- Fonts and colors used by Facebook, article by [Sitepoint](https://www.sitepoint.com/fonts-colors-used-facebook-twitter-google/).
- Facebook provides a neat [guideline](https://developers.facebook.com/docs/facebook-login/userexperience/#buttondesign) for best user experience.

## License

Copyright (c) 2020 by [MIT](https://opensource.org/licenses/MIT)
