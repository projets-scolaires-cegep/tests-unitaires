module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'eslint:jest/recommended',
  ],
  rules: {
    'no-console': 'OFF',
  },
};
