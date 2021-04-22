module.exports = {
  testMatch: ['**/?(*.)(spec).ts'],
  coverageDirectory: './build/reports/coverage',
  coverageReporters: ['html', 'cobertura'],
  collectCoverageFrom: ['!**/*.spec.ts', '!**/*.md', 'src/**/*.ts'],
  rootDir: './',
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  preset: 'ts-jest',
};
