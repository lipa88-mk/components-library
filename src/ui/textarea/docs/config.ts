import type { ArgTypes } from '@storybook/react';
import type { TextareaProps } from '../Textarea';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<TextareaProps> = {
    className: {
        control: 'text',
        description: 'Some custom styles that can be applied in addition to default styles.',
    },
    placeholder: {
        control: 'text',
        description:
            'Placeholder text, that will be shouwn in empty field to describe what kind of information should be filled in.',
    },
    required: {
        control: 'boolean',
        description:
            'Indicates whether the textarea must be filled for form submission. When `true`, the textarea is a mandatory field',
    },
    disabled: {
        control: 'boolean',
        description: ' If `true`, the textarea will be disabled and unclickable',
    },
    helperText: {
        control: 'text',
        description: 'Some helper text that will visualize some important info on how to fill this field.',
    },
    errorMessage: {
        control: 'text',
        description: 'An error message displayed below the textarea to inform users of validation issues.',
    },
    resizable: {
        control: 'boolean',
        description:
            'Boolean option for controlling how an element can be resized. Not resizable dy default, vertically resizable if turned. ',
    },

    onChange: {
        description: 'A callback function that is triggered when the textarea state changes.',
    },
};

export const args: Partial<TextareaProps> = {
    className: ' ',
    placeholder: '',
    required: false,
    helperText: '',
    errorMessage: '',
    disabled: false,
    onChange: action('onChange'),
    resizable: false,
};
