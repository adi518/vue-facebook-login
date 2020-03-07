const pkg = require('./package.json')
const { exec } = require('child_process')

exec(`git add package.json package-lock.json && git commit -m "Docs ${pkg.version}" && git push`)
