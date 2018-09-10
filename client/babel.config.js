module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    'syntax-dynamic-import',
    'transform-object-rest-spread',
    ['transform-class-properties', { 'spec': true }]
  ]
}
