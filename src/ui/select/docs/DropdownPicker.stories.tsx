import React from 'react';
import { DropdownPicker } from '../DropdownPicker';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof DropdownPicker> = {
    title: 'Form Elements/Select/DropdownPicker',
    component: DropdownPicker,
    args: {
        id: 'DropdownPicker-id',
        value: 'One',
        placeholder: 'placeholder',
        items: ['One', 'Two', 'Three'],
        onChange: action('onChange'),
        onBlur: action('onBlur'),
        isLoading: false,
        disabled: false,
        ariaLabel: 'aria-label',
        isValid: true,
        sizing: 'md',
        helperText: '',
        errorMessage: '',
    },
    argTypes: {
        items: {
            description: 'Allows to use an array of options.',
        },
    },
};
export default meta;
type Story = StoryObj<typeof DropdownPicker>;

export const Playground: Story = {
    render: args => {
        const [value, setValue] = React.useState(args.value || '');
        const handleChange = args => {
            setValue(args);
        };
        return <DropdownPicker {...args} value={value} onChange={handleChange} />;
    },
    args: {
        value: 'Two',
    },
    parameters: {
        controls: {
            include: ['items', 'value'],
        },
    },
};

export const DeprecatedValue: Story = {
    render: args => {
        const [value, setValue] = React.useState(args.value || '');
        const handleChange = args => {
            setValue(args);
        };
        return <DropdownPicker {...args} value={value} onChange={handleChange} />;
    },
    args: {
        value: 'Four',
    },
    parameters: {
        controls: { include: ['value', 'items'] },
    },
};
