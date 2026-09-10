import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { CheckboxListPickerProps } from '../CheckboxListPicker';
import { CheckboxListPicker } from '../CheckboxListPicker';
import { args, argTypes } from './config';

const meta: Meta<typeof CheckboxListPicker> = {
    title: 'Form Elements/CheckboxListPicker/Features',
    tags: ['!autodocs'],
    component: CheckboxListPicker,
    args,
    argTypes,
};

export default meta;

const ControlledValueStory: StoryFn<CheckboxListPickerProps<string>> = ({
    values: defaultValues,
    onChange,
    ...props
}) => {
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

export const Disabled: StoryFn<CheckboxListPickerProps<string>> = props => <ControlledValueStory {...props} />;

Disabled.parameters = {
    controls: {
        include: ['disabled'],
    },
};

Disabled.args = {
    disabled: true,
};

export const Searchable: StoryFn<CheckboxListPickerProps<string>> = props => <ControlledValueStory {...props} />;

Searchable.parameters = {
    controls: {
        include: ['searchable'],
    },
};

Searchable.args = {
    searchable: true,
};

export const EnableSelectAll: StoryFn<CheckboxListPickerProps<string>> = props => <ControlledValueStory {...props} />;

EnableSelectAll.parameters = {
    controls: {
        include: ['selectAllOption', 'selectAllOptionLabel'],
    },
};

EnableSelectAll.args = {
    selectAllOption: true,
    selectAllOptionLabel: 'Choose several countries',
};

export const ReadLabel: StoryFn<CheckboxListPickerProps<string>> = props => {
    return <ControlledValueStory {...props} />;
};

ReadLabel.parameters = {
    controls: {
        include: ['readLabel'],
    },
};

ReadLabel.args = {
    readLabel: value => {
        const map = {
            Germany: 'DEU',
            Switzerland: 'CHE',
            Poland: 'POL',
            Belgium: 'BEL',
        };

        return map[value];
    },
};

export const WithLongText: StoryFn<CheckboxListPickerProps<string>> = props => <ControlledValueStory {...props} />;

WithLongText.parameters = {
    controls: {
        include: [],
    },
};

WithLongText.args = {
    values: [],
    items: [
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit amet consectetur',
        'Lorem ipsum dolor sit amet consectetur adipisicing',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    ],
};
