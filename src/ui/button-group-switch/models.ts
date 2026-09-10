import type { ButtonColoring } from '../button';
import type React from 'react';

export type ButtonGroupSwitchOrientation = 'horizontal' | 'vertical';

export type ButtonGroupSwitchProps = React.PropsWithChildren<{
    fullWidth?: boolean;
    edges?: 'round' | 'rectangular';
    coloring?: ButtonColoring;
    orientation?: ButtonGroupSwitchOrientation;
}>;
