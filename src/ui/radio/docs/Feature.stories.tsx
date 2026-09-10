import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../Radio';
import Radio from '../Radio';
import { args, argTypes } from './config';

const meta: Meta<typeof Radio> = {
    title: 'Form Elements/Radio/Features',
    tags: ['!autodocs'],
    component: Radio,
    args,
    argTypes,
};

export default meta;

export const WithDescription: StoryFn<Props> = props => <Radio {...props} />;

WithDescription.args = {
    description: 'Some extended description',
};

WithDescription.parameters = {
    controls: { include: ['label', 'description', 'checked', 'disabled'] },
};

export const WithCustomError: StoryFn<Props> = props => <Radio {...props} />;

WithCustomError.args = {
    description: 'Some error that dev would like to provide',
    label: 'This field has some custom error',
    errorMessage: 'Some error occured 😭',
};

WithCustomError.parameters = {
    controls: { include: ['errorMessage', 'checked'] },
};
