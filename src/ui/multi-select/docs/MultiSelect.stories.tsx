import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MultiSelect } from '../MultiSelect';
import { type MultiSelectProps } from '../models';
import { args, argTypes, parameters } from './config';

const meta: Meta<typeof MultiSelect> = {
    title: 'Form Elements/MultiSelect',
    component: MultiSelect,
    argTypes,
    args,
    parameters,
};

export const Playground: StoryFn<MultiSelectProps> = props => <MultiSelect {...props} />;

export default meta;
