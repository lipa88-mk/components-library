import type { ArgTypes } from '@storybook/react';
import type { LoadingProps } from '../Loading';

export const argTypes: ArgTypes<LoadingProps> = {
    isLoading: {
        control: { type: 'boolean' },
        description: 'Controls whether the loading indicator is displayed or not.',
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'true' },
        },
    },
    message: {
        control: { type: 'text' },
        description: 'Optional message to display text inside loading component.',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: 'Loading data...' },
        },
    },
};

export const args: Partial<LoadingProps> = {
    isLoading: true,
    message: 'Loading data...',
};
