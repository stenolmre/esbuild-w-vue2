import { build } from 'esbuild'
import vue from 'esbuild-vue'
import eslint from 'esbuild-plugin-eslint'
import { sassPlugin } from 'esbuild-sass-plugin'

build({
  bundle: true,
  minify: true,
  logLevel: 'info',

  entryPoints: ['./src/main.js'],
  entryNames: 'app-[hash]',
  outdir: `${process.env.VUE_APP}`,

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
    eslint({
      throwOnError: true,
      throwOnWarning: true,
    }),
  ],
}).catch(_ => {
  process.exit(1)
})
