import React, { forwardRef, useEffect, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MultiSelect } from '../../MultiSelect';
import type {
    MultiSelectProps,
    MultiSelectTagProps,
    MultiDropdownPickerMeta,
    MultiDropdownPickerProps,
    MultiSelectRenderControlTagsProps,
} from '../../models';
import { args, argTypes, parameters } from '../config';
import { MultiDropdownPicker } from '../../MultiDropdownPicker';
import { Select } from '../../../select';

const meta: Meta<typeof MultiSelect> = {
    title: 'Form Elements/MultiSelect/Examples',
    component: MultiSelect,
    argTypes,
    args,
    parameters,
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

const Tag = forwardRef<HTMLSpanElement, MultiSelectTagProps<MultiDropdownPickerMeta<Currency>>>(
    ({ value, meta, children, ...props }, ref) => {
        const currency = meta?.itemsMap.get(value);
        if (!currency) {
            return null;
        }

        return (
            <MultiSelect.Tag {...props} value={value} meta={meta} ref={ref}>
                {currency.name}
            </MultiSelect.Tag>
        );
    }
);

const RenderControlTags: React.FC<MultiSelectRenderControlTagsProps<MultiDropdownPickerMeta<Currency>>> = ({
    value,
    items,
    isSelected,
    disabled,
    meta,
    onDelete,
}) => {
    const getCurrencyName = (value: string): string | null => {
        const currency = meta?.itemsMap.get(value);
        if (!currency) {
            return null;
        }

        return currency.name;
    };

    return (
        <>
            {items
                .filter(child => isSelected(child.props.value))
                .map(child => (
                    <Select.Tag
                        key={child.props.value}
                        value={value}
                        meta={meta}
                        disabled={disabled}
                        data-testid="selected-label"
                        onMouseDown={e => e.preventDefault()}
                        onDelete={() => onDelete(child.props.value)}
                    >
                        {getCurrencyName(child.props.value)}
                    </Select.Tag>
                ))}
        </>
    );
};

const filterOption: MultiDropdownPickerProps<Currency>['filterOption'] = (currency, input) =>
    currency.name.toLowerCase().includes(input.toLowerCase()) ||
    currency.acronym.toLowerCase().includes(input.toLowerCase());

const readLabel: MultiDropdownPickerProps<Currency>['readLabel'] = currency => `${currency.name} (${currency.acronym})`;
const readValue: MultiDropdownPickerProps<Currency>['readValue'] = currency => currency.id;

export const Currency: StoryFn<MultiSelectProps> = () => {
    const [value, setValue] = useState<Currency[]>([]);

    return (
        <MultiDropdownPicker
            value={value}
            items={data}
            searchable
            placeholder="Select currency"
            readLabel={readLabel}
            readValue={readValue}
            filterOption={filterOption}
            components={{ Tag, RenderControlTags }}
            onChange={setValue}
        />
    );
};

export default meta;
