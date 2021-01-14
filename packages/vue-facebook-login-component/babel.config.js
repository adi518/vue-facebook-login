module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: false,
        exclude: [
          process.env.NODE_ENV === 'production' ? 'transform-regenerator' : null
        ].filter(v => v)
      }
    ]
  ]
}
