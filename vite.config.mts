import { defineConfig, PluginOption } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { dependencies, peerDependencies } from './package.json';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => {
    const plugins: PluginOption = [
        checker({ typescript: true }),
        react(),
        dts({
            tsconfigPath: 'tsconfig.app.json',
            include: ['src'],
        }),
        tailwindcss(),
    ];

    if (command === 'build') {
        plugins.push(
            viteStaticCopy({
                targets: [
                    {
                        src: './src/assets/css/_tokens-dark.css',
                        dest: './',
                    },
                    {
                        src: './src/assets/css/_tokens-light.css',
                        dest: './',
                    },
                    {
                        src: './src/assets/css/_tokens-default.css',
                        dest: './',
                    },
                    {
                        src: './src/assets/css/theme.css',
                        dest: './',
                    },
                ],
            })
        );
    }

    return {
        plugins,
        build: {
            sourcemap: true,
            lib: {
                entry: path.resolve(__dirname, 'index.ts'),
                fileName: `index`,
                formats: ['es'],
            },
            rollupOptions: {
                external: Object.keys({ ...peerDependencies, ...dependencies }),
            },
        },
    };
});
