import type React from 'react';
import { useCallback, useContext, useLayoutEffect, useRef } from 'react';
import type { ThemeColorMode, ThemePalette, UseThemeElementRefOptions } from './models';

import { ThemeContext } from './context';

export const useThemableElementRef = <T extends HTMLElement>(options?: UseThemeElementRefOptions) => {
    const ref = useRef<T | null>(null);
    const enable = options?.enable !== false;

    useLayoutEffect(() => {
        if (ref.current) {
            if (enable) {
                ref.current.setAttribute('data-theme-override', 'true');
            } else {
                ref.current.removeAttribute('data-theme-override');
            }
        }
    }, [enable]);

    return ref;
};

export const useThemeNestingLevel = () => useContext(ThemeContext).nestingLevel;

export const useThemeMode = (): [ThemeColorMode, React.Dispatch<React.SetStateAction<ThemeColorMode>>] => {
    const { theme, nestingLevel, onChangeTheme } = useContext(ThemeContext);
    const isNested = nestingLevel > 0;

    const setMode = useCallback<React.Dispatch<React.SetStateAction<ThemeColorMode>>>(
        newState => {
            if (isNested) {
                // eslint-disable-next-line no-console
                console.warn('Not possible to change color mode in the nested theming provider.');
                return;
            }
            const mode = typeof newState === 'function' ? newState(theme.mode) : newState;
            onChangeTheme(prevState => ({
                ...prevState,
                mode,
            }));
        },
        [theme.mode, isNested, onChangeTheme]
    );

    return [theme.mode, setMode];
};

export const useThemePalette = (): [ThemePalette, React.Dispatch<React.SetStateAction<ThemePalette>>] => {
    const { theme, onChangeTheme } = useContext(ThemeContext);

    const setPalette = useCallback<React.Dispatch<React.SetStateAction<ThemePalette>>>(
        newState => {
            const palette = typeof newState === 'function' ? newState(theme.palette) : newState;
            onChangeTheme(prevState => ({
                ...prevState,
                palette,
            }));
        },
        [theme.palette, onChangeTheme]
    );

    return [theme.palette, setPalette];
};

export const useTheme = () => useContext(ThemeContext).theme;
