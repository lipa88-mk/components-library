import { createContext } from 'react';
import type { ThemeContextData } from './models';
import { defaultTheme } from './createTheme';
import { noop } from '../utils';

export const ThemeContext = createContext<ThemeContextData>({
    theme: defaultTheme,
    nestingLevel: -1,
    onChangeTheme: noop,
});
