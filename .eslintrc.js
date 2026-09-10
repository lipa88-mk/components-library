module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: './tsconfig.eslint.json',
            },
            extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
            rules: {
                'no-empty': ['error', { allowEmptyCatch: true }],
                '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '[iI]gnored' }],
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/no-non-null-assertion': 0,
                '@typescript-eslint/consistent-type-imports': 'error',
                camelcase: 1,
                'no-restricted-imports': 'off',
                '@typescript-eslint/no-restricted-imports': [
                    'error',
                    {
                        patterns: ['@jsonforms/react/src*'],
                    },
                ],
            },
        },
    ],
    rules: {
        'no-console': 'error',
    },
    ignorePatterns: [
        '**/dist/**',
        '**/build/**',
        '*.spec.*',
        '*.stories.*',
        'jest*.ts',
        'vite.config.ts',
        '**/test/**',
        '**/__mocks__/**',
        'storybook-static/**',
        'tests/**',
    ],
};
