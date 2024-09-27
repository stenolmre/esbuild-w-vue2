module.exports = {
  extends: ['plugin:vue/essential', 'plugin:vue/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    indent: 'off',
    'no-unused-vars': 'error',
    'no-console': 'warn',
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
      },
    ],
    semi: ['error', 'never'],
    'no-trailing-spaces': [2],
    'max-params': [2, 6],
    eqeqeq: ['error', 'smart'],
    'no-irregular-whitespace': 2,
    'max-len': [
      'error',
      {
        code: 520,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
}
