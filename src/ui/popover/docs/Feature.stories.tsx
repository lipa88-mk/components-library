import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { PopoverProps } from '..';
import { Popover } from '../Popover';
import { args, argTypes } from './config';

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover/Features',
    tags: ['!autodocs'],
    component: Popover,
    args,
    argTypes,
};

export default meta;

export const Placement: StoryFn<PopoverProps> = props => <Popover {...props} />;

Placement.parameters = {
    controls: {
        include: 'placement',
    },
};

export const Offset: StoryFn<PopoverProps> = props => <Popover {...props} />;

Offset.parameters = {
    controls: {
        include: 'offset',
    },
};
