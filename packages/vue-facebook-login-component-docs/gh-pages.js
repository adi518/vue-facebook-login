const path = require('path')
const ghpages = require('gh-pages')

ghpages.publish(path.join(__dirname, 'dist'), function(err) {
  // eslint-disable-next-line no-console
  err && console.error(err)
})
