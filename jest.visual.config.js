module.exports = {
    preset: 'jest-puppeteer',
    setupFiles: ['<rootDir>/jest/visual/helpers.ts'],
    setupFilesAfterEnv: ['<rootDir>/jest/visual/jest.setup.ts'],
    testMatch: ['<rootDir>/src/**/*.visual.{spec,test}.{ts,tsx}'],
    transform: {
        '^.+\\.(j|t)sx?$': ['@swc/jest', { jsc: { target: 'es5' } }],
    },
};
