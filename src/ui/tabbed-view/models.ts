import type React from 'react';
import type { ComponentType, Key, ReactElement, RefAttributes, SVGProps } from 'react';
import type { TooltipProps } from '../tooltip';

export type TabSize = 'sm' | 'md' | 'lg';
export type IconPosition = 'left' | 'right' | 'top' | 'bottom';
export type TabsMode = 'horizontal' | 'vertical';

export type BaseTabProps = {
    active?: boolean;
    disable?: boolean;
    Icon?: ComponentType<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
    onSelect?: () => void;
    tooltipText?: React.ReactNode;
};

export type TabPropsWithStringTitle = BaseTabProps & {
    title: string;
};

export type TabPropsWithReactNodeTitle = BaseTabProps & {
    id: string;
    title: React.ReactNode;
};

export type TabProps = TabPropsWithStringTitle | TabPropsWithReactNodeTitle;

export type TabbedViewProps = {
    children: ReactElement<TabProps> | ReactElement<TabProps>[];
    size?: TabSize;
    iconPosition?: IconPosition;
    iconOnly?: boolean;
    activeTab?: string;
    onSelect?: (uniqueKey: React.Key, index: number) => void;
    overflowVisible?: boolean;
    showPadding?: boolean;
    showBrowserScroll?: boolean;
    mode?: TabsMode;
    tooltipPosition?: TooltipProps['placement'];
    fullWidth?: boolean;
    className?: string;
    showChildren?: boolean;
};

export type TabbedViewItemProps = Required<
    Pick<TabbedViewProps, 'iconOnly' | 'fullWidth' | 'mode' | 'iconPosition' | 'size' | 'onSelect'>
> & {
    tab: Tab;
    id: Key;
    isSelected: boolean;
    onSelect: () => void;
};

export type Tab = TabProps & Partial<{ key: Key }>;

export const tabSizes = {
    horizontal: {
        default: {
            sm: 'px-3 py-1.5',
            md: 'px-4 py-2',
            lg: 'px-5 py-4',
        },
        iconOnly: {
            sm: 'px-10 py-1.5',
            md: 'px-12 py-2',
            lg: 'px-16 py-4',
        },
    },
    vertical: {
        default: {
            sm: 'py-3 px-1.5',
            md: 'py-4 px-2',
            lg: 'py-5 px-4',
        },
        iconOnly: {
            sm: 'p-3.5',
            md: 'p-4',
            lg: 'p-5',
        },
    },
};
