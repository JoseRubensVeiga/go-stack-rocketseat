module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'eslint-config-prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'eslint-plugin-prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
  },
};
