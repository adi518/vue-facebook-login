var ghpages = require('gh-pages')

ghpages.publish('../dist', function (err) { err && console.error(err) })
