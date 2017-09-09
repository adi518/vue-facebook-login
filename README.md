[![npm](https://img.shields.io/npm/dm/facebook-login-vuejs.svg)](https://www.npmjs.com/package/facebook-login-vuejs)

Description
======
Vue Component that  lets you drop it into your existing project and get the benefits of Facebook Login quickly.

Example
======
source code of the example can be found in [example](https://github.com/iliran11/facebook-login-vue/tree/master/example) folder.
the actual component is just the button (:
![app preview](http://i.imgur.com/YhzfUkI.gif "")



Installation
======

```
npm i facebook-login-vuejs
```

Example Usage
======

**my-component.vue**

```javascript
import facebookLogin from 'facebook-login-vuejs';

Vue.component('my-component', {
    components: {
        facebookLogin
    }
});
```

```xml
    <facebook-login class="button"
      appId="326022817735322"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData">
    </facebook-login>
```

Props
======


| Props 	| Type 	| Default 	| Notes 	|
|---------------	|----------	|---------------------------------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| appId 	| string 	| None.It is a required prop. 	|  	|
| version 	| string 	| 'v2.9' 	| refer to [Facebook Docs](https://developers.facebook.com/docs/apps/changelog/) for explanation on available values 	|
| loginLabel 	| string 	| Log In To Facebook 	|  	|
| loginOptions 	| object 	| {scope: 'email'} 	| all options listed on [Facebook Docs](https://developers.facebook.com/docs/reference/javascript/FB.login/v2.9) are passable with camelCase. e.g : {returnScopes: false} 	|
| logoutLabel 	| string 	| Log out from Facebook 	|   	|

Events
======

| Event              | Output | Description                                                 |
|--------------------|--------|-------------------------------------------------------------|
| get-initial-status | Object | TO BE DEPRECATED. Initial Check to decide weather the user already connected. |
| sdkLoaded | Object | returns an object with the following keys: <br> <b>isConnected</b>: Boolean. is the User conneted? <br> <b>FB:</b> the api object. |
| click              |        | The Component has been clicked.                             |
| login              | Object | User tried to login                                         |
| logout             | Object | User tried to logout                                        |


Development
======

- running the example on dev server `npm start`. this will run the example app.

Tests
======

tests will be added hopefully soon.

Contribute
======
I welcome any kind of contributions/requests/questions/general feedback.
possible methods to contact me:

1. [open an Issue](https://github.com/iliran11/facebook-login-vue/issues)
2. send me a mail: iliran11@gmail.com
3. [contact me on facebook](https://www.facebook.com/Liran.Co.1984)
