import type { ArgTypes } from '@storybook/react';
import type { DatePickerProps } from '../DatePicker';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<DatePickerProps> = {
    value: {
        type: 'string',
        defaultValue: '',
    },
    type: {
        defaultValue: 'date',
        control: { type: 'radio' },
        options: ['date', 'time', 'datetime-local'],
    },
};

export const args: Partial<DatePickerProps> = {
    value: '2020-06-25T23:08:42+02:00',
    type: 'date',
    onChange: action('onChange'),
};
