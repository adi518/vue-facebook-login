const { resolveExternals } = require('node-externals')

module.exports = {
  chainWebpack: config => {
    config.externals(resolveExternals())
  },
  pluginOptions: {
    jestSerializer: {
      removeComments: true,
    },
  },
  css: { extract: false },
}
