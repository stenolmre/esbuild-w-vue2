import { build } from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'
import vue from 'esbuild-vue'

const flags = process.argv.slice(2).reduce((flags, arg) => {
  const [key, value] = arg.split('=')
  flags.set(key, value)
  return flags
}, new Map())

build({
  bundle: true,
  minify: true,
  logLevel: 'info',

  entryPoints: ['./src/main.js'],
  entryNames: `app-${flags.get('--version') ?? '[hash]'}`,
  outdir: flags.get('--outdir') ?? 'build',

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
  ],
}).catch(_ => {
  process.exit(1)
})
