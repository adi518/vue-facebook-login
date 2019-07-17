const isProduction = process.env.NODE_ENV === 'production'
const config = {}

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
}

module.exports = config
