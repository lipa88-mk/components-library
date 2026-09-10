import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Popover } from '../Popover';
import { PopoverProps } from '../models';
import { args, argTypes } from './config';

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
    argTypes,
    args,
};

export const Playground: StoryFn<PopoverProps> = props => <Popover {...props} />;

export default meta;
