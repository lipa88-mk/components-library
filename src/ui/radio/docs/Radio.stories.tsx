import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../Radio';
import Radio from '../Radio';
import { args, argTypes } from './config';

const meta: Meta<typeof Radio> = {
    title: 'Form Elements/Radio',
    component: Radio,
    argTypes,
    args,
};

export const Playground: StoryFn<Props> = props => <Radio {...props} />;

Playground.parameters = {
    controls: { exclude: ['onChange', 'required'] },
};

export default meta;
