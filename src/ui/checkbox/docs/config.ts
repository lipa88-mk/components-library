import type { ArgTypes } from '@storybook/react';
import type { Props } from '../Checkbox';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<Props> = {
    label: {
        control: 'text',
        description: 'The text label displayed next to the checkbox',
    },
    disabled: {
        control: 'boolean',
        description: ' If `true`, the checkbox will be disabled and unclickable',
    },
    indeterminate: {
        control: 'boolean',
        description: 'Sets the checkbox to an indeterminate state',
    },
    errorMessage: {
        control: 'text',
        description: 'An error message displayed below the checkbox to inform users of validation issues.',
    },
    required: {
        control: 'boolean',
        description:
            'Indicates whether the checkbox must be checked for form submission. When `true`, the checkbox is a mandatory field',
    },
    onChange: {
        description: 'A callback function that is triggered when the checkbox state changes.',
    },
};

export const args: Partial<Props> = {
    label: 'I accept the privacy policy',
    disabled: false,
    indeterminate: false,
    errorMessage: '',
    required: false,
    onChange: action('onChange'),
};
