const { resolveExternals } = require('monorepo-utils')

module.exports = {
  chainWebpack: config => {
    // https://stackoverflow.com/a/45820235/4106263
    config.externals(resolveExternals({ importType: 'umd' }))
  },
  pluginOptions: {
    jestSerializer: {
      removeComments: true,
    },
  },
  css: { extract: false },
}
