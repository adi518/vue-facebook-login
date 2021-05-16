const isProduction = process.env.NODE_ENV === 'production'
const config = {
  devServer: {
    host: 'localhost',
    https: true,
  },
}

if (isProduction) {
  config.publicPath = './'
}

config.chainWebpack = config => {
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
