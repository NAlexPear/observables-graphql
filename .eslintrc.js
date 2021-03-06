const { schema } = require('@octokit/graphql-schema')
const { json: schemaJson } = schema

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'lines-between-class-members': ['off'],
    'comma-dangle': ['error', 'always-multiline'],
    'import/order': ['error', { 'newlines-between': 'never' }],
    indent: ['error', 2, { MemberExpression: 1, SwitchCase: 1 }],
    'no-console': 'warn',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    '@typescript-eslint/camelcase': ['warn'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    '@typescript-eslint/indent': ['error', 2, { MemberExpression: 1, SwitchCase: 1 }],
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/no-unused-vars': ['error'],
    'graphql/template-strings': ['error', {
      env: 'literal',
      schemaJson,
    }],
  },
  plugins: ['graphql', 'import', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  globals: {
    global: true,
    localStorage: true,
    process: true,
    Promise: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.graphql', '.ts'],
      },
    },
  },
}
