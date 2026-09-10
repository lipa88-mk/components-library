import type { ArgTypes } from '@storybook/react';
import type { Props as InputProps } from '../Input';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<InputProps> = {
    type: {
        options: ['text', 'number', 'search', 'url', 'email', 'tel', 'password'],
        control: { type: 'select' },
        description: 'Type of form control',
    },
    integerArrowButtons: {
        control: {
            type: 'boolean',
        },
        description: 'Boolean prop lets to show/hide default browser arrows for number inputs',
    },
    required: {
        control: {
            type: 'boolean',
        },
        description: 'Boolean. A value is required or must be checked for the form to be submittable',
    },
    disabled: {
        control: {
            type: 'boolean',
        },
        description: 'Boolean. Whether the form control is disabled',
    },
    sizing: {
        options: ['sm', 'md'],
        control: {
            type: 'radio',
        },
        description: 'Option to change components size. Since width is flexible, only height is affected',
    },
    coloring: {
        options: ['default', 'transparent'],
        control: {
            type: 'radio',
        },
        description: "Option to change component's UI.",
    },
    Icon: {
        control: false,
        description: 'Prop to set svg icon.',
    },
    iconPosition: {
        options: ['left', 'right'],
        control: {
            type: 'radio',
        },
        description: "Prop to set icon's position on the left/right of the component",
    },
    helperText: {
        control: {
            type: 'text',
        },
        description: 'Provides a string to show to the user some additional information about this field.',
    },
    errorMessage: {
        control: {
            type: 'text',
        },
        description: 'Prop to provide custom error message.',
    },
    enableInternalValidation: {
        control: {
            type: 'boolean',
        },
        description: 'Enables internal validation via ValidityState interface.',
    },
    renderStartAdornment: {
        description: 'Renders a `React.ReactElement` at the start of the input field.',
        control: false,
    },
};

export const args: Partial<InputProps> = {
    type: 'text',
    disabled: false,
    required: false,
    sizing: 'md',
    coloring: 'default',
    iconPosition: 'left',
    placeholder: 'Some placeholder text',
    integerArrowButtons: true,
    enableInternalValidation: true,
    onChange: action('onChange'),
};
