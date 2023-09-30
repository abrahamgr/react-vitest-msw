module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'quotes': [ 'error', 'single' ],
    'eol-last': [ 'error', 'always' ],
    'no-trailing-spaces': [ 'error', { 'skipBlankLines': true }],
    'comma-dangle': ['error', { 'objects': 'always-multiline' }],
    'indent': [ 'error',  2 ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'arrow-spacing': 'error',
    'key-spacing': ['error', { 'beforeColon': false }],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        'allowSingleExtends': true,
      }
    ],
  },
  ignorePatterns: [
    '**/dist',
    '**/build-api'
  ],
}
