import type { ButtonHTMLAttributes, ComponentType, InputHTMLAttributes, RefAttributes, SVGProps } from 'react';

export type ButtonLevel = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type ButtonSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// ToDo: add info to colorings list
export type ButtonColoring = 'default' | 'danger' | 'warning' | 'success' | 'neutral';

export type ButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';
export type ButtonInnerAlignment = 'left' | 'right' | 'center';

export type SharedProps = {
    size?: ButtonSize;
    coloring?: ButtonColoring;
    Icon?: ComponentType<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
    iconPosition?: ButtonIconPosition;
    disabled?: boolean;
    className?: string;
    active?: boolean;
    isLoading?: boolean;
    innerAlignment?: ButtonInnerAlignment;
};

export type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;

export type ImportProps = SharedProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
        onImport?: (files: FileList) => void;
    };
