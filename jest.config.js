const config = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': ['@swc/jest'],
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  testMatch: ['**/*.spec.ts'],
  rootDir: '.',
  coverageReporters: ['json', 'html'],
};

module.exports = config;
