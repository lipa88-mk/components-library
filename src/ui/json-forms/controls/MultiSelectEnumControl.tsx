import React from 'react';
import { MultiDropdownPicker, type MultiSelectSize, type MultiDropdownPickerProps } from '../../multi-select';
import { hasType, rankWith, schemaMatches } from '@jsonforms/core';
import merge from 'lodash/merge';
import { jsonFormsControl } from '../jsonFormsControl';
import type { ControlWithPlaceholderElementOptions } from '../models';
import { isMatchDataType } from '../helpers';
import { FieldWrapper, getMultiselectComponents } from './utils';
import { useErrorsWithTouched } from '../useErrorsWithTouched';
import { useJsonFormsErrorMessage, useJsonFormsInputChange } from '../shared';
import isEqual from 'lodash/isEqual';

export type MultiSelectEnumControlOptions = ControlWithPlaceholderElementOptions & {
    showSelectedTags?: boolean;
    showSelectControls?: boolean;
    showSelectedItems?: boolean;
    searchable?: boolean;
    sizing?: MultiSelectSize;
    onChangeStrategy?: 'input' | 'blur';
    debounceMs?: number;
};

export const MultiSelectEnumControl = jsonFormsControl<unknown, MultiSelectEnumControlOptions>(props => {
    const { config, data, id, enabled, visible, uischema, required, errors, schema, label, path, handleChange } = props;
    const value = isMatchDataType<string[]>(data, 'object') && Array.isArray(data) ? data : undefined;
    const appliedUiSchemaOptions = merge({}, config, uischema.options);

    const { inputValue, handleInputBlur, handleInputChange } = useJsonFormsInputChange({
        value: value || [],
        isValueEqual: isEqual,
        debounceMs: appliedUiSchemaOptions.debounceMs,
        onChangeStrategy: appliedUiSchemaOptions.onChangeStrategy,
        onValueChange: newValue => handleChange(path, newValue && newValue.length > 0 ? newValue : undefined),
    });

    const { errorsWithTouched, TouchedWrapper, isTouched } = useErrorsWithTouched(errors, required);

    const errorMessage = useJsonFormsErrorMessage({
        valueToValidate: inputValue && inputValue.length > 0 ? inputValue : undefined,
        path,
        defaultError: errorsWithTouched,
        onChangeStrategy: appliedUiSchemaOptions.onChangeStrategy,
    });

    if (!(!Array.isArray(schema.items) && !!schema.items && Array.isArray(schema.items.enum))) {
        return null;
    }

    if (!visible) {
        return null;
    }

    const items = schema.items.enum;

    const filterOption: MultiDropdownPickerProps<string>['filterOption'] = (item, input) => {
        if (uischema.options?.showSelectedItems === false && inputValue.includes(item)) {
            return false;
        }

        return item.toLowerCase().includes(input.toLowerCase());
    };

    return (
        <FieldWrapper required={required} label={label} disabled={!enabled} id={id}>
            <TouchedWrapper>
                <MultiDropdownPicker<string>
                    components={getMultiselectComponents({
                        showSelectedTags: uischema.options?.showSelectedTags,
                        showSelectControls: uischema.options?.showSelectControls,
                        searchable: uischema.options?.searchable,
                    })}
                    value={inputValue}
                    items={items}
                    sizing={uischema.options?.sizing}
                    searchable={uischema.options?.searchable !== false}
                    disabled={!enabled}
                    errorMessage={isTouched ? errorMessage || undefined : undefined}
                    placeholder={appliedUiSchemaOptions.placeholder}
                    onChange={handleInputChange}
                    filterOption={filterOption}
                    onChangeOpen={isOpen => {
                        if (!isOpen) {
                            handleInputBlur(inputValue);
                        }
                    }}
                />
            </TouchedWrapper>
        </FieldWrapper>
    );
});

export const multiselectEnumControlTester = rankWith(
    4,
    schemaMatches(
        schema =>
            hasType(schema, 'array') &&
            !Array.isArray(schema.items) &&
            !!schema.items &&
            hasType(schema.items, 'string') &&
            schema.uniqueItems === true &&
            Array.isArray(schema.items.enum)
    )
);
