## Install
```bash
npm install --save facebook-login-vuejs
```

## Usage
To use the component in your template, simply import and register with your component.

### Script
```js
import VFBLogin from 'facebook-login-vuejs'

// OR, use cherry-pick export (better consistency)
import { VFBLogin } from 'facebook-login-vuejs'

export default {
  components: {
    VFBLogin
  }
}
```

### Template
```html
<v-facebook-login app-id="326022817735322" @sdk-loaded="handleSdk"></v-facebook-login>

<!-- OR use the shorthand variation -->
<v-facebook-login app-id="326022817735322" @sdk-loaded="handleSdk" />
```

## Props
<div id="props-table-wrap" class="docs-table-wrap">

| Name | Type | Default | Note |
|------|------|---------|------|
| app-id      	 | String | None  | **Required**
| version 	   | String | `'v2.9'` | Refer to [Facebook Docs](https://developers.facebook.com/docs/apps/changelog/) for all available values.
| login-options | Object | `{ scope: 'email' }` | Refer to [Facebook Docs](https://developers.facebook.com/docs/reference/javascript/FB.login/v2.9) for all available values. <br><br> Pass with camel-case, like so: <br> `{ returnScopes: false }`

</div>

## Slots
<div id="slots-table-wrap" class="docs-table-wrap">

| Name   | Default |
|--------|---------|
| login  | Log in to Facebook |
| logout | Log out from Facebook |

</div>

## Events
<div id="events-table-wrap" class="docs-table-wrap">

| Name               | Payload | Description                                                 | Note |
|--------------------|---------|-------------------------------------------------------------|------|
| get-initial-status | Object  | Returns whether the <br> user is already connected. | **TO BE DEPRECATED**
| sdk-loaded         | Object  | Returns an object with <br> a Facebook API instance. |  Returned keys: <br> `FB[Object]` <br> `isConnected[Boolean]`
| click              | Event   | Component was clicked.                                      ||
| login              | Object  | User attempted login.                                       ||
| logout             | Object  | User attempted logout.                                      ||

</div>

## Development
Fork, clone and use the following scripts.

For component:
```bash
npm start
```
For documentation:
```bash
npm run docs
```

For deploying documentation to github pages:
```bash
npm run deploy
```

## Support
Please open an [issue](https://github.com/iliran11/facebook-login-vue/issues) for support.

## License
Copyright (c) 2018 by [MIT](https://opensource.org/licenses/MIT)