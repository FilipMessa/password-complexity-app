module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '\\.jsx?$': 'babel-jest',
    '\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.test.*'],
  testPathIgnorePatterns: ['__snapshots__'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.base.json',
    },
  },
  moduleNameMapper: {
    '@stereobooster/(.*)$': '<rootDir>/packages/$1',
  },
};
