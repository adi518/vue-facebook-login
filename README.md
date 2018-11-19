## Install
```bash
npm install --save vue-facebook-login-component
```

## Usage
To use the component in your template, simply import and register with your component.

### Script
```js
import VFacebookLogin from 'vue-facebook-login-component'

// OR, use cherry-pick export (better consistency)
import { VFBLogin as VFacebookLogin } from 'vue-facebook-login-component'

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

| Name          | Type   | Default                | Note |
|---------------|--------|------------------------|------|
| value         | Object | `{ connected: false }` | Used for one-way V-Model. [ &ast;&ast;&ast; ]
| app-id        | String | None                   | Required. [ &ast;&ast;&ast; ]
| version 	    | String | `'v3.1'`               | [ &ast;&ast;, &ast;&ast;&ast; ]
| options       | Object | `{}`                   | [ &ast;, &ast;&ast;, &ast;&ast;&ast; ]
| login-options | Object | `{ scope: 'email' }`   | [ &ast;, &ast;&ast;, &ast;&ast;&ast; ]
| button-style  | Object | `{}`                   | [ &ast; ]
| loader-style  | Object | `{}`                   | [ &ast; ]
| token-style   | Object | `{}`                   | [ &ast; ]
| text-style    | Object | `{}`                   | [ &ast; ]
| transition    | Array  | `[]`                   | Array of CSS transition values. Example:<br><br>`[ 'background-color 0.15s ease-in-out', 'padding 0.15s ease-in-out', ... ]`.

</div>

[ &ast; ] - Properties should be camel-case.<br>
[ &ast;&ast; ] - See [Facebook](https://developers.facebook.com/docs/javascript/reference/FB.init/) for available values.<br>
[ &ast;&ast;&ast; ] - Scope-component property.

## Slots
<div id="slots-table-wrap" class="docs-table-wrap">

| Name    | Default                    | Description
|---------|----------------------------|------------------------------------------------------|
| login   | `'Sign in with Facebook'`  |
| logout  | `'Sign out with Facebook'` |
| working | `'Please wait...'`         |
| before  | `NONE`                     | Before all nested elements.
| after   | `NONE`                     | After all nested elements.

</div>

## Events
<div id="events-table-wrap" class="docs-table-wrap">

| Name               | Payload            | Description                                          | Note |
|--------------------|--------------------|------------------------------------------------------|------|
| sdk-init           | (sdk[Object])      | Returns an object with <br> a Facebook SDK instance. | [ &ast; ]
| login              | (response[Object]) | User attempted login.                                | [ &ast; ]
| logout             | (response[Object]) | User attempted logout.                               | [ &ast; ]
| connect            | Boolean            | User is connected.                                   | [ &ast; ]
| click              | None               | &nbsp;                                               | [ &ast; ]

</div>

[ &ast; ] - Scope-component event.

## Scope component (Advanced Customization)
If props, slots and events do not satisfy your customization needs, you can use an underlying component called `v-fb-login-scope`. This component uses the render prop (known as "scoped-slot" in Vue) approach for composition. This means, it does not render **any** html or css, hence it has no added-value on its own. It only exposes a scoped-slot with attributes and methods that are committed as API.

### Props/Events
Refer to the [tables](#props-table-wrap) above for scope-component **specific** props/events.

### Scoped-Slot Scope (Attributes and Methods)
<div id="scope-table-wrap" class="docs-table-wrap">

| Name         | Type     | Description                                                |
|--------------|----------|------------------------------------------------------------|
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
    <button slot-scope="scope">
      <!-- Compose HTML/CSS here, otherwise nothing will be rendered! -->
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

## Development
Fork, clone and use the following scripts.

For component:
```bash
npm start
```
For documentation (includes a demo):
```bash
npm run docs
```

## Support
Please open an [issue](https://github.com/adi518/vue-facebook-login-component/issues) for support.

## License
Copyright (c) 2018 by [MIT](https://opensource.org/licenses/MIT)