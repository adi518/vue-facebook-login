const path = require('path')
const nodeExternals = require('webpack-node-externals')
const findWorkspaceRoot = require('find-yarn-workspace-root')

const resolveWorkspacePath = (relativePath = '') =>
  path.join(
    findWorkspaceRoot(process.cwd()) || '',
    'node_modules',
    relativePath
  )

const resolveExternals = ({ relativePath, ...nodeExternalsOptions } = {}) => [
  nodeExternals({
    ...nodeExternalsOptions,
    additionalModuleDirs: [resolveWorkspacePath(relativePath)],
  }),
]

module.exports = { resolveExternals, resolveWorkspacePath }
