import { type MultiSelectProps } from '../models';
import { MultiSelect } from '../MultiSelect';
import type { ArgTypes, Parameters } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<MultiSelectProps> = {
    id: {
        control: 'text',
        description: 'A unique identifier which will be applied to the root `div` element of the component.',
    },
    disabled: {
        control: 'boolean',
        description: 'If `true`, the component will be disabled and unclickable',
    },
    placeholder: {
        description: 'Text displayed in the input field when no values are selected.',
    },
    searchable: {
        control: 'boolean',
        description: 'Enables a search input within dropdown, allowing users to filter options by typing.',
    },
    sizing: {
        control: { type: 'select' },
        options: ['sm', 'md'],
        table: {
            defaultValue: { summary: 'md' },
        },
        description: 'Sets the size of the component, typically affect height, padding, and font size.',
    },
    helperText: {
        description:
            'Additional text or a React element providing guidance or context for the user. Appears below the input field.',
    },
    errorMessage: {
        description: 'Error message text displayed when there is a validation issue.',
    },
    defaultValue: {
        control: false,
        description:
            'An array of strings that sets the initial selection when the component is first rendered. Does not update after initial render.',
    },
    defaultOpen: {
        control: false,
        description:
            'Determines if the dropdown is initially open. This is used for uncontrolled components where the open state is managed internally.',
    },
    open: {
        control: false,
        description:
            'Controls the open state of the dropdown. This is a controlled prop, meaning it must be managed by the parent component.',
    },
    children: {
        control: false,
    },
    onChangeOpen: {
        control: false,
        table: {
            defaultValue: {
                summary: 'noop',
            },
        },
        description: 'Callback function triggered when the open state of the dropdown changes.',
    },
    onChange: {
        control: false,
        table: {
            defaultValue: {
                summary: 'noop',
            },
        },
        description:
            'Callback function triggered when the selected values change. It receives the new array of selected values as an argument.',
    },
    onBlur: {
        control: false,
        table: {
            defaultValue: {
                summary: 'noop',
            },
        },
        description:
            'Callback function triggered when the MultiSelect loses focus. Useful for form validation or UI updates on blur.',
    },
    filterOption: {
        control: false,
        table: {
            defaultValue: {
                summary: 'noop',
            },
        },
        description:
            'If you really would like to rewrite the filtration logic from the ground up, simply declare a new filterOption function to be passed in as a prop to the component',
    },
    placement: {
        description: 'The edge aligned placement of the floating element relative to the reference element.',
    },
    offset: {
        description:
            'This lets you add distance (margin or spacing) between the reference and floating element, slightly alter the placement, or even create',
        control: false,
    },
};

export const args: Partial<MultiSelectProps> = {
    disabled: false,
    placeholder: 'Select countries',
    searchable: true,
    sizing: 'md',
    helperText: '',
    errorMessage: '',
    id: '',
    isValid: true,
    children: [
        <MultiSelect.Item key="US" value="US">
            United States
        </MultiSelect.Item>,
        <MultiSelect.Item key="SVG" value="SVG">
            Saint Vincent and the Grenadines
        </MultiSelect.Item>,
        <MultiSelect.Item key="MFS" value="MFS">
            Federated States of Micronesia
        </MultiSelect.Item>,
        <MultiSelect.Item key="CN" value="CN">
            China
        </MultiSelect.Item>,
        <MultiSelect.Item key="IN" value="IN">
            India
        </MultiSelect.Item>,
        <MultiSelect.Item key="DRC" value="DRC">
            Democratic Republic of the Congo
        </MultiSelect.Item>,
        <MultiSelect.Item key="BR" value="BR">
            Brazil
        </MultiSelect.Item>,
        <MultiSelect.Item key="DE" value="DE">
            Germany
        </MultiSelect.Item>,
        <MultiSelect.Item key="JP" value="JP">
            Japan
        </MultiSelect.Item>,
        <MultiSelect.Item key="FR" value="FR">
            France
        </MultiSelect.Item>,
        <MultiSelect.Item key="GB" value="GB">
            United Kingdom
        </MultiSelect.Item>,
        <MultiSelect.Item key="PT" value="PT">
            Portugal
        </MultiSelect.Item>,
        <MultiSelect.Item key="IT" value="IT">
            Italy
        </MultiSelect.Item>,
        <MultiSelect.Item key="CA" value="CA">
            Canada
        </MultiSelect.Item>,
    ],
    onChangeOpen: action('onChangeOpen'),
    onChange: action('onChange'),
    onBlur: action('onBlur'),
};

export const parameters: Parameters = {
    controls: {
        exclude: ['children', 'value', 'ariaLabel', 'components', 'meta'],
    },
};
