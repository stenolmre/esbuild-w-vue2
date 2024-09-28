import { context, build } from 'esbuild'
import { minifyTemplates, writeFiles } from 'esbuild-minify-templates'
import { sassPlugin } from 'esbuild-sass-plugin'
import vue from 'esbuild-vue'

const watch = process.argv.includes('--watch')

const flags = process.argv.slice(2).reduce((flags, arg) => {
  const [key, value] = arg.split('=')
  flags.set(key, value)
  return flags
}, new Map())

const config = {
  bundle: true,
  minify: true,
  logLevel: 'info',

  entryPoints: ['./src/main.js'],
  entryNames: `app-${flags.get('--version') ?? '[hash]'}`,
  outdir: flags.get('--outdir') ?? 'build',

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

if (watch) {
  async function run() {
    await (await context(config)).watch()
  }

  run()
} else {
  build(config).catch(() => process.exit(1))
}
