import type React from 'react';
import type * as Colors from './_colors';

export type ThemePalette = Record<keyof typeof Colors, string>;

export type ThemeColorMode = 'system' | 'light' | 'dark';

export type Theme = {
    mode: ThemeColorMode;
    palette: ThemePalette & Record<string, string>;
};

export type ThemeContextData = {
    nestingLevel: number;
    theme: Theme;
    onChangeTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export type ThemeProviderProps = React.PropsWithChildren<{
    theme: Theme;
    className?: string;
}>;

export type CreateThemeOptions = Partial<{
    mode: ThemeColorMode;
    palette: Partial<ThemePalette> & Record<string, string>;
}>;

export type UseThemeElementRefOptions = Partial<{
    enable: boolean;
}>;

export type UseApplyCssVarsOptions = {
    isNested: boolean;
    themableElementRef: React.MutableRefObject<HTMLDivElement | null>;
};
