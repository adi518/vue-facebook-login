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
| Name | Type | Default | Notes |
|------|------|---------|-------|
| appId      	 | String | None  | **Required**
| version 	   | String | `'v2.9'` | Refer to [Facebook Docs](https://developers.facebook.com/docs/apps/changelog/) for all available values.
| loginOptions | Object | `{ scope: 'email' }` | Refer to [Facebook Docs](https://developers.facebook.com/docs/reference/javascript/FB.login/v2.9) for all available values. <br><br> Pass with camel-case, like so: <br> `{ returnScopes: false }`

## Slots

## Events
| Name               | Output | Description                                                 | Note |
|--------------------|--------|-------------------------------------------------------------||
| get-initial-status | Object | Returns whether the user is already connected. | **TO BE DEPRECATED**
| sdkLoaded          | Object | Returns an object with a Facebook API instance. |  Returned keys: <br> `- FB[Object]` <br> `- isConnected[Boolean]`
| click              | Event  | Component was clicked.                                      ||
| login              | Object | User attempted login.                                       ||
| logout             | Object | User attempted logout.                                      ||

## Development
Feel free to contribute. To do that, fork, clone and use the following scripts.

For component development:
```bash
npm start
```
For documentation:
```bash
npm run docs
```

## Support
Please open an [issue](https://github.com/adi518/vue-stepper-component/issues) for support.

## License
Copyright (c) 2018 by [MIT](https://opensource.org/licenses/MIT)