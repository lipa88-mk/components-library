import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { DatePickerProps } from '../DatePicker';
import DatePicker from '../DatePicker';
import { args, argTypes } from './config';

const meta: Meta<typeof DatePicker> = {
    title: 'Form Elements/DatePicker',
    component: DatePicker,
    argTypes,
    args,
};

export const Playground: StoryFn<DatePickerProps> = props => {
    const [value, setValue] = useState(args.value || null);
    return <DatePicker {...props} value={value} onChange={evt => setValue(evt.target.value)} />;
};
Playground.parameters = {
    controls: {
        include: ['type', 'value'],
    },
};

export default meta;
