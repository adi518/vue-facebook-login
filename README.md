Prologue
======
Re-write to VueJs Component. Based [on my same component](https://www.npmjs.com/package/facebook-login-redux-react) that was written in react.


Contribute
======
I welcome any kind of contributions/requests/questions/general feedback.
possible methods to contact me:

1. [open an Issue](https://github.com/iliran11/facebook-login-vue/issues)
2. send me a mail: iliran11@gmail.com
3. [contact me on facebook](https://www.facebook.com/Liran.Co.1984)

[![npm](https://img.shields.io/npm/dm/facebook-login-redux-react.svg)](https://www.npmjs.com/package/facebook-login-redux-react)


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

Usage
======

**main.js**

```javascript
import facebookLogin from '../../src/index.js'
Vue.use(facebookLogin)
```

**my-component.vue**


```xml
    <facebook-login class="button"
     appId="326022817735322"
     :onLoginEvent="getInitialInformation"
     :onWillMount="getInitialInformation"
     :onLogoutEvent="onLogout">
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
| verbose 	| boolean 	| false 	|  	|
| onWillMount 	| function 	|  	|  	|
| onClick 	| function 	|  	| will execute before the onLoginEvent/onLogoutEvent. useful for triggering the fetching event for redux store. 	|
| onLoginEvent 	| function 	|  	|  	|
| onLogoutEvent 	| function 	|  	|  	|

Development
======

- running the example on dev server `npm start`. this will run the example app, which is configured for redux,

Tests
======

tests will be added hopefully soon.
