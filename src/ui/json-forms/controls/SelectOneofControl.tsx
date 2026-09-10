import React from 'react';
import { isOneOfEnumControl, rankWith } from '@jsonforms/core';
import type { ControlWithPlaceholderElementOptions, OneOfOption } from '../models';
import { jsonFormsControl } from '../jsonFormsControl';
import { DropdownPicker, type SelectSize } from '../../select';
import { FieldWrapper, getSelectComponents } from './utils';
import merge from 'lodash/merge';
import { useErrorsWithTouched } from '../useErrorsWithTouched';

type SelectOneOfControlOptions = ControlWithPlaceholderElementOptions & {
    showSelectedTags?: boolean;
    showSelectControls?: boolean;
    searchable?: boolean;
    sizing?: SelectSize;
};

export const SelectOneOfControl = jsonFormsControl<unknown | undefined, SelectOneOfControlOptions>(props => {
    const { config, data, id, enabled, visible, uischema, required, errors, schema, label, path, handleChange } = props;
    const appliedUiSchemaOptions = merge({}, config, uischema.options);

    if (!visible) {
        return null;
    }

    let oneOfItems: OneOfOption[];
    if (!(Array.isArray(schema.oneOf) && !!schema.oneOf)) {
        return null;
    } else {
        oneOfItems = schema.oneOf as unknown as OneOfOption[];
    }

    const items = (oneOfItems ?? []) as unknown as OneOfOption[];

    const value = oneOfItems.find(el => el.const === data) || (data ? { const: data, title: String(data) } : null);

    const { errorsWithTouched, TouchedWrapper } = useErrorsWithTouched(errors);
    const errorsWithNoWarningWithTouched = errorsWithTouched.replace('must match exactly one schema in oneOf', '');

    return (
        <FieldWrapper required={required} label={label} disabled={!enabled} id={id}>
            <TouchedWrapper>
                <DropdownPicker<OneOfOption>
                    components={getSelectComponents({
                        showSelectedTags: uischema.options?.showSelectedTags,
                        searchable: uischema.options?.searchable,
                    })}
                    id={id}
                    value={value || null}
                    items={items}
                    sizing={uischema.options?.sizing || 'md'}
                    readLabel={value => value.title}
                    disabled={!enabled}
                    searchable={uischema.options?.searchable !== false}
                    errorMessage={errorsWithNoWarningWithTouched}
                    placeholder={appliedUiSchemaOptions.placeholder}
                    onChange={value => handleChange(path, value?.const)}
                />
            </TouchedWrapper>
        </FieldWrapper>
    );
});

export const selectOneOfControlTester = rankWith(5, isOneOfEnumControl); // rank increased to replace wider input text control
