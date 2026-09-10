import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { LabelifyProps } from '../Labelify';
import { Labelify } from '../index';
import { args, argTypes } from './config';
import { Input } from '../../input';

const meta: Meta<typeof Labelify> = {
    title: 'Form Elements/Labelify',
    component: Labelify,
    argTypes,
    args,
};

export const Playground: StoryFn<LabelifyProps> = props => <Labelify {...props} />;
Playground.args = {
    children: <Input />,
};

export default meta;
