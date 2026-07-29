const {defineConfig} = require('jest');

module.exports = defineConfig({
  preset: 'ts-jest',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testEnvironment: "node",
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testMatch: [
    "**/__tests__/**/*.test.ts"
  ]
});
