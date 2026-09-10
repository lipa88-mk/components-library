import type React from 'react';
import type { Props } from './Input';

export type InputAdornmentProps = React.HTMLAttributes<HTMLDivElement>;

export type CalculatePaddings = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

export type CalculatePaddingOptions = Pick<Props, 'sizing' | 'Icon' | 'iconPosition'> & {
    errorText: string | undefined;
};
