const isProduction = process.env.NODE_ENV === 'production'
const config = {}

if (isProduction) {
  config.publicPath = './'
}

config.chainWebpack = config => {
  // https://github.com/babel/babel-loader/issues/171#issuecomment-163385201
  config.module
    .rule('js')
    .test(/\.jsx?$/)
    .exclude.add(/node_modules\/(?!vue-facebook-login-component)/)
    .end()
  config.module
    .rule('markdown')
    .test(/\.md$/)
    .use('html-loader')
    .loader('html-loader')
    .end()
  config.module
    .rule('markdown')
    .test(/\.md$/)
    .use('markdown-loader')
    .loader('markdown-loader')
    .end()
  // https://stackoverflow.com/questions/56906896/cannot-use-vue-component-library-with-npm-link
  config.resolve.symlinks(false)
}

module.exports = config
