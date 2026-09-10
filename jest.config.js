const path = require('path');

module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    // Interaction tests that drive Headless UI / Floating UI dropdowns through
    // jsdom are slow; the default 5s timeout is too tight for them.
    testTimeout: 30000,
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/.*\\.visual\\.(spec|test)\\.(ts|tsx)$'],
    transform: {
        '^.+\\.(j|t)sx?$': ['@swc/jest', { jsc: { target: 'es5' } }],
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less)$': path.resolve(__dirname, 'jest/__mocks__/styleMock.js'),
    },
    transformIgnorePatterns: ['/node_modules/(?!nanoid)'],
    coveragePathIgnorePatterns: ['dist', 'node_modules', 'test', 'coverage'],
    coverageReporters: ['lcov', ['text', { skipFull: true }], 'cobertura'],
};
