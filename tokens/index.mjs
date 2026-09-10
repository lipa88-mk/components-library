import StyleDictionary from 'style-dictionary';
import path from 'path';
import { promises } from 'fs';
import { fileURLToPath } from 'url';
import { transformCssColor } from './transformCssColor.mjs';
import { transformCssBoxShadow } from './transformCssBoxShadow.mjs';
import { isBaseColor } from './helpers.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prefix = 'sd';

const $themes = JSON.parse(await promises.readFile(path.resolve(__dirname, './data/$themes.json'), 'utf-8'));

const configs = $themes.map(theme => ({
    source: Object.entries(theme.selectedTokenSets)
        .filter(([, val]) => val !== 'disabled')
        .map(([tokenset]) => path.resolve(__dirname, `./data/${tokenset}.json`)),
    preprocessors: ['tokens-studio'],
    hooks: {
        transforms: {
            'css/color': {
                type: 'value',
                transitive: true,
                filter: token => (token.$type ?? token.type) === 'color',
                transform: token => transformCssColor(token, prefix),
            },
            'css/boxShadow': {
                type: 'value',
                transitive: true,
                filter: token => (token.$type ?? token.type) === 'boxShadow',
                transform: token => transformCssBoxShadow(token, prefix),
            },
            'ts/color': {
                type: 'value',
                transitive: true,
                filter: token => (token.$type ?? token.type) === 'color',
                transform: token => transformCssColor(token, prefix),
            },
            'ts/base-color/name': {
                type: 'name',
                filter: isBaseColor,
                transform: token => token.attributes.type,
            },
            'ts/css-vars': {
                type: 'value',
                filter: isBaseColor,
                transform: token => `--${prefix}-${token.path.join('-')}`,
            },
        },
    },
    platforms: {
        css: {
            prefix,
            transforms: ['attribute/cti', 'name/kebab', 'css/color', 'css/boxShadow'],
            buildPath: `${path.resolve(__dirname, '../src/assets/css')}/`,
            files: [
                {
                    destination: `_tokens-${theme.name}.css`,
                    format: 'css/variables',
                    options: {
                        selector:
                            theme.name !== 'default' &&
                            `:root[data-theme="${theme.name}"], :root[data-theme="${theme.name}"] [data-theme-override]`,
                    },
                    filter: token => {
                        if (theme.name === 'default') {
                            return token.attributes.category !== 'base';
                        }

                        const coreCategories = ['base', 'modifier', 'font', 'border-radius', 'shadow'];
                        return !coreCategories.includes(token.attributes.category);
                    },
                },
            ],
        },
        'ts/colors': {
            transformGroup: 'js',
            buildPath: `${path.resolve(__dirname, '../src/theming')}/`,
            transforms: ['name/camel', 'ts/color', 'ts/base-color/name'],
            files: [
                {
                    destination: '_colors.ts',
                    format: 'javascript/es6',
                    filter: isBaseColor,
                },
            ],
        },
        'ts/css-vars': {
            transformGroup: 'js',
            buildPath: `${path.resolve(__dirname, '../src/theming')}/`,
            transforms: ['ts/css-vars', 'name/camel'],
            files: [
                {
                    destination: '_css-vars.ts',
                    format: 'javascript/es6',
                    filter: isBaseColor,
                },
            ],
        },
        'ts/tokens-docs': {
            transformGroup: 'js',
            buildPath: `${path.resolve(__dirname, '../src/theming/docs/Tokens')}/`,
            transforms: ['name/camel', 'ts/color'],
            files: [
                {
                    destination: `_tokens-${theme.name}.ts`,
                    format: 'javascript/es6',
                    filter: token => (token.$type ?? token.type) === 'color',
                },
            ],
        },
    },
}));

async function cleanAndBuild(cfg) {
    const sd = new StyleDictionary(cfg);
    await sd.buildAllPlatforms();
}

await Promise.all(configs.map(cleanAndBuild));
