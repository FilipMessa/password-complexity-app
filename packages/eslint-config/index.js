const OFF = 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-hooks'],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    '@typescript-eslint/explicit-function-return-type': OFF,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
