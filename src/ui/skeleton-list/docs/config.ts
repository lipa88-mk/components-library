import type { ArgTypes } from '@storybook/react';
import type { Props } from '../SkeletonList';

export const argTypes: ArgTypes<Props> = {
    lines: {
        control: { type: 'number' },
        description: 'Number of skeleton rows to render',
    },
};

export const args: Partial<Props> = {
    lines: 10,
};
