import type { ArgTypes } from '@storybook/react';
import type { CheckboxListPickerProps } from '../CheckboxListPicker';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<CheckboxListPickerProps<string>> = {
    values: {
        control: {
            type: 'boolean',
        },
        description: 'The selected values for the checkbox list.',
    },
    items: {
        control: {
            type: 'boolean',
        },
        description: 'The list of items to display as checkboxes.',
    },
    disabled: {
        control: 'boolean',
        description: 'Disables the checkbox list when true.',
    },
    searchable: {
        control: 'boolean',
        description: 'Enables search functionality within the checkbox list.',
    },
    selectAllOption: {
        control: 'boolean',
        description: 'Displays a "Select all" option when true.',
    },
    selectAllOptionLabel: {
        control: 'text',
        description: 'The label for the "Select all" option.',
    },
    onChange: {
        control: {
            type: 'boolean',
        },
        table: {
            defaultValue: undefined,
        },
        description: 'Callback called when the selection changes.',
    },
    readValue: {
        control: {
            type: 'boolean',
        },
        description: 'Function to extract the value from each item.',
    },
    readLabel: {
        control: {
            type: 'boolean',
        },
        description: 'Function to extract the label from each item.',
    },
};

export const args: Partial<CheckboxListPickerProps<string>> = {
    values: ['Germany', 'Switzerland', 'Poland', 'Belgium'],
    items: ['Germany', 'Switzerland', 'Poland', 'Belgium'],
    disabled: false,
    searchable: false,
    selectAllOption: false,
    selectAllOptionLabel: 'Select all',
    onChange: action('onChange'),
};
