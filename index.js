(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FBLogin.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FBLogin.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _FBLoginBare = _interopRequireDefault(__webpack_require__(/*! ./FBLogin.Bare.js */ \"./src/components/FBLogin.Bare.js\"));\n\nvar _iconmonstrFacebook = _interopRequireDefault(__webpack_require__(/*! @/assets/images/iconmonstr-facebook-1.svg */ \"./src/assets/images/iconmonstr-facebook-1.svg\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar _default = {\n  name: 'v-facebook-login',\n  components: _defineProperty({}, _FBLoginBare.default.name, _FBLoginBare.default),\n  props: _FBLoginBare.default.props,\n  data: function data() {\n    return {\n      token: _iconmonstrFacebook.default\n    };\n  },\n  computed: {\n    vmodel: {\n      get: function get() {\n        return this.value;\n      },\n      set: function set(value) {\n        this.$emit('input', value);\n      }\n    }\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/components/FBLogin.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FBLogin.vue?vue&type=style&index=0&id=163870a6&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FBLogin.vue?vue&type=style&index=0&id=163870a6&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.v-facebook-login[data-v-163870a6] {\\n  position: relative;\\n  box-sizing: border-box;\\n}\\n.v-facebook-login *[data-v-163870a6],\\n  .v-facebook-login *[data-v-163870a6]::before,\\n  .v-facebook-login *[data-v-163870a6]::after {\\n    box-sizing: inherit;\\n}\\n.v-facebook-login[data-v-163870a6] {\\n  color: #ffffff;\\n  border: 1px solid rgba(255, 255, 255, 0.05);\\n  min-width: 14rem;\\n  padding-top: 0.5rem;\\n  padding-left: 0.5rem;\\n  padding-right: 0.5rem;\\n  padding-bottom: 0.5rem;\\n  margin: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background-image: linear-gradient(#2d417b, #3b55a0);\\n}\\n.spinner[data-v-163870a6] {\\n  display: block;\\n  border-radius: 50%;\\n  border-style: solid;\\n  border-width: 0.25rem;\\n  border-top-color: #8b9dc3;\\n  border-right-color: rgba(255, 255, 255, 0.9);\\n  border-left-color: rgba(255, 255, 255, 0.9);\\n  border-bottom-color: rgba(255, 255, 255, 0.9);\\n  animation: v-facebook-login-spin-data-v-163870a6 2s linear infinite;\\n}\\n.token[data-v-163870a6] {\\n  opacity: 0.9;\\n}\\n.token[data-v-163870a6],\\n.spinner[data-v-163870a6] {\\n  width: 1.5rem;\\n  height: 1.5rem;\\n  margin-right: 0.5rem;\\n}\\n.event-capturer[data-v-163870a6] {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n}\\n@keyframes v-facebook-login-spin-data-v-163870a6 {\\n0% {\\n    transform: rotate(0deg);\\n}\\n100% {\\n    transform: rotate(360deg);\\n}\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/FBLogin.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--2-2!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \" + item[2] + \"{\" + content + \"}\";\n      } else {\n        return content;\n      }\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === \"string\") modules = [[null, modules, \"\"]];\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n      if (typeof id === \"number\") alreadyImportedModules[id] = true;\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      //  when a module is imported multiple times with different media queries.\n      //  I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FBLogin.vue?vue&type=template&id=163870a6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FBLogin.vue?vue&type=template&id=163870a6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-facebook-login-bare\",\n    _vm._g(\n      _vm._b(\n        {\n          scopedSlots: _vm._u([\n            {\n              key: \"default\",\n              fn: function(scope) {\n                return _c(\n                  \"button\",\n                  { staticClass: \"v-facebook-login\" },\n                  [\n                    _c(\"span\", {\n                      staticClass: \"event-capturer\",\n                      on: {\n                        click: function($event) {\n                          scope.handleClick()\n                        }\n                      }\n                    }),\n                    _vm._v(\" \"),\n                    scope.working\n                      ? _c(\"i\", { staticClass: \"spinner\" })\n                      : _vm._e(),\n                    _vm._v(\" \"),\n                    scope.idle\n                      ? _c(\"img\", {\n                          staticClass: \"token\",\n                          attrs: { src: _vm.token }\n                        })\n                      : _vm._e(),\n                    _vm._v(\" \"),\n                    scope.disconnected\n                      ? _vm._t(\"login\", [\n                          _vm._v(\"\\n      Log in to Facebook\\n    \")\n                        ])\n                      : _vm._e(),\n                    _vm._v(\" \"),\n                    scope.connected\n                      ? _vm._t(\"logout\", [\n                          _vm._v(\"\\n      Log out from Facebook\\n    \")\n                        ])\n                      : _vm._e()\n                  ],\n                  2\n                )\n              }\n            }\n          ]),\n          model: {\n            value: _vm.vmodel,\n            callback: function($$v) {\n              _vm.vmodel = $$v\n            },\n            expression: \"vmodel\"\n          }\n        },\n        \"v-facebook-login-bare\",\n        _vm.$props,\n        false\n      ),\n      _vm.$listeners\n    )\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/FBLogin.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FBLogin.vue?vue&type=style&index=0&id=163870a6&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FBLogin.vue?vue&type=style&index=0&id=163870a6&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!../../node_modules/vue-loader/lib??vue-loader-options!./FBLogin.vue?vue&type=style&index=0&id=163870a6&lang=scss&scoped=true& */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FBLogin.vue?vue&type=style&index=0&id=163870a6&lang=scss&scoped=true&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"68ca775e\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/FBLogin.vue?./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--2-2!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addStylesClient; });\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ \"./node_modules/vue-style-loader/lib/listToStyles.js\");\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_listToStyles__WEBPACK_IMPORTED_MODULE_0__);\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\n\n\nvar hasDocument = typeof document !== 'undefined'\n\nif (typeof DEBUG !== 'undefined' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n    'vue-style-loader cannot be used in a non-browser environment. ' +\n    \"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\"\n  ) }\n}\n\n/*\ntype StyleObject = {\n  id: number;\n  parts: Array<StyleObjectPart>\n}\n\ntype StyleObjectPart = {\n  css: string;\n  media: string;\n  sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {/*\n  [id: number]: {\n    id: number,\n    refs: number,\n    parts: Array<(obj?: StyleObjectPart) => void>\n  }\n*/}\n\nvar head = hasDocument && (document.head || document.getElementsByTagName('head')[0])\nvar singletonElement = null\nvar singletonCounter = 0\nvar isProduction = false\nvar noop = function () {}\nvar options = null\nvar ssrIdKey = 'data-vue-ssr-id'\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())\n\nfunction addStylesClient (parentId, list, _isProduction, _options) {\n  isProduction = _isProduction\n\n  options = _options || {}\n\n  var styles = _listToStyles__WEBPACK_IMPORTED_MODULE_0___default()(parentId, list)\n  addStylesToDom(styles)\n\n  return function update (newList) {\n    var mayRemove = []\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i]\n      var domStyle = stylesInDom[item.id]\n      domStyle.refs--\n      mayRemove.push(domStyle)\n    }\n    if (newList) {\n      styles = _listToStyles__WEBPACK_IMPORTED_MODULE_0___default()(parentId, newList)\n      addStylesToDom(styles)\n    } else {\n      styles = []\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i]\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]()\n        }\n        delete stylesInDom[domStyle.id]\n      }\n    }\n  }\n}\n\nfunction addStylesToDom (styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i]\n    var domStyle = stylesInDom[item.id]\n    if (domStyle) {\n      domStyle.refs++\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j])\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]))\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length\n      }\n    } else {\n      var parts = []\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]))\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }\n    }\n  }\n}\n\nfunction createStyleElement () {\n  var styleElement = document.createElement('style')\n  styleElement.type = 'text/css'\n  head.appendChild(styleElement)\n  return styleElement\n}\n\nfunction addStyle (obj /* StyleObjectPart */) {\n  var update, remove\n  var styleElement = document.querySelector('style[' + ssrIdKey + '~=\"' + obj.id + '\"]')\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can't handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++\n    styleElement = singletonElement || (singletonElement = createStyleElement())\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement()\n    update = applyToTag.bind(null, styleElement)\n    remove = function () {\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  update(obj)\n\n  return function updateStyle (newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (newObj.css === obj.css &&\n          newObj.media === obj.media &&\n          newObj.sourceMap === obj.sourceMap) {\n        return\n      }\n      update(obj = newObj)\n    } else {\n      remove()\n    }\n  }\n}\n\nvar replaceText = (function () {\n  var textStore = []\n\n  return function (index, replacement) {\n    textStore[index] = replacement\n    return textStore.filter(Boolean).join('\\n')\n  }\n})()\n\nfunction applyToSingletonTag (styleElement, index, remove, obj) {\n  var css = remove ? '' : obj.css\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css)\n  } else {\n    var cssNode = document.createTextNode(css)\n    var childNodes = styleElement.childNodes\n    if (childNodes[index]) styleElement.removeChild(childNodes[index])\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index])\n    } else {\n      styleElement.appendChild(cssNode)\n    }\n  }\n}\n\nfunction applyToTag (styleElement, obj) {\n  var css = obj.css\n  var media = obj.media\n  var sourceMap = obj.sourceMap\n\n  if (media) {\n    styleElement.setAttribute('media', media)\n  }\n  if (options.ssrId) {\n    styleElement.setAttribute(ssrIdKey, obj.id)\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */'\n    // http://stackoverflow.com/a/26603875\n    css += '\\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild)\n    }\n    styleElement.appendChild(document.createTextNode(css))\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-style-loader/lib/addStylesClient.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = listToStyles;\n\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nfunction listToStyles(parentId, list) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      id: parentId + ':' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\n//# sourceURL=webpack:///./node_modules/vue-style-loader/lib/listToStyles.js?");

