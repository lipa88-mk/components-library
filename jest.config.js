const path = require('path');

module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    // Interaction tests that drive Headless UI / Floating UI dropdowns through
    // jsdom are slow (5-20s each locally), and shared CI runners are several
    // times slower; the default 5s timeout is far too tight for them.
    testTimeout: 120000,
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/.*\\.visual\\.(spec|test)\\.(ts|tsx)$'],
    transform: {
        // Tests run on Node >= 20 (jsdom); compile to a modern target so async
        // functions etc. are not downleveled to slow regenerator state machines.
        '^.+\\.(j|t)sx?$': ['@swc/jest', { jsc: { target: 'es2022' } }],
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less)$': path.resolve(__dirname, 'jest/__mocks__/styleMock.js'),
    },
    transformIgnorePatterns: ['/node_modules/(?!nanoid)'],
    coveragePathIgnorePatterns: ['dist', 'node_modules', 'test', 'coverage'],
    coverageReporters: ['lcov', ['text', { skipFull: true }], 'cobertura'],
};
