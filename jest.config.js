/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset:'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  moduleDirectories: [".", "node_modules"],
  transform: {
      "^.+\\.tsx?$": "ts-jest"
  },
  globals: {
      "ts-jest": {
        tsconfig: "./tsconfig.jest.json"
      }
  },
  testPathIgnorePatterns: [
      "./.next/",
      "./node_modules/"
    ],
  moduleFileExtensions: ['ts', 'tsx', 'js','jsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};