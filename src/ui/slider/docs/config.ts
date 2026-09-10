import type { ArgTypes } from '@storybook/react';
import type { Props } from '../Slider';

export const argTypes: ArgTypes<Props> = {
    className: {
        control: 'text',
        description: 'Extra classes applied to the scrollable track element',
    },
};

export const args: Partial<Props> = {
    className: '',
};
