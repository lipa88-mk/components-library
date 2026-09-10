import React from 'react';
import { DatePicker } from '../../date-picker';
import { isDateControl, isDateTimeControl, isTimeControl, rankWith } from '@jsonforms/core';
import merge from 'lodash/merge';
import { jsonFormsControl } from '../jsonFormsControl';
import type { InputControlElementOptions } from '../models';
import { isMatchDataType, useJsonFormFieldDebouncedChange } from '../helpers';
import { FieldWrapper } from './utils';
import { useErrorsWithTouched } from '../useErrorsWithTouched';

export type DateControlOptions = InputControlElementOptions;

const eventToValue = (ev: React.ChangeEvent<HTMLInputElement>) =>
    ev.target.value === '' ? undefined : ev.target.value;

export const DateControl = jsonFormsControl<unknown, DateControlOptions>(props => {
    const { config, data, id, enabled, visible, required, errors, uischema, schema, label, path, handleChange } = props;

    const value = isMatchDataType<string>(data, 'string') ? data : '';
    const appliedUiSchemaOptions = merge({}, config, uischema.options);
    const { errorsWithTouched, TouchedWrapper, isRequiredWithTouched } = useErrorsWithTouched(errors, required);

    const [inputText, onChange] = useJsonFormFieldDebouncedChange({
        handleChange,
        data: value,
        path,
        eventToValue,
    });

    if (!visible) {
        return null;
    }

    let inputType;
    switch (schema.format) {
        case 'date-time':
            inputType = 'datetime-local';
            break;
        case 'time':
            inputType = 'time';
            break;
        default:
            inputType = 'date';
            break;
    }

    return (
        <FieldWrapper required={required} label={label} disabled={!enabled} id={id}>
            <TouchedWrapper>
                <DatePicker
                    id={id}
                    type={inputType}
                    value={inputText !== undefined ? String(inputText) : null}
                    sizing={uischema.options?.sizing || 'md'}
                    placeholder={appliedUiSchemaOptions.placeholder}
                    errorMessage={errorsWithTouched}
                    required={isRequiredWithTouched}
                    disabled={!enabled}
                    max={schema.maximum} //ToDo: exclusiveMaximum
                    min={schema.minimum} //ToDo: exclusiveMinimum
                    autoFocus={appliedUiSchemaOptions.autoFocus}
                    onChange={onChange}
                />
            </TouchedWrapper>
        </FieldWrapper>
    );
});

export const dateControlTester = rankWith(4, isDateControl);
export const timeControlTester = rankWith(4, isTimeControl);
export const datetimeControlTester = rankWith(4, isDateTimeControl);
