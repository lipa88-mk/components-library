import React, { useMemo } from 'react';
import { noop } from '../../utils';
import type { DefaultMetaType, MultiSelectComponents, MultiSelectProps, MultiDropdownPickerProps } from './models';
import { MultiSelect } from './MultiSelect';

export const MultiDropdownPicker = <T = unknown, M extends DefaultMetaType = DefaultMetaType>({
    value,
    items,
    readValue = i => String(i),
    readLabel = i => String(i),
    meta,
    components,
    onChange = noop,
    filterOption,
    ...props
}: MultiDropdownPickerProps<T, M>) => {
    const keysValue = (value ?? []).map(readValue);
    const deprecatedValue = value
        ? value.filter(element => {
              return !items.includes(element);
          })
        : undefined;

    const itemsWithDeprecated = deprecatedValue ? [...deprecatedValue, ...items] : items;

    const itemsMap = useMemo(
        () => new Map(itemsWithDeprecated.map(val => [readValue(val), val])),
        [itemsWithDeprecated]
    );

    const handleChange: MultiSelectProps['onChange'] = keys => onChange(keys.map(key => itemsMap.get(key)!));

    const handleFilterOption: MultiSelectProps['filterOption'] = (value, _, input) => {
        if (!filterOption) {
            return false;
        }

        const item = itemsMap.get(value);
        if (!item) {
            return false;
        }

        return filterOption(item, input);
    };

    return (
        <div data-testid={'multidropdown-picker'}>
            <MultiSelect
                {...props}
                value={keysValue}
                components={components as MultiSelectComponents}
                filterOption={filterOption ? handleFilterOption : undefined}
                meta={{ ...meta, itemsMap }}
                onChange={handleChange}
            >
                {items.map(it => (
                    <MultiSelect.Item key={readValue?.(it)} value={readValue?.(it)}>
                        {readLabel?.(it)}
                    </MultiSelect.Item>
                ))}
            </MultiSelect>
        </div>
    );
};
