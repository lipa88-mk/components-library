import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CheckboxListPickerProps, CheckboxListPicker } from '../CheckboxListPicker';
import { args, argTypes } from './config';

const meta: Meta<typeof CheckboxListPicker> = {
    title: 'Form Elements/CheckboxListPicker',
    component: CheckboxListPicker,
    argTypes,
    args,
    parameters: {
        controls: {
            exclude: ['className'],
        },
    },
};

export const Playground: StoryFn<CheckboxListPickerProps<string>> = ({ values: defaultValues, onChange, ...props }) => {
    const [values, setValues] = useState<string[] | undefined>(defaultValues);
    return (
        <CheckboxListPicker
            {...props}
            values={values}
            onChange={value => {
                setValues(value);
                onChange(value);
            }}
        />
    );
};

export default meta;
