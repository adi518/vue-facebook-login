# Documentation (Version 2.x)
You are strongly advised to update to major version 3 for a long list of fixes and added features. However, if you must consume version 2, here's the documentation for that.

## Install
```bash
npm install --save facebook-login-vuejs@2.x
```

## Usage
To use the component in your template, simply import and register with your component.

### Script
```js
import VFBLogin from 'facebook-login-vuejs'

export default {
  components: {
    VFBLogin
  }
}
```

### Template
```html
<v-facebook-login app-id="966242223397117"></v-facebook-login>
```

## Props
<div id="props-table-wrap" class="docs-table-wrap">

| Name          | Type   | Default                   | Note |
|---------------|--------|---------------------------|------|
| app-id        | String | None                      | **Required prop**.
| version 	    | String | `'v2.1'`                  | See [Facebook Docs](https://developers.facebook.com/docs/apps/changelog/) for available values.
| login-options | Object | `{ scope: 'email' }`      | See [Facebook Docs](https://developers.facebook.com/docs/reference/javascript/FB.login/v2.9) for available values.<br><br>**Properties should be camel-case**.
| login-label   | String | `'Log in from Facebook'`  |
| logout-label  | String | `'Log out from Facebook'` |

</div>

## Events
<div id="events-table-wrap" class="docs-table-wrap">

| Name               | Payload            | Description                                          | Note |
|--------------------|--------------------|------------------------------------------------------|------|
| sdk-load           | (sdk[Object])      | Returns an object with <br> a Facebook API instance. | 
| get-initial-status | (response[Object]) | Returns an object with <br> a Facebook API instance. | Deprecated in version 3.
| login              | (response[Object]) | User attempted login.                                | 
| logout             | (response[Object]) | User attempted logout.                               | 
| click              | None               | &nbsp;                                               | 

</div>