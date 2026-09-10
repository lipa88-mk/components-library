import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Select } from '../Select';
import { type SelectProps } from '../models';
import { args, argTypes } from './config';

const meta: Meta<typeof Select> = {
    title: 'Form Elements/Select/Features',
    tags: ['!autodocs'],
    component: Select,
    args,
    argTypes,
};
export default meta;

export const DefaultValue: StoryFn<SelectProps> = props => <Select {...props} />;
DefaultValue.parameters = {
    controls: {
        include: 'defaultValue',
    },
};
DefaultValue.args = {
    defaultValue: 'CN',
};

export const Placeholder: StoryFn<SelectProps> = props => <Select {...props} />;
Placeholder.parameters = {
    controls: {
        include: 'placeholder',
    },
};

export const Disabled: StoryFn<SelectProps> = props => <Select {...props} />;
Disabled.parameters = {
    controls: {
        include: 'disabled',
    },
};
Disabled.args = {
    disabled: true,
};

export const Loading: StoryFn<SelectProps> = props => <Select {...props} />;
Loading.parameters = {
    controls: {
        include: 'isLoading',
    },
};
Loading.args = {
    isLoading: true,
};

export const Sizing: StoryFn<SelectProps> = props => <Select {...props} />;
Sizing.parameters = {
    controls: {
        include: 'sizing',
    },
};

export const HelperText: StoryFn<SelectProps> = props => <Select {...props} />;
HelperText.parameters = {
    controls: {
        include: 'helperText',
    },
};
HelperText.args = {
    helperText: 'Please select a country you have been to',
};

export const ErrorMessage: StoryFn<SelectProps> = props => <Select {...props} />;
ErrorMessage.parameters = {
    controls: {
        include: ['errorMessage', 'isValid'],
    },
};
ErrorMessage.args = {
    errorMessage: 'Field is required',
    isValid: false,
};

export const OffsetAndPlacement: StoryFn<SelectProps> = props => <Select {...props} />;
OffsetAndPlacement.args = {
    offset: 0,
};
OffsetAndPlacement.parameters = {
    controls: {
        include: ['placement', 'offset'],
    },
    layout: 'centered',
};

export const DeprecatedValue: StoryFn<SelectProps> = props => <Select {...props} />;
DeprecatedValue.args = {
    defaultValue: '404',
};

DeprecatedValue.parameters = {
    controls: {
        include: 'defaultValue',
    },
};
