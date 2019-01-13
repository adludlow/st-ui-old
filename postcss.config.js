module.exports = {
  plugins: {
    'postcss-import': true, /* must be first */
    'postcss-custom-media': true,
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-properties': true
      }
    }
  }
}
