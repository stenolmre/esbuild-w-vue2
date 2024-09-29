import { build, context } from 'esbuild'
import { minifyTemplates, writeFiles } from 'esbuild-minify-templates'
import { sassPlugin } from 'esbuild-sass-plugin'
import vue from 'esbuild-vue'

import eslintPlugin from './eslint.mjs'
import Flags from './lib/Flags.mjs'

const flags = new Flags()
const name = flags.get('--name')
const version = flags.get('--version')
const outdir = flags.get('--outdir', false) ?? 'build'

const config = {
  bundle: true,
  minify: true,
  logLevel: 'info',

  entryPoints: ['./src/main.js'],
  entryNames: `${name}-${version}`,
  outdir,

  // required by esbuild-minify-templates
  write: false,

  plugins: [
    vue(),
    sassPlugin({
      filter: /\.module\.scss$/,
      type: 'local-css',
    }),
    sassPlugin({
      filter: /\.scss$/,
      type: 'css',
    }),
    eslintPlugin(),
    minifyTemplates(),
    writeFiles(),
  ],
}

if (process.argv.includes('--watch')) {
  context(config).then(ctx => ctx.watch())
} else {
  build(config).catch(() => process.exit())
}
