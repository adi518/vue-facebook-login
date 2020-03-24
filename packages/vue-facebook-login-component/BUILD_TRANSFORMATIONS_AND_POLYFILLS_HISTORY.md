## Build Transformations and Polyfills History

> Notice `runtime-generator` is included within `babel-polyfill`.

### `<=1.3.6` (Included `babel-polyfill`)

Proprietary Webpack configuration.

- Polyfills [**yes**]
- Transformations [**yes**]

### `1.3.7-1.5.0` (Excluded `babel-polyfill`)

Proprietary Webpack configuration.

- Polyfills [**no**]
- Transformations [**yes**]

### `1.5.1-1.6.0` (Maltransformed and unpolyfilled)

Vue-cli Webpack configuration.

- Polyfills [**no**]
- Transformations [**no**]

### `>=2.0.0` (Adaptive)

Vue-cli Webpack configuration.

- Polyfills [**yes**]
- Transformations [**yes**]

### Related Issues

- https://github.com/adi518/vue-facebook-login-component/issues/12
- https://github.com/adi518/vue-facebook-login-component/issues/17
