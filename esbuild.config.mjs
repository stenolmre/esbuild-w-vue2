import { build, context } from 'esbuild'
import { minifyTemplates, writeFiles } from 'esbuild-minify-templates'
import eslint from 'esbuild-plugin-eslint'
import { sassPlugin } from 'esbuild-sass-plugin'
import vue from 'esbuild-vue'

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
    minifyTemplates(),
    writeFiles(),
  ],
}

if (process.argv.includes('--watch')) {
  async function run() {
    await (
      await context({
        ...config,
        plugins: [...config.plugins, eslint()],
      })
    ).watch()
  }

  run()
} else {
  build(config).catch(() => process.exit(1))
}
