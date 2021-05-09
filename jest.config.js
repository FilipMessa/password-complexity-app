module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  preset: 'ts-jest',
  collectCoverageFrom: ['**/*.(ts|tsx|js")'],
  transform: {
    '\\.jsx?$': 'babel-jest',
    '\\.tsx?$': 'ts-jest',
    '\\.svg?$': 'jest-svg-transformer',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testMatch: ['**/*.test.*'],
  testPathIgnorePatterns: ['__snapshots__'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.base.json',
    },
  },
};
