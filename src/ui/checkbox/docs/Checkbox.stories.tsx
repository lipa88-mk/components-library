import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Props, Checkbox } from '../Checkbox';
import { args, argTypes } from './config';

const meta: Meta<typeof Checkbox> = {
    title: 'Form Elements/Checkbox',
    component: Checkbox,
    argTypes,
    args,
};

export const Playground: StoryFn<Props> = props => <Checkbox {...props} />;

export default meta;
