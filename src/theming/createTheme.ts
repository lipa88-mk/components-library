import type { CreateThemeOptions, Theme } from './models';
import { merge } from 'lodash';
import * as PaletteColors from './_colors';

export const defaultTheme: Theme = {
    mode: 'system',
    palette: { ...PaletteColors },
};

export const createTheme = (options: CreateThemeOptions = {}): Theme =>
    merge({}, defaultTheme, {
        ...options,
    });
