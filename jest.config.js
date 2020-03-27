module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: [`<rootDir>/loadershim.js`],
};
