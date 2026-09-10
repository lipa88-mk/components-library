import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switcher } from '../Switcher';
import { args, argTypes } from './config';

const meta: Meta<typeof Switcher> = {
    title: 'Form Elements/Switcher/Features',
    tags: ['!autodocs'],
    component: Switcher,
    args,
    argTypes,
};

export default meta;
type Story = StoryObj<typeof Switcher>;

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    parameters: {
        controls: { include: ['disabled'] },
    },
};

export const WithErrorMessage: Story = {
    args: {
        errorMessage: 'Some error occured 😭',
    },
    parameters: {
        controls: { include: ['errorMessage'] },
    },
};

export const WithCustomLayout: Story = {
    args: {
        label: 'Some option:',
        className: 'flex flex-row-reverse justify-end items-center gap-6',
    },
    parameters: {
        controls: { include: ['className'] },
    },
};
