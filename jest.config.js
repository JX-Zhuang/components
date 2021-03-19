// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['/src/**/*.{ts,tsx,js,jsx}'],
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.storybook/',
    '/pulic/',
    '/stories/'
  ],
  rootDir: './src',
  roots: ['<rootDir>'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.storybook/',
    '/pulic/',
    '/stories/'
  ],
  setupFilesAfterEnv: ['../setupTests.js']
};
