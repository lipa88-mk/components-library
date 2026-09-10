import React from 'react';
import { FieldWrapper } from './utils';
import { and, hasType, optionIs, rankWith, schemaMatches } from '@jsonforms/core';
import { jsonFormsControl } from '../jsonFormsControl';
import type { ControlWithFormatElementOptions, ControlWithLayoutElementOptions } from '../models';
import { Alert } from '../../alerts';
import { CheckboxListPicker } from '../../checkbox-list-picker';
import { isMatchDataType } from '../helpers';

export type CheckboxListControlOptions = ControlWithFormatElementOptions & ControlWithLayoutElementOptions;

export const CheckboxListControl = jsonFormsControl<unknown, CheckboxListControlOptions>(props => {
    const { data, id, enabled, schema, uischema, required, visible, errors, label, path, handleChange } = props;

    if (!visible) {
        return null;
    }

    if (!(!Array.isArray(schema.items) && !!schema.items && Array.isArray(schema.items.enum))) {
        return null;
    }
    const items = schema.items?.enum || [];
    const values = isMatchDataType<unknown[]>(data, 'object') && Array.isArray(data) ? data : undefined;

    const layoutStyles = uischema.options?.layout === 'horizontal' ? 'flex flex-wrap gap-4' : '';

    return (
        <FieldWrapper required={required} label={label} disabled={!enabled} id={id}>
            {errors && <Alert theme="danger" message={errors} show={true} />}
            <CheckboxListPicker
                values={values}
                items={items}
                searchable={false}
                selectAllOption={false}
                disabled={!enabled}
                className={layoutStyles}
                onChange={ev => handleChange(path, ev)}
            />
        </FieldWrapper>
    );
});

export const checkboxListControlTester = rankWith(
    7,
    and(
        schemaMatches(
            schema =>
                hasType(schema, 'array') &&
                !Array.isArray(schema.items) &&
                !!schema.items &&
                hasType(schema.items, 'string') &&
                schema.uniqueItems === true &&
                Array.isArray(schema.items.enum)
        ),
        optionIs('format', 'checkbox')
    )
);
