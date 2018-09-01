const isProduction = process.env.NODE_ENV === 'production'
const config = {}

if (isProduction) {
  config.baseUrl = './'
}

config.chainWebpack = config => {
  if (isProduction) {
    config.output.publicPath('./')
  }
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
}

module.exports = config
