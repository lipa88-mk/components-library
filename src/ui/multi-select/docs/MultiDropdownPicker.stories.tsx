import React, { useState } from 'react';
import { MultiDropdownPicker } from '../MultiDropdownPicker';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof MultiDropdownPicker> = {
    title: 'Form Elements/MultiSelect/MultiDropdownPicker',
    component: MultiDropdownPicker,
    args: {
        onChange: fn(),
        onBlur: fn(),
        placeholder: 'Select items...',
        isLoading: false,
        disabled: false,
        searchable: true,
        ariaLabel: 'aria-label',
        isValid: true,
        sizing: 'md',
        helperText: '',
        errorMessage: '',
    },
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
    },
    argTypes: {
        readValue: {
            description:
                'Can be useful if items of the component is an array of objects. readValue can be used to set a value in this object.',
        },
        readLabel: {
            description:
                'Can be useful if items of the component is an array of objects. readLabel can be used to set a label in this object.',
        },
    },
};
export default meta;
type Story = StoryObj<typeof MultiDropdownPicker>;

export const Playground: Story = {
    args: {
        value: ['United States', 'Saint Vincent and the Grenadines'],
        items: [
            'United States',
            'Saint Vincent and the Grenadines',
            'Federated States of Micronesia',
            'China',
            'India',
            'Democratic Republic of the Congo',
            'Brazil',
            'Germany',
        ],
    },
    parameters: {
        controls: {
            exclude: ['onBlur', 'onChange', 'readLabel', 'readValue', 'value', 'meta', 'components', 'ariaLabel'],
        },
    },
    render: args => {
        const [value, setValue] = useState(args.value || []);
        const handleChange = args => {
            setValue(args);
        };
        return <MultiDropdownPicker {...args} value={value} onChange={handleChange} />;
    },
};

export const ReadLabelAndReadValue: Story = {
    args: {
        value: [
            { label: 'India', code: 'IN' },
            { label: '404', code: 'wrongItem' },
            { label: 'China', code: 'CN' },
        ],
        items: [
            { label: 'United States', code: 'US' },
            { label: 'Saint Vincent and the Grenadines', code: 'SVG' },
            { label: 'Federated States of Micronesia', code: 'MFS' },
            { label: 'China', code: 'CN' },
            { label: 'India', code: 'IN' },
            { label: 'Democratic Republic of the Congo', code: 'DRC' },
            { label: 'Brazil', code: 'BR' },
        ],
        // @ts-ignore
        readLabel: value => value.label,
        // @ts-ignore
        readValue: value => value.code,
        // ToDo: check later
    },
    parameters: {
        controls: { include: ['value', 'items', 'readValue', 'readLabel'] },
    },
    render: args => {
        const [value, setValue] = useState(args.value || []);
        const handleChange = args => {
            setValue(args);
        };
        return <MultiDropdownPicker {...args} value={value} onChange={handleChange} />;
    },
};

export const DeprecatedValue: Story = {
    args: {
        value: ['Saint Vincent and the Grenadines'],
        items: [
            'Federated States of Micronesia',
            'Democratic Republic of the Congo',
            'United States',
            'Germany',
            'Brazil',
            'China',
            'India',
        ],
    },
    parameters: {
        controls: { include: ['value', 'items'] },
    },
    render: args => {
        const [value, setValue] = useState(args.value || []);
        const handleChange = args => {
            setValue(args);
        };
        return <MultiDropdownPicker {...args} value={value} onChange={handleChange} />;
    },
};
