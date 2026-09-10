import type { ArgTypes } from '@storybook/react';
import type { Props } from '../Radio';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<Props> = {
    label: {
        control: 'text',
        description: 'The label text displayed next to the radio input',
    },
    description: {
        control: 'text',
        description: 'Optional extended description rendered under the label',
    },
    errorMessage: {
        control: 'text',
        description: 'Custom error message. When set, the radio is shown in an invalid state',
    },
    checked: {
        control: 'boolean',
        description: 'If `true`, the radio is rendered as selected',
    },
    disabled: {
        control: 'boolean',
        description: 'If `true`, the radio is disabled and unclickable',
    },
    name: {
        control: 'text',
        description: 'The `name` attribute that groups related radios together',
    },
    value: {
        control: 'text',
        description: 'The value submitted when this radio is selected',
    },
    onChange: {
        control: false,
        description: 'A custom function called when the selected state changes',
    },
};

export const args: Partial<Props> = {
    id: 'radio-id',
    name: 'radio-1',
    value: 'r1',
    label: 'Some label text',
    description: undefined,
    checked: false,
    disabled: false,
    errorMessage: '',
    onChange: action('onChange'),
};
