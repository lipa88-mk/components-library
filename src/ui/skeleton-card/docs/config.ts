import type { PropsWithChildren } from 'react';
import type { ArgTypes } from '@storybook/react';
import type { SkeletonCardsProps } from '../SkeletonCards';

// Shared between SkeletonCard and SkeletonCards. `length` applies to SkeletonCards only.
export const argTypes: ArgTypes<PropsWithChildren<SkeletonCardsProps>> = {
    loading: {
        control: 'boolean',
        description: 'When `false`, renders `children` instead of the skeleton',
    },
    rows: {
        options: [1, 2],
        control: { type: 'radio' },
        description: 'Number of skeleton rows inside each card',
    },
    length: {
        control: { type: 'number' },
        description: 'Number of cards to render (SkeletonCards only)',
    },
    className: {
        control: 'text',
        description: 'Extra classes applied to each card',
    },
    children: {
        control: false,
        description: 'Content shown once `loading` is `false`',
    },
};

export const args: Partial<SkeletonCardsProps> = {
    loading: true,
    className: '',
    rows: 2,
    length: 1,
};
