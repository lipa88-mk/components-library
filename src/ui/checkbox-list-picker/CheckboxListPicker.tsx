import type { FC } from 'react';
import React, { useState } from 'react';
import { classes, noop } from '../../utils';
import { Checkbox } from '../checkbox';
import { Input } from '../input';

export type CheckboxListPickerProps<T> = {
    values?: T[];
    items: T[];
    onChange: (i: T) => void;
    disabled?: boolean;
    readValue?: (i: T) => string;
    readLabel?: (i: T) => string;
    className?: string;
    searchable?: boolean;
    selectAllOption?: boolean;
    selectAllOptionLabel?: string;
};

export const CheckboxListPicker: FC<CheckboxListPickerProps<any>> = ({
    values = [],
    items = [],
    onChange = noop,
    readValue = i => String(i),
    readLabel = i => String(i),
    disabled = false,
    searchable = false,
    selectAllOption = false,
    selectAllOptionLabel = 'Select all',
    className,
}) => {
    const [search, setSearch] = useState('');
    const selectedValues = values.map(readValue);
    const getSelectAllValue = values => ({
        checked: values.length === items.length,
        indeterminate: !!values.length && values.length !== items.length,
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = e.target;
        const newValues = checked
            ? [...values, items.find(i => readValue(i) === value)!]
            : values.filter(i => readValue(i) !== value);
        onChange(newValues);
        setSelectAll(getSelectAllValue(newValues));
    };

    const filteredItems = React.useMemo(() => {
        if (!search) {
            return items;
        }
        return items.filter(i => readLabel(i).toLowerCase().includes(search.toLowerCase()));
    }, [search, items, readLabel]);

    const [selectAll, setSelectAll] = useState(getSelectAllValue(values));
    const handleSelectAllChange = () => {
        if (values.length === items.length) {
            setSelectAll({ checked: false, indeterminate: false });
            onChange([]);
        } else {
            setSelectAll({ checked: true, indeterminate: false });
            onChange(items);
        }
    };

    return (
        <div className={'h-full flex-col gap-2 overflow-y-hidden p-1'}>
            {searchable && (
                <Input
                    placeholder={'Search'}
                    type={'search'}
                    className={'mb-4'}
                    onChange={e => setSearch(e.target.value)}
                />
            )}

            {selectAllOption && !search && (
                <Checkbox
                    label={selectAllOptionLabel}
                    checked={selectAll.checked}
                    indeterminate={selectAll.indeterminate}
                    onChange={handleSelectAllChange}
                    disabled={disabled}
                />
            )}

            <ul className={classes({ 'pl-7': selectAllOption }, className)}>
                {filteredItems.map(item => (
                    <li key={readValue(item)} data-testid={'list-item'} className={'cursor-pointer truncate py-0.5'}>
                        <Checkbox
                            label={readLabel(item)}
                            checked={selectedValues.includes(readValue(item))}
                            onChange={handleChange}
                            value={readValue(item)}
                            disabled={disabled}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
