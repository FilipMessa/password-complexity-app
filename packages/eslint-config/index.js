/* eslint-disable @typescript-eslint/no-unused-vars */
const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': OFF,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
