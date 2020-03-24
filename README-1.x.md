## Install

```console
npm install --save vue-facebook-login-component
```

## Usage

To use the component in your template, simply import and register with your component.

### Script

```js
import VFacebookLogin from 'vue-facebook-login-component'

export default {
  components: {
    VFacebookLogin
  }
}
```

### Template

```html
<v-facebook-login app-id="966242223397117"></v-facebook-login>
```

## Props

<div id="props-table-wrap" class="docs-table-wrap">

| Name               | Type    | Default                | Note                                                                                                                          |
| ------------------ | ------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| value              | Object  | `{ connected: false }` | Used for one-way V-Model. [ &ast;&ast;&ast; ]                                                                                 |
| app-id             | String  | None                   | Required. [ &ast;&ast;&ast; ]                                                                                                 |
| version            | String  | `'v3.1'`               | [ &ast;&ast;, &ast;&ast;&ast; ]                                                                                               |
| options            | Object  | `{}`                   | [ &ast;, &ast;&ast;, &ast;&ast;&ast; ]                                                                                        |
| login-options      | Object  | `{ scope: 'email' }`   | [ &ast;, &ast;&ast;, &ast;&ast;&ast; ]                                                                                        |
| button-style       | Object  | `{}`                   | [ &ast; ]                                                                                                                     |
| loader-style       | Object  | `{}`                   | [ &ast; ]                                                                                                                     |
| token-style        | Object  | `{}`                   | [ &ast; ]                                                                                                                     |
| text-style         | Object  | `{}`                   | [ &ast; ]                                                                                                                     |
| transition         | Array   | `[]`                   | Array of CSS transition values. Example:<br><br>`[ 'background-color 0.15s ease-in-out', 'padding 0.15s ease-in-out', ... ]`. |
| use-alternate-logo | Boolean | `false`                | Use [Iconmonstr alternate Facebook logo](https://iconmonstr.com/facebook-6-svg/).                                             |

</div>

[ &ast; ] - Properties should be camel-case.<br>
[ &ast;&ast; ] - See [Facebook](https://developers.facebook.com/docs/javascript/reference/FB.init/) for available values.<br>
[ &ast;&ast;&ast; ] - Scope-component property.

## Slots

<div id="slots-table-wrap" class="docs-table-wrap">

| Name    | Default                                                         | Description                                                            |
| ------- | --------------------------------------------------------------- | ---------------------------------------------------------------------- |
| login   | `'Sign in with Facebook'`                                       |
| logout  | `'Sign out with Facebook'`                                      |
| working | `'Please wait...'`                                              |
| logo    | [Iconmonstr Facebook 1](https://iconmonstr.com/facebook-1-svg/) | See [Iconmonstr](https://iconmonstr.com/?s=facebook) for more options. |
| before  | `NONE`                                                          | Before all nested elements.                                            |
| after   | `NONE`                                                          | After all nested elements.                                             |
| error   | `'⛔ Network Error'`                                            | Shown on SDK load failure.                                             |

</div>

## Events

<div id="events-table-wrap" class="docs-table-wrap">

| Name     | Payload            | Description                                                                               | Note      |
| -------- | ------------------ | ----------------------------------------------------------------------------------------- | --------- |
| sdk-init | (sdk[Object])      | Returns an object with <br> Facebook SDK instance and [`scope`](#-sdk-init-event) object. | [ &ast; ] |
| login    | (response[Object]) | User attempted login.                                                                     | [ &ast; ] |
| logout   | (response[Object]) | User attempted logout.                                                                    | [ &ast; ] |
| connect  | Boolean            | User is connected.                                                                        | [ &ast; ] |
| click    | None               | &nbsp;                                                                                    | [ &ast; ] |

</div>

[ &ast; ] - Scope-component event.

### ⚠️ [Sdk-Init Event](#sdk-init-event)

You can use this event to grab the Facebook SDK instance, but **also** the underlying component `scope` object. Using this object, you can control the component empirically, similarly to how you would with `ref`. See example:

```html
<template>
  <v-facebook-login @sdk-init="handleSdkInit" />
  <button v-if="facebook.scope.logout" @click="facebook.scope.logout">
    Logout
  </button>
</template>

<script>
  export default = {
    data: () => ({
      facebook: {
        FB: {},
        scope: {},
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

## Scope component (Advanced Customization)

If props, slots and events do not satisfy your customization needs, you can use an underlying component called `v-fb-login-scope`. This component uses the render prop (known as "scoped-slot" in Vue) approach for composition. This means, it does not render **any** html or css, hence it has no added-value on its own. It only exposes a scoped-slot with attributes and methods that are committed as API.

### Props/Events

Refer to the [tables](#props-table-wrap) above for scope-component **specific** props/events.

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

### Scope component example (for a full example see [source](https://github.com/adi518/vue-facebook-login-component/blob/master/src/components/FBLogin.vue)).

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

## Loading Facebook SDK

This component embeds the [Facebook SDK snippet](https://developers.facebook.com/docs/javascript/quickstart/), so you don't have to do it yourself. However, if you want to embed it yourself, you can do so and the component will pick up the SDK instance instead.

## "Uncaught ReferenceError: regeneratorRuntime is not defined"

This package uses `async/await` syntax, which is based on [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators). In short, if you target you'll have to add [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime) to your dependencies. See this [issue](https://github.com/adi518/vue-facebook-login-component/issues/17) for more details.

```console
npm install --save regenerator-runtime
```

Then, import it at the topmost of your `main.js` (or a similar entry-point).

```js
import 'regenerator-runtime/runtime'

// ...rest of your imports
```

## IE support

Add [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill) to your dependencies.

## Development

Fork, clone and use the following scripts.

For component:

```console
npm start
```

For documentation (includes a demo):

```console
npm run docs
```

## Support

Please open an [issue](https://github.com/adi518/vue-facebook-login-component/issues) for support.

## License

Copyright (c) 2018 by [MIT](https://opensource.org/licenses/MIT)
