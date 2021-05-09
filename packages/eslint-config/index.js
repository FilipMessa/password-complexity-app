const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:monorepo/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jest', '@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    'import/no-unresolved': [ERROR, { caseSensitive: true }],
    'jest/no-disabled-tests': WARN,
    'jest/no-focused-tests': ERROR,
    'jest/no-identical-title': ERROR,
    'jest/prefer-to-have-length': WARN,
    'jest/valid-expect': ERROR,
    'react/prop-types': OFF,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
