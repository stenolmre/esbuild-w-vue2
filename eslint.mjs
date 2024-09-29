import { ESLint } from 'eslint'

export default ({ filter = /\.(?:jsx?|mjs|cjs)$/, throwOnError, ...eslintOptions } = {}) => ({
  name: 'eslint-plugin',
  setup: ({ onLoad }) => {
    onLoad({ filter }, async ({ path }) => {
      const eslint = new ESLint(eslintOptions)
      const results = await eslint.lintFiles(!path.includes('node_modules') ? [path] : [])
      const formatter = await eslint.loadFormatter()
      const output = await formatter.format(results)

      if (output.length > 0) {
        console.log(output)
      }

      if (process.argv.includes('--watch')) {
        for (const result of results) {
          if (result.errorCount > 0) {
            process.exit()
          }
        }
      }
    })
  },
})
