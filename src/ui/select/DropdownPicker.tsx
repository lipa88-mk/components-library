import React from 'react';
import type { SelectProps } from './models';
import { Select } from './Select';

export type DropdownPickerProps<T> = Omit<SelectProps<T>, 'children' | 'readLabel'> & {
    items: T[];
    readLabel?: (value: T) => string;
};

export const DropdownPicker = <T = string,>({
    items,
    readLabel = item => String(item),
    ...props
}: DropdownPickerProps<T>) => (
    <div data-testid={'dropdown-picker'}>
        <Select {...props} readLabel={readLabel}>
            {items.map((item, index) => (
                <Select.Item key={readLabel?.(item) || `item_${index}`} value={item}>
                    {readLabel?.(item)}
                </Select.Item>
            ))}
        </Select>
    </div>
);
