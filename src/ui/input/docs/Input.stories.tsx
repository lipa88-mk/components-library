import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Props as InputProps } from '../Input';
import Input from '../Input';
import { args, argTypes } from './config';
import { CakeIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof Input> = {
    title: 'Form Elements/Input',
    component: Input,
    argTypes,
    args,
};

export const Playground: StoryFn<InputProps> = props => <Input {...props} />;
Playground.args = {
    value: 5,
    Icon: CakeIcon,
    type: 'number',
    min: 1,
    max: 25,
    helperText: '1-25, number',
};

Playground.parameters = {
    controls: { exclude: ['value', 'onChange'], sort: 'alpha' },
};

export default meta;
