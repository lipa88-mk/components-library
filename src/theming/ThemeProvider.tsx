import React, { useLayoutEffect, useMemo, useState } from 'react';

import type { Theme, ThemeContextData, ThemeProviderProps, UseApplyCssVarsOptions } from './models';
import { ThemeContext } from './context';
import { useThemableElementRef, useThemeNestingLevel } from './hooks';
import { classes, useEffectAfterMount } from '../utils';

const useApplyCssVars = (theme: Theme, { isNested, themableElementRef }: UseApplyCssVarsOptions) => {
    // State to track when CSS variables have been applied to avoid flickering issues
    // A potential solution could be found in React 19: https://react.dev/reference/react/use
    const [isReady, setReady] = useState(false);
    const { palette } = theme;

    useLayoutEffect(() => {
        const root = isNested ? themableElementRef.current : document.documentElement;

        if (root) {
            Object.entries(palette).forEach(([key, value]) => {
                root.style.setProperty(`--sd-base-${key}`, value);
            });
        }

        setReady(true);
    }, [palette, isNested]);

    return isReady;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme: propTheme, className }) => {
    const currentNestingLevel = useThemeNestingLevel();
    const [theme, setTheme] = useState<Theme>(propTheme);
    const themableElementRef = useThemableElementRef<HTMLDivElement>();

    const isNested = currentNestingLevel > -1;
    const { mode } = theme;

    const isCssVarsApplied = useApplyCssVars(theme, {
        themableElementRef,
        isNested,
    });

    useEffectAfterMount(() => {
        setTheme(propTheme);
    }, [propTheme]);

    useLayoutEffect(() => {
        if (!isNested) {
            const root = document.documentElement;

            if (mode === 'system') {
                const matcher = window.matchMedia('(prefers-color-scheme: dark)');
                root.setAttribute('data-theme', matcher.matches ? 'dark' : 'light');

                const colorSchemeListener = ({ matches }: MediaQueryListEvent) => {
                    root.setAttribute('data-theme', matches ? 'dark' : 'light');
                };

                matcher.addEventListener('change', colorSchemeListener);
                return () => {
                    matcher.removeEventListener('change', colorSchemeListener);
                };
            }

            root.setAttribute('data-theme', mode);
        }
    }, [mode, isNested]);

    const contextValue = useMemo<ThemeContextData>(
        () => ({
            theme,
            nestingLevel: currentNestingLevel + 1,
            onChangeTheme: setTheme,
        }),
        [theme, currentNestingLevel, setTheme]
    );

    const renderChildren = () => {
        if (isNested) {
            return (
                <div ref={themableElementRef} className={classes(className)}>
                    {isCssVarsApplied && children}
                </div>
            );
        }

        return isCssVarsApplied && children;
    };

    return <ThemeContext.Provider value={contextValue}>{renderChildren()}</ThemeContext.Provider>;
};
