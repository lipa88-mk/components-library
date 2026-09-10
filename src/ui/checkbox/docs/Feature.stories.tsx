import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../Checkbox';
import { Checkbox } from '../Checkbox';
import { args, argTypes } from './config';

const meta: Meta<typeof Checkbox> = {
    title: 'Form Elements/Checkbox/Features',
    tags: ['!autodocs'],
    component: Checkbox,
    args,
    argTypes,
};

export default meta;

export const Label: StoryFn<Props> = props => <Checkbox {...props} />;

Label.parameters = {
    controls: {
        include: 'label',
    },
};

export const Disabled: StoryFn<Props> = props => <Checkbox {...props} />;

Disabled.parameters = {
    controls: {
        include: 'disabled',
    },
};

Disabled.args = {
    disabled: true,
};

export const Indeterminate: StoryFn<Props> = props => <Checkbox {...props} />;

Indeterminate.parameters = {
    controls: {
        include: 'indeterminate',
    },
};

Indeterminate.args = {
    indeterminate: true,
};

export const ErrorMessage: StoryFn<Props> = props => <Checkbox {...props} />;

ErrorMessage.parameters = {
    controls: {
        include: 'errorMessage',
    },
};

ErrorMessage.args = {
    errorMessage: 'You have to accept the privacy policy',
};

export const Required: StoryFn<Props> = props => <Checkbox {...props} />;

Required.parameters = {
    controls: {
        include: 'required',
    },
};

Required.args = {
    required: true,
};