/***/ }),

/***/ "./src/assets/images/iconmonstr-facebook-1.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/iconmonstr-facebook-1.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNOSA4aC0zdjRoM3YxMmg1di0xMmgzLjY0MmwuMzU4LTRoLTR2LTEuNjY3YzAtLjk1NS4xOTItMS4zMzMgMS4xMTUtMS4zMzNoMi44ODV2LTVoLTMuODA4Yy0zLjU5NiAwLTUuMTkyIDEuNTgzLTUuMTkyIDQuNjE1djMuMzg1eiIvPjwvc3ZnPg==\"\n\n//# sourceURL=webpack:///./src/assets/images/iconmonstr-facebook-1.svg?");

/***/ }),

/***/ "./src/components/FBLogin.Bare.js":
/*!****************************************!*\
  !*** ./src/components/FBLogin.Bare.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _helpers = __webpack_require__(/*! @/modules/helpers.js */ \"./src/modules/helpers.js\");\n\nvar _default2 = {\n  name: 'v-facebook-login-bare',\n  props: {\n    value: {\n      type: Object,\n      default: function _default() {\n        return {\n          connected: false\n        };\n      }\n    },\n    appId: {\n      type: String,\n      required: true\n    },\n    version: {\n      type: String,\n      default: 'v2.10'\n    },\n    loginOptions: {\n      type: Object,\n      default: function _default() {\n        return {\n          scope: 'email'\n        };\n      }\n    }\n  },\n  data: function data() {\n    return {\n      isWorking: false,\n      isConnected: false\n    };\n  },\n  watch: {\n    isConnected: function isConnected(connected) {\n      this.$emit('input', {\n        connected: connected\n      });\n    }\n  },\n  created: function created() {\n    var _this = this;\n\n    this.isWorking = true;\n    (0, _helpers.loadFbSdk)(this.appId, this.version).then(_helpers.getFbLoginStatus).then(function (response) {\n      if (response.status === 'connected') {\n        _this.isConnected = true;\n      }\n\n      _this.isWorking = false;\n\n      _this.$emit('get-initial-status', response); // will be deprecated next major release\n\n\n      _this.$emit('sdk-loaded', {\n        isConnected: _this.isConnected,\n        FB: window.FB\n      });\n    });\n  },\n  mounted: function mounted() {\n    if (this.$scopedSlots.default) {// OK\n    } else {\n      console.error(\"[V-Facebook-Login error]: Slot must be scoped.\");\n    }\n  },\n  computed: {\n    isIdle: function isIdle() {\n      return this.isWorking === false;\n    },\n    isDisconnected: function isDisconnected() {\n      return this.isConnected === false;\n    },\n    scope: function scope() {\n      return {\n        login: this.login,\n        logout: this.logout,\n        idle: this.isIdle,\n        working: this.isWorking,\n        connected: this.isConnected,\n        handleClick: this.handleClick,\n        disconnected: this.isDisconnected\n      };\n    }\n  },\n  methods: {\n    handleClick: function handleClick() {\n      this.$emit('click');\n\n      if (this.isConnected) {\n        this.logout();\n      } else {\n        this.login();\n      }\n    },\n    login: function login() {\n      var _this2 = this;\n\n      this.isWorking = true;\n      (0, _helpers.fbLogin)(this.loginOptions).then(function (response) {\n        if (response.status === 'connected') {\n          _this2.isConnected = true;\n        } else {\n          _this2.isConnected = false;\n        }\n\n        _this2.isWorking = false;\n\n        _this2.$emit('login', {\n          response: response,\n          FB: window.FB\n        });\n      });\n    },\n    logout: function logout() {\n      var _this3 = this;\n\n      this.isWorking = true;\n      (0, _helpers.fbLogout)().then(function (response) {\n        _this3.isWorking = false;\n        _this3.isConnected = false;\n\n        _this3.$emit('logout', response);\n      });\n    }\n  },\n  render: function render() {\n    if (this.$scopedSlots.default) {\n      return this.$scopedSlots.default(this.scope);\n    }\n  }\n};\nexports.default = _default2;\n\n//# sourceURL=webpack:///./src/components/FBLogin.Bare.js?");

