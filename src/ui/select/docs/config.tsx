import { type SelectProps } from '../models';
import { Select } from '../Select';
import type { ArgTypes } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<SelectProps> = {
    disabled: {
        control: 'boolean',
        description: 'If `true`, the component will be disabled and unclickable',
    },
    placeholder: {
        description: 'Text displayed in the input field when no values are selected.',
    },
    open: {
        control: false,
        description:
            'Controls the open state of the dropdown. This is a controlled prop, meaning it must be managed by the parent component.',
    },
    defaultOpen: {
        control: false,
        description:
            'Determines if the dropdown is initially open. This is used for uncontrolled components where the open state is managed internally.',
    },
    value: {
        control: false,
        description: 'A selected value.',
    },
    defaultValue: {
        control: false,
        description:
            'A value that sets the initial selection when the component is first rendered. Does not update after initial render.',
    },
    isLoading: {
        control: 'boolean',
        description: 'If `true`, the component will be shown the loading state',
    },
    sizing: {
        control: { type: 'select' },
        options: ['sm', 'md'],
        table: {
            defaultValue: { summary: 'md' },
        },
        description: 'Sets the size of the component, typically affect height, padding, and font size.',
    },
    meta: {
        control: false,
        description:
            'You can provide custom metadata or props in the `Select` component to use it within your provided components. Every component will have a `meta` prop.',
    },
    ariaLabel: {
        control: 'text',
        description: 'Provides a value for `aria-label` HTML attribute with additional line `_combobox_wrapper`.',
    },
    readLabel: {
        control: false,
        description: 'Deprecated.',
    },
    helperText: {
        control: 'text',
        description:
            'Additional text or a React element providing guidance or context for the user. Appears below the input field.',
    },
    isValid: {
        control: 'boolean',
        description:
            'Boolean prop to switch to error state. Outdated. Prefer to use `errorMessage` with text description as more user friendly approach.',
    },
    errorMessage: {
        control: 'text',
        description: 'Error message text displayed when there is a validation issue.',
    },
    children: {
        control: false,
        description: 'The option elements to populate the select. These should be `Select.Option` component.',
    },
    components: {
        control: false,
        description: 'Custom components to be rendered in dropdown section.',
    },
    onBlur: {
        control: false,
        description: 'Deprecated prop.',
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
    onChangeOpen: {
        control: false,
        table: {
            defaultValue: {
                summary: 'noop',
            },
        },
        description: 'Callback function triggered when the open state of the dropdown changes.',
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
        control: { type: 'select' },
        options: [
            'bottom-start',
            'top-start',
            'top-end',
            'right-start',
            'right-end',
            'bottom-end',
            'left-start',
            'left-end',
        ],
        table: {
            defaultValue: { summary: 'bottom-start' },
        },
    },
    offset: {
        description:
            'This lets you add distance (margin or spacing) between the reference and floating element, slightly alter the placement, or even create',
        control: 'number',
    },
};

export const args: Partial<SelectProps> = {
    disabled: false,
    placeholder: 'Select a country',
    isLoading: false,
    sizing: 'md',
    helperText: '',
    errorMessage: '',
    isValid: true,
    placement: 'bottom-start',
    children: [
        <Select.Item key="US" value="US">
            United States
        </Select.Item>,
        <Select.Item key="SVG" value="SVG">
            Saint Vincent and the Grenadines
        </Select.Item>,
        <Select.Item key="MFS" value="MFS">
            Federated States of Micronesia
        </Select.Item>,
        <Select.Item key="CN" value="CN">
            China
        </Select.Item>,
        <Select.Item key="IN" value="IN">
            India
        </Select.Item>,
        <Select.Item key="DRC" value="DRC">
            Democratic Republic of the Congo
        </Select.Item>,
        <Select.Item key="BR" value="BR">
            Brazil
        </Select.Item>,
        <Select.Item key="DE" value="DE">
            Germany
        </Select.Item>,
        <Select.Item key="JP" value="JP">
            Japan
        </Select.Item>,
        <Select.Item key="FR" value="FR">
            France
        </Select.Item>,
        <Select.Item key="GB" value="GB">
            United Kingdom
        </Select.Item>,
        <Select.Item key="PT" value="PT">
            Portugal
        </Select.Item>,
        <Select.Item key="IT" value="IT">
            Italy
        </Select.Item>,
        <Select.Item key="CA" value="CA">
            Canada
        </Select.Item>,
    ],
    onChangeOpen: action('onChangeOpen'),
    onChange: action('onChange'),
};
