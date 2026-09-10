import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { DatePickerProps } from '../DatePicker';
import DatePicker from '../DatePicker';
import { args, argTypes } from './config';

const meta: Meta<typeof DatePicker> = {
    title: 'Form Elements/DatePicker/Features',
    tags: ['!autodocs'],
    component: DatePicker,
    args,
    argTypes,
};

export default meta;

export const Types: StoryFn<DatePickerProps> = props => <DatePicker {...props} />;
Types.parameters = {
    controls: {
        include: ['value', 'type'],
    },
};
Types.args = {
    type: 'date',
};

export const errorMessage: StoryFn<DatePickerProps> = props => <DatePicker {...props} />;
errorMessage.parameters = {
    controls: {
        include: ['errorMessage', 'enableInternalValidation'],
    },
};
errorMessage.args = {
    type: 'date',
    value: null,
    helperText: 'Required field with emply value',
    errorMessage: '',
    required: true,
    enableInternalValidation: true,
};
