import React from 'react';
import { Input } from '../../input';
import { isNumberControl, rankWith } from '@jsonforms/core';
import type { InputControlElementOptions, ControlWithTextAlignmentElementOptions } from '../models';
import { jsonFormsControl } from '../jsonFormsControl';
import merge from 'lodash/merge';
import isNil from 'lodash/isNil';
import { FieldWrapper, getHorizontalAlignmentClassName } from './utils';
import { useErrorsWithTouched } from '../useErrorsWithTouched';
import { useJsonFormsInputChange, useJsonFormsErrorMessage } from '../shared';

export type InputNumberControlOptions = InputControlElementOptions & ControlWithTextAlignmentElementOptions;

export const InputNumberControl = jsonFormsControl<unknown, InputNumberControlOptions>(props => {
    const { config, data, id, enabled, visible, required, errors, uischema, schema, label, path, handleChange } = props;
    const appliedUiSchemaOptions = merge({}, config, uischema.options);
    const { errorsWithTouched, TouchedWrapper, isRequiredWithTouched, isTouched } = useErrorsWithTouched(
        errors,
        required
    );

    const { inputValue, handleInputChange, handleInputBlur } = useJsonFormsInputChange({
        value: !isNil(data) ? String(data) : '',
        isValueEqual: (a, b) => Number(a) === Number(b),
        debounceMs: appliedUiSchemaOptions.debounceMs,
        onChangeStrategy: appliedUiSchemaOptions.onChangeStrategy,
        onValueChange: newValue => {
            if (newValue.length === 0 || isNil(newValue)) {
                handleChange(path, undefined);
                return;
            }

            const formattedNumber = Number(newValue);

            if (!isNaN(formattedNumber)) {
                handleChange(path, formattedNumber);
            }
        },
    });

    const errorMessage = useJsonFormsErrorMessage({
        defaultError: errorsWithTouched,
        valueToValidate: inputValue && inputValue.length > 0 && !isNil(inputValue) ? Number(inputValue) : undefined,
        path,
        onChangeStrategy: appliedUiSchemaOptions.onChangeStrategy,
    });

    if (!visible) {
        return null;
    }

    return (
        <FieldWrapper required={required} label={label} disabled={!enabled} id={id}>
            <TouchedWrapper>
                <Input
                    type="number"
                    id={id}
                    value={inputValue}
                    sizing={uischema.options?.sizing || 'md'}
                    className={getHorizontalAlignmentClassName(uischema.options?.alignment)}
                    placeholder={appliedUiSchemaOptions.placeholder}
                    required={isRequiredWithTouched}
                    disabled={!enabled}
                    errorMessage={isTouched ? errorMessage || undefined : undefined}
                    max={schema.maximum} //ToDo: exclusiveMaximum
                    min={schema.minimum} //ToDo: exclusiveMinimum
                    step={schema.multipleOf}
                    autoFocus={appliedUiSchemaOptions.autoFocus}
                    integerArrowButtons={appliedUiSchemaOptions.arrowButtons || false}
                    enableInternalValidation={false}
                    onChange={e => handleInputChange(e.target.value)}
                    onBlur={e => handleInputBlur(e.target.value)}
                />
            </TouchedWrapper>
        </FieldWrapper>
    );
});

export const numberControlTester = rankWith(3, isNumberControl);
