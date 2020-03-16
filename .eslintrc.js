module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    indent: ['error', 2],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': ['error', { allow: ['info', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
