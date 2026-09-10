import React, { forwardRef, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Select } from '../../Select';
import type { SelectOptionProps, SelectProps } from '../../models';
import { args, argTypes } from '../config';

const meta: Meta<typeof Select> = {
    title: 'Form Elements/Select/Examples',
    component: Select,
    argTypes,
    args,
};

type Currency = {
    id: string;
    name: string;
    acronym: string;
};

const data: Currency[] = [
    { id: '1', name: 'United States Dollar', acronym: 'USD' },
    { id: '2', name: 'Euro', acronym: 'EUR' },
    { id: '3', name: 'Japanese Yen', acronym: 'JPY' },
    { id: '4', name: 'British Pound', acronym: 'GBP' },
    { id: '5', name: 'Australian Dollar', acronym: 'AUD' },
    { id: '6', name: 'Canadian Dollar', acronym: 'CAD' },
    { id: '7', name: 'Swiss Franc', acronym: 'CHF' },
    { id: '8', name: 'Chinese Yuan', acronym: 'CNY' },
    { id: '9', name: 'Swedish Krona', acronym: 'SEK' },
    { id: '10', name: 'New Zealand Dollar', acronym: 'NZD' },
];

const MyOption = forwardRef<HTMLLIElement, SelectOptionProps<Currency>>(({ value, ...props }, ref) => (
    <Select.Option {...props} value={value} ref={ref}>
        {value.name} ({value.acronym})
    </Select.Option>
));

const filterOption: SelectProps<Currency>['filterOption'] = (currency, input) =>
    currency.name.toLowerCase().includes(input.toLowerCase()) ||
    currency.acronym.toLowerCase().includes(input.toLowerCase());

export const Currency: StoryFn<SelectProps> = () => {
    const [value, setValue] = useState<Currency | null>(null);

    return (
        <Select
            value={value}
            placeholder="Select currency"
            filterOption={filterOption}
            components={{ Option: MyOption }}
            onChange={setValue}
        >
            {data.map(item => (
                <Select.Item key={item.id} value={item}>
                    {item.name}
                </Select.Item>
            ))}
        </Select>
    );
};

export default meta;
