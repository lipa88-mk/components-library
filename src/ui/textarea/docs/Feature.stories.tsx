import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../Textarea';
import { args, argTypes } from './config';
import { Labelify } from '../../labelify';

const meta: Meta<typeof Textarea> = {
    title: 'Form Elements/Textarea/Features',
    tags: ['!autodocs'],
    component: Textarea,
    args,
    argTypes,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

const content =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vitae et cupiditate reprehenderit quidem magni inventore officiis asperiores, excepturi adipisci repudiandae optio, numquam assumenda, tempore voluptate veniam tempora quas! Esse!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vitae et cupiditate reprehenderit quidem magni inventore officiis asperiores, excepturi adipisci repudiandae optio, numquam assumenda, tempore voluptate veniam tempora quas! Esse!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vitae et cupiditate reprehenderit quidem magni inventore officiis asperiores, excepturi adipisci repudiandae optio, numquam assumenda, tempore voluptate veniam tempora quas! Esse!';

export const EmptyWithPlaceholder: Story = {
    args: {
        placeholder: 'Add a comment here.',
    },
    parameters: {
        controls: { include: ['placeholder'] },
    },
};

export const WithHelperText: Story = {
    args: {
        helperText: 'Some helper text',
    },
    parameters: {
        controls: { include: ['helperText'] },
    },
};

export const WithLabel: Story = {
    parameters: {
        controls: { include: [] },
    },
    render: args => (
        <Labelify label="Some label for Textarea">
            <Textarea {...args} />
        </Labelify>
    ),
};

export const Filled: Story = {
    args: {
        value: content,
    },
    parameters: {
        controls: { include: ['value'] },
    },
};

export const Resizable: Story = {
    args: {
        resizable: true,
        value: content,
    },
    parameters: {
        controls: { include: ['resizable'] },
    },
};

export const Spellcheck: Story = {
    args: {
        spellCheck: true,
        value: 'This exampull will be checkd fur spellung when you try to edit it.',
    },
    parameters: {
        controls: { include: ['spellCheck'] },
    },
};

export const CustomRows: Story = {
    args: {
        rows: 2,
    },
    parameters: {
        controls: { include: ['rows'] },
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        value: content,
    },
    parameters: {
        controls: { include: ['disabled'] },
    },
};

export const WithBrowserError: Story = {
    args: {
        errorMessage: '',
        required: true,
    },
    parameters: {
        controls: { include: ['required'] },
    },
};

export const WithCustomError: Story = {
    args: {
        errorMessage: 'Some error occured 😭',
        value: content,
    },
    parameters: {
        controls: { include: ['errorMessage'] },
    },
};
