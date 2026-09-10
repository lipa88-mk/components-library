import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Tooltip } from '../Tooltip';
import { type TooltipProps } from '../models';
import { args, argTypes, parameters } from './config';

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes,
    args,
    parameters,
};

export const Playground: StoryFn<TooltipProps> = props => <Tooltip {...props} />;

export default meta;
