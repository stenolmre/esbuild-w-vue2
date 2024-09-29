export default class Flags {
  constructor() {
    this.flags = process.argv.slice(2).reduce((flags, arg) => {
      const [key, value] = arg.split('=')
      flags.set(key, value)
      return flags
    }, new Map())
  }

  get(name, throwable = true) {
    const value = this.flags.get(name)

    if (throwable && !value) {
      console.error('\u2717', `Missing required flag ${name}`)
      process.exit()
    }

    return value
  }
}
