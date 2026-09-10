import type { ArgTypes } from '@storybook/react';
import type { ButtonGroupSwitchProps } from '../models';

export const argTypes: ArgTypes<ButtonGroupSwitchProps> = {
    fullWidth: {
        control: { type: 'boolean' },
    },
    edges: {
        options: ['round', 'rectangular'],
        control: { type: 'inline-radio' },
    },
    coloring: {
        options: ['default', 'danger', 'warning', 'success', 'neutral'],
        control: { type: 'inline-radio' },
    },
    orientation: {
        options: ['horizontal', 'vertical'],
        control: { type: 'inline-radio' },
        description: 'The component orientation (layout flow direction)',
        table: {
            type: { summary: '"horizontal" | "vertical"' },
        },
    },
};

export const args: Partial<ButtonGroupSwitchProps> = {
    fullWidth: false,
    orientation: 'horizontal',
    edges: 'round',
    coloring: 'default',
};
