import type { ArgTypes } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export const defaultItems = [
    { label: 'Private to Project Members', value: 'one' },
    { label: 'Not private to Project Members', value: 'two' },
    { label: 'Private to everyone', value: 'three' },
    { label: 'Private to someone else', value: 'four' },
];

export const itemsWithDescription = [
    {
        label: 'Private to Project Members',
        value: 'one',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
        label: 'Not private to Project Members',
        value: 'two',
        description: 'Molestias omnis sit illo consectetur voluptatum',
    },
    { label: 'Private to everyone', value: 'three', description: 'Rem, ab natus. Facilis, ab deserunt' },
    {
        label: 'Private to someone else',
        value: 'four',
        description: 'Lbero ullam minima, eius beatae, voluptates pariatur repudiandae aperiam blanditiis',
    },
];

export const argTypes: ArgTypes = {
    items: {
        control: 'object',
        description: 'The list of radio items: `{ label, value?, description? }[]`',
    },
    value: {
        control: 'text',
        description: 'The currently selected value',
    },
    name: {
        control: 'text',
        description: 'Shared `name` for every radio in the group. Auto-generated when omitted',
    },
    disabled: {
        control: 'boolean',
        description: 'If `true`, every radio in the group is disabled',
    },
    className: {
        control: 'text',
        description: 'Custom class for the group wrapper. Replaces the default vertical spacing',
    },
    onChange: {
        control: false,
        description: 'A custom function called with the newly selected value',
    },
};

export const args = {
    items: defaultItems,
    value: defaultItems[0].value,
    disabled: false,
    onChange: action('onChange'),
    className: '',
};
