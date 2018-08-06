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
<v-facebook-login app-id="326022817735322" @sdk-load="handleSdkLoad"></v-facebook-login>

<!-- OR use the shorthand variation -->
<v-facebook-login app-id="326022817735322" @sdk-load="handleSdkLoad" />
```

## Props
<div id="props-table-wrap" class="docs-table-wrap">

| Name          | Type   | Default  | Note |
|---------------|--------|----------|------|
| app-id        | String | None     | **Required**
| version 	    | String | `'v3.1'` | See [Facebook Docs](https://developers.facebook.com/docs/apps/changelog/) for available values.
| login-options | Object | `{ scope: 'email' }` | See [Facebook Docs](https://developers.facebook.com/docs/reference/javascript/FB.login/v2.9) for available values. Pass with Camel-case: <br> `{ returnScopes: false }`
| button-style  | Object | None
| loader-style  | Object | None
| token-style   | Object | None
| slot-style    | Object | None

</div>

## Slots
<div id="slots-table-wrap" class="docs-table-wrap">

| Name    | Default |
|---------|---------|
| login   | Log in to Facebook
| logout  | Log out from Facebook
| loading | Please wait...

</div>

## Events
<div id="events-table-wrap" class="docs-table-wrap">

| Name               | Payload | Description                                          | Note |
|--------------------|---------|------------------------------------------------------|------|
| sdk-load           | Object  | Returns an object with <br> a Facebook API instance. | @Returns <br> `FB[Object]`
| connect            | Boolean | User is connected.
| login              | Object  | User attempted login.                                | @Returns <br> `response[Object]`
| logout             | Object  | User attempted logout.                               | @Returns <br> `response[Object]`
| click              | None

</div>

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
Please open an [issue](https://github.com/iliran11/facebook-login-vue/issues) for support.

## License
Copyright (c) 2018 by [MIT](https://opensource.org/licenses/MIT)