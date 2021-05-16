const { resolveExternals } = require('node-externals')

module.exports = {
  chainWebpack: config => {
    config.externals(resolveExternals())
  },
  css: { extract: false },
  pluginOptions: {
    jestSerializer: {
      removeComments: true,
    },
  },
}
