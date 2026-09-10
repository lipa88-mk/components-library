import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SwitcherProps, Switcher } from '../Switcher';
import { args, argTypes } from './config';

const meta: Meta<typeof Switcher> = {
    title: 'Form Elements/Switcher',
    component: Switcher,
    argTypes,
    args,
    decorators: [
        Story => (
            <div className="p-4 ">
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Switcher>;

export const Playground: Story = {
    parameters: {
        controls: { exclude: ['onChange', 'active'] },
    },
};
