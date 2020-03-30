module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: require('./package.json').dependencies.react,
    },
  },
  rules: {
    'no-var': 'error',
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': ['warn'],
    'no-multiple-empty-lines': ['error',
      { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }
    ],
    'max-len': ["error", { "code": 80, "tabWidth": 2, "ignoreTemplateLiterals": true  }],
    'semi': ["error", "always"],
    "indent": ["error", 2],
    'quotes': ["error", "single",  { "allowTemplateLiterals": true }],
    "padded-blocks": ["error",  {"classes": "always"}],
    "no-unused-vars": ["error", { "vars": "local", "args": "after-used", "caughtErrors": "all" }]
  },
};
