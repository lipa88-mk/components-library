import React from 'react';
import { MultiDropdownPicker, type MultiDropdownPickerProps, type MultiSelectSize } from '../../multi-select';
import { hasType, rankWith, schemaMatches } from '@jsonforms/core';
import merge from 'lodash/merge';
import { jsonFormsControl } from '../jsonFormsControl';
import type { ControlWithPlaceholderElementOptions, OneOfOption } from '../models';
import { isMatchDataType } from '../helpers';
import { FieldWrapper, getMultiselectComponents } from './utils';
import { useErrorsWithTouched } from '../useErrorsWithTouched';
import { useJsonFormsErrorMessage, useJsonFormsInputChange } from '../shared';
import isEqual from 'lodash/isEqual';

export type MultiSelectOneOfControlOptions = ControlWithPlaceholderElementOptions & {
    showSelectedTags?: boolean;
    showSelectControls?: boolean;
    showSelectedItems?: boolean;
    searchable?: boolean;
    sizing?: MultiSelectSize;
    onChangeStrategy?: 'input' | 'blur';
    debounceMs?: number;
};

export const MultiSelectOneOfControl = jsonFormsControl<unknown, MultiSelectOneOfControlOptions>(props => {
    const { config, data, id, enabled, visible, uischema, required, errors, schema, label, path, handleChange } = props;
    const appliedUiSchemaOptions = merge({}, config, uischema.options);

    const oneOfList: OneOfOption[] = (() => {
        if (!(!Array.isArray(schema.items) && schema.items && Array.isArray(schema.items.oneOf))) {
            return [];
        } else {
            return schema.items.oneOf as unknown as OneOfOption[];
        }
    })();

    const value =
        isMatchDataType<unknown[]>(data, 'object') && Array.isArray(data)
            ? data.map(
                  item =>
                      oneOfList.find(el => el.const === item) || {
                          title: String(item),
                          const: item,
                      }
              )
            : undefined;

    const { errorsWithTouched, TouchedWrapper, isTouched } = useErrorsWithTouched(errors);

    const { inputValue, handleInputBlur, handleInputChange } = useJsonFormsInputChange({
        value: value || [],
        isValueEqual: isEqual,
        debounceMs: appliedUiSchemaOptions.debounceMs,
        onChangeStrategy: appliedUiSchemaOptions.onChangeStrategy,
        onValueChange: newValue => {
            handleChange(path, newValue && newValue.length > 0 ? newValue.map(v => v.const) : undefined);
        },
    });

    const errorMessage = useJsonFormsErrorMessage({
        valueToValidate: inputValue && inputValue.length > 0 ? inputValue : undefined,
        path,
        defaultError: errorsWithTouched,
        onChangeStrategy: appliedUiSchemaOptions.onChangeStrategy,
    });

    if (!visible) {
        return null;
    }

    const filterOption: MultiDropdownPickerProps<OneOfOption>['filterOption'] = (item, input) => {
        if (uischema.options?.showSelectedItems === false && inputValue.includes(item)) {
            return false;
        }

        return item.title.toLowerCase().includes(input.toLowerCase());
    };

    return (
        <FieldWrapper required={required} label={label} disabled={!enabled} id={id}>
            <TouchedWrapper>
                <MultiDropdownPicker<OneOfOption>
                    components={getMultiselectComponents({
                        showSelectedTags: uischema.options?.showSelectedTags,
                        showSelectControls: uischema.options?.showSelectControls,
                        searchable: uischema.options?.searchable,
                    })}
                    value={inputValue}
                    items={oneOfList}
                    searchable={uischema.options?.searchable !== false}
                    sizing={uischema.options?.sizing || 'md'}
                    readLabel={value => value.title}
                    readValue={value => String(value.const)}
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

export const multiselectOneOfControlTester = rankWith(
    4,
    schemaMatches(
        schema =>
            hasType(schema, 'array') &&
            !Array.isArray(schema.items) &&
            !!schema.items &&
            hasType(schema.items, 'string') &&
            schema.uniqueItems === true &&
            Array.isArray(schema.items.oneOf)
    )
);
