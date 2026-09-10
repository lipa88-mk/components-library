import type { FC } from 'react';
import React from 'react';
import { classes } from '../../utils';

export const badgeColoring = {
    gray: 'bg-gray-100 text-gray-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    indigo: 'bg-indigo-100 text-indigo-800',
    pink: 'bg-pink-100 text-pink-800',
};

type BadgeSize = 'base' | 'large';
export type BadgeColoring = keyof typeof badgeColoring;

export type BadgesProps = {
    list: string[];
    size?: BadgeSize;
    coloring?: BadgeColoring;
    title?: string;
};

const badgeSizes = {
    base: 'px-3 py-0.5 text-xs',
    large: 'px-4 py-1 text-sm',
};

export const Badges: FC<BadgesProps> = ({ list, size = 'base', coloring = 'gray' }) => (
    <BadgesWrapper>
        {list.map(it => (
            <Badge key={it} title={it} label={it} color={coloring} size={size} />
        ))}
    </BadgesWrapper>
);

export const Badge: FC<any> = ({ title, label, color = 'gray', size = 'base' }) => (
    <li
        data-testid={'components-badges-badge'}
        aria-label={label}
        title={title}
        className={classes(
            'font-medium inline-flex rounded-xl tracking-wide whitespace-nowrap',
            badgeColoring[color],
            badgeSizes[size]
        )}
    >
        {label}
    </li>
);

export const BadgesWrapper = ({ children }) => (
    <ul data-testid={'components-badges-wrapper'} className={'text-xs flex gap-x-4 gap-y-2 flex-wrap'}>
        {children}
    </ul>
);
