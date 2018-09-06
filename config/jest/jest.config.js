module.exports = {
  rootDir: '../../',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/config/'
  ],
  setupFiles: ['<rootDir>/config/jest/jest.setup.js']
}