/***/ }),

/***/ "./src/components/FBLogin.vue":
/*!************************************!*\
  !*** ./src/components/FBLogin.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FBLogin_vue_vue_type_template_id_163870a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FBLogin.vue?vue&type=template&id=163870a6&scoped=true& */ \"./src/components/FBLogin.vue?vue&type=template&id=163870a6&scoped=true&\");\n/* harmony import */ var _FBLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FBLogin.vue?vue&type=script&lang=js& */ \"./src/components/FBLogin.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FBLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FBLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _FBLogin_vue_vue_type_style_index_0_id_163870a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FBLogin.vue?vue&type=style&index=0&id=163870a6&lang=scss&scoped=true& */ \"./src/components/FBLogin.vue?vue&type=style&index=0&id=163870a6&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _FBLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _FBLogin_vue_vue_type_template_id_163870a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _FBLogin_vue_vue_type_template_id_163870a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"163870a6\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src\\\\components\\\\FBLogin.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/FBLogin.vue?");

/***/ }),

/***/ "./src/components/FBLogin.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/FBLogin.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./FBLogin.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FBLogin.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/FBLogin.vue?");

/***/ }),

/***/ "./src/components/FBLogin.vue?vue&type=style&index=0&id=163870a6&lang=scss&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/FBLogin.vue?vue&type=style&index=0&id=163870a6&lang=scss&scoped=true& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_style_index_0_id_163870a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!../../node_modules/vue-loader/lib??vue-loader-options!./FBLogin.vue?vue&type=style&index=0&id=163870a6&lang=scss&scoped=true& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FBLogin.vue?vue&type=style&index=0&id=163870a6&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_style_index_0_id_163870a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_style_index_0_id_163870a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_style_index_0_id_163870a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_style_index_0_id_163870a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_style_index_0_id_163870a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/FBLogin.vue?");

