module.exports = {
  presets: [
    '@vue/app',
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11'
        },
        forceAllTransforms: true
      }
    ]
  ],
  plugins: [
    [
      'prismjs',
      {
        languages: ['javascript', 'css', 'markup'],
        plugins: ['show-language', 'copy-to-clipboard']
      }
    ]
  ]
}
