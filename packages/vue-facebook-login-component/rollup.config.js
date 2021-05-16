import path from 'path'
import { camelCase } from 'lodash'

import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import externals from 'rollup-plugin-node-externals'
import visualizer from 'rollup-plugin-visualizer'
import cleaner from 'rollup-plugin-cleaner'

import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'

import packageJson from './package.json'

export default {
  input: './src/main.js',
  output: [
    {
      format: 'umd',
      exports: 'named',
      name: camelCase(packageJson.name),
      file: packageJson.main,
      sourcemap: true,
      globals: { vue: 'Vue' },
    },
    {
      format: 'esm',
      file: packageJson.module,
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({ targets: ['dist'] }),
    externals(),
    alias({ entries: [{ find: '@', replacement: path.resolve('src') }] }),
    resolve({ extensions: ['.js', '.vue', '.scss'] }),
    // https://github.com/vuejs/rollup-plugin-vue/issues/364#issuecomment-748215652
    vue({ preprocessStyles: true }),
    postcss(),
    terser(),
    visualizer({
      gzipSize: true,
      open: process.env.ANALYZE,
      filename: path.resolve('dist/stats.html'),
    }),
  ],
}
