import type { ArgTypes } from '@storybook/react';
import type { LabelifyProps } from '../Labelify';

export const argTypes: ArgTypes<LabelifyProps> = {
    label: {
        control: 'text',
        description: 'Provides label string',
    },
    size: {
        control: 'select',
        table: { defaultValue: { summary: '3xs' } },
        options: ['3xs', 'xs'],
        description: 'Size option affects `font-size` of the label text.',
    },
    id: {
        control: 'text',
        description: 'Custom identifier can be passed to associate label and form control.',
    },
    disabled: {
        control: 'boolean',
        description: 'Passes `disabled` state to the form control.',
    },
    required: {
        control: 'boolean',
        description: 'Passes `required` state to the form control.',
    },
    children: {
        control: false,
        description: 'Provides inner component which should be labeled.',
    },
};

export const args: Partial<LabelifyProps> = {
    disabled: false,
    required: false,
    size: '3xs',
    label: 'Label text',
};
