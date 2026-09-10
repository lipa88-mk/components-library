import type { StorybookConfig } from '@storybook/react-vite';
import { withoutVitePlugins } from '@storybook/builder-vite';

const config: StorybookConfig = {
    async viteFinal(config, { configType }) {
        const { mergeConfig } = await import('vite');

        if (configType === 'PRODUCTION' && config.build) config.build.sourcemap = false;

        config.plugins = await withoutVitePlugins(config.plugins, ['vite:dts']);

        return mergeConfig(config, {
            base: './',
        });
    },

    core: {
        disableTelemetry: true,
    },

    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
    ],

    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,
            // Keep the ArgTypes tables to the component's own props, not inherited DOM props.
            propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
};

export default config;
