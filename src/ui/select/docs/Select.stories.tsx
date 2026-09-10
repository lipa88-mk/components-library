import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Select } from '../Select';
import { type SelectProps } from '../models';
import { args, argTypes } from './config';

const meta: Meta<typeof Select> = {
    title: 'Form Elements/Select',
    component: Select,
    argTypes,
    args,
};

export const Playground: StoryFn<SelectProps<string>> = props => <Select {...props} />;

export default meta;
