import React from 'react';
import { DropdownPicker, type SelectSize } from '../../select';
import { FieldWrapper, getSelectComponents } from './utils';
import merge from 'lodash/merge';
import { isEnumControl, rankWith } from '@jsonforms/core';
import type { ControlWithPlaceholderElementOptions } from '../models';
import { jsonFormsControl } from '../jsonFormsControl';
import { isMatchDataType } from '../helpers';
import { useErrorsWithTouched } from '../useErrorsWithTouched';

export type SelectEnumControlOptions = ControlWithPlaceholderElementOptions & {
    showSelectedTags?: boolean;
    showSelectControls?: boolean;
    searchable?: boolean;
    sizing?: SelectSize;
};

export const SelectEnumControl = jsonFormsControl<unknown, SelectEnumControlOptions>(props => {
    const { config, data, id, enabled, visible, required, errors, uischema, schema, label, path, handleChange } = props;
    const appliedUiSchemaOptions = merge({}, config, uischema.options);

    if (!visible) {
        return null;
    }

    const items = schema.enum || [];
    const value = isMatchDataType<string>(data, 'string') ? data : '';
    const { errorsWithTouched, TouchedWrapper } = useErrorsWithTouched(errors);

    const errorsWithNoWarningWithTouched = errorsWithTouched.replace('must be equal to one of the allowed values', '');

    return (
        <FieldWrapper required={required} label={label} disabled={!enabled} id={id}>
            <TouchedWrapper>
                <DropdownPicker
                    components={getSelectComponents({
                        showSelectedTags: uischema.options?.showSelectedTags,
                        searchable: uischema.options?.searchable,
                    })}
                    id={id}
                    value={value || null}
                    items={items}
                    sizing={uischema.options?.sizing || 'md'}
                    disabled={!enabled}
                    searchable={uischema.options?.searchable !== false}
                    placeholder={appliedUiSchemaOptions.placeholder}
                    errorMessage={errorsWithNoWarningWithTouched}
                    onChange={ev => handleChange(path, ev ? ev : undefined)}
                />
            </TouchedWrapper>
        </FieldWrapper>
    );
});

export const selectEnumControlTester = rankWith(5, isEnumControl); // rank increased to replace wider input text control
