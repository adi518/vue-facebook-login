var path = require('path')
var ghpages = require('gh-pages')

ghpages.publish(path.join(__dirname, '..', 'dist'), function (err) { err && console.error(err) })
