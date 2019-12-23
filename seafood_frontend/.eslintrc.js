module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "curly": ["error", "all"],
    "max-len": ["error", {"code": 80, "ignoreUrls": true}],
    "no-confusing-arrow": "error",
    "no-tabs": "error",
    "quotes": ["error", ""],
    "space-in-parens": 2,
    "space-before-function-paren": 0,
    "quotes": [2, "single", { "avoidEscape": true }]
    
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
