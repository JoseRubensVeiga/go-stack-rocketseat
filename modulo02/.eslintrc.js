module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": 0,
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    "arrow-body-style": 0,
    "object-curly-spacing": "never",
    "object-curly-newline": ["error", {"multiline": true}],
  },
};
