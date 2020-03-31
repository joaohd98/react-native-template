module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
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
  extends: ['plugin:react/recommended', "plugin:@typescript-eslint/recommended",],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'no-var': 'error',
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': ['error'],
    'no-multiple-empty-lines': ['error',
      { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }
    ],
    "no-unused-vars": ["error", { "vars": "local", "args": "after-used", "caughtErrors": "all" }],
    "@typescript-eslint/explicit-function-return-type": "off"
  },
};
