import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { MultiSelect } from '../MultiSelect';
import { type MultiSelectProps } from '../models';
import { args, argTypes, parameters } from './config';

const meta: Meta<typeof MultiSelect> = {
    title: 'Form Elements/MultiSelect/Features',
    tags: ['!autodocs'],
    component: MultiSelect,
    args,
    argTypes,
    parameters,
};

export default meta;

export const Disabled: StoryFn<MultiSelectProps> = props => <MultiSelect {...props} />;

Disabled.parameters = {
    controls: {
        include: 'disabled',
    },
};

Disabled.args = {
    disabled: true,
};

export const isLoading: StoryFn<MultiSelectProps> = props => <MultiSelect {...props} />;

isLoading.parameters = {
    controls: {
        include: 'isLoading',
    },
};

isLoading.args = {
    isLoading: true,
};

export const Placeholder: StoryFn<MultiSelectProps> = props => <MultiSelect {...props} />;

Placeholder.parameters = {
    controls: {
        include: 'placeholder',
    },
};

export const Search: StoryFn<MultiSelectProps> = props => <MultiSelect {...props} />;

Search.parameters = {
    controls: {
        include: 'search',
    },
};

export const Sizing: StoryFn<MultiSelectProps> = props => <MultiSelect {...props} />;

Sizing.parameters = {
    controls: {
        include: 'sizing',
    },
};

export const HelperText: StoryFn<MultiSelectProps> = props => <MultiSelect {...props} />;

HelperText.parameters = {
    controls: {
        include: 'helperText',
    },
};

HelperText.args = {
    helperText: 'Please select countries you have been to',
};

export const ErrorMessage: StoryFn<MultiSelectProps> = props => <MultiSelect {...props} />;

ErrorMessage.parameters = {
    controls: {
        include: 'errorMessage',
    },
};

ErrorMessage.args = {
    errorMessage: 'Please select at least one country',
};

export const DefaultValue: StoryFn<MultiSelectProps> = props => <MultiSelect {...props} />;

DefaultValue.parameters = {
    controls: {
        include: 'defaultValue',
    },
};

DefaultValue.args = {
    defaultValue: ['PT'],
};

export const DeprecatedValue: StoryFn<MultiSelectProps> = props => <MultiSelect {...props} />;

DeprecatedValue.parameters = {
    controls: {
        include: 'defaultValue',
    },
};

DeprecatedValue.args = {
    defaultValue: ['404', '201', 'CN'],
};