/***/ }),

/***/ "./src/components/FBLogin.vue?vue&type=template&id=163870a6&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/components/FBLogin.vue?vue&type=template&id=163870a6&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_template_id_163870a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./FBLogin.vue?vue&type=template&id=163870a6&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FBLogin.vue?vue&type=template&id=163870a6&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_template_id_163870a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FBLogin_vue_vue_type_template_id_163870a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/FBLogin.vue?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"FBLogin\", {\n  enumerable: true,\n  get: function get() {\n    return _FBLogin.default;\n  }\n});\nObject.defineProperty(exports, \"FBLoginBare\", {\n  enumerable: true,\n  get: function get() {\n    return _FBLoginBare.default;\n  }\n});\nexports.Install = exports.default = void 0;\n\nvar _FBLogin = _interopRequireDefault(__webpack_require__(/*! @/components/FBLogin.vue */ \"./src/components/FBLogin.vue\"));\n\nvar _FBLoginBare = _interopRequireDefault(__webpack_require__(/*! @/components/FBLogin.Bare.js */ \"./src/components/FBLogin.Bare.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = _FBLogin.default;\nexports.default = _default;\nvar Install = {\n  install: function install(Vue, config) {\n    Vue.component(_FBLogin.default.name, _FBLogin.default);\n    Vue.component(_FBLoginBare.default.name, _FBLoginBare.default);\n  }\n};\nexports.Install = Install;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loadFbSdk = loadFbSdk;\nexports.fbLogin = fbLogin;\nexports.getFbLoginStatus = getFbLoginStatus;\nexports.fbLogout = fbLogout;\n\n/* global window, document, FB */\nfunction loadFbSdk(appId, version) {\n  return new Promise(function (resolve) {\n    window.fbAsyncInit = function () {\n      // eslint-disable-line func-names\n      FB.init({\n        appId: appId,\n        xfbml: false,\n        version: version,\n        cookie: true\n      });\n      FB.AppEvents.logPageView();\n      resolve('SDK Loaded!');\n    };\n\n    (function (d, s, id) {\n      // eslint-disable-line func-names\n      var fjs = d.getElementsByTagName(s)[0];\n\n      if (d.getElementById(id)) {\n        return;\n      }\n\n      var js = d.createElement(s);\n      js.id = id;\n      js.src = '//connect.facebook.net/en_US/sdk.js';\n      fjs.parentNode.insertBefore(js, fjs);\n    })(document, 'script', 'facebook-jssdk');\n  });\n}\n\nfunction fbLogin(options) {\n  return new Promise(function (resolve) {\n    window.FB.login(function (response) {\n      return resolve(response);\n    }, options);\n  });\n}\n\nfunction getFbLoginStatus() {\n  return new Promise(function (resolve) {\n    window.FB.getLoginStatus(function (responseStatus) {\n      resolve(responseStatus);\n    });\n  });\n}\n\nfunction fbLogout() {\n  return new Promise(function (resolve) {\n    window.FB.logout(function (response) {\n      return resolve(response);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/helpers.js?");

/***/ })

/******/ });
});