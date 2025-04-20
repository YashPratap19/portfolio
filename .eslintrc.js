module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    // Add any specific rules you want to modify here
  },
  // This is the key setting that prevents warnings from being treated as errors
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
}; 