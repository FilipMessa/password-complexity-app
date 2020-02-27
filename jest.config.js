module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  roots: ['<rootDir>/packages', '<rootDir>/server'],
  collectCoverageFrom: ['**/*.(ts|tsx|js")'],
  transform: {
    '\\.jsx?$': 'babel-jest',
    '\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.*'],
  testPathIgnorePatterns: ['__snapshots__'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.base.json',
    },
  },
};
