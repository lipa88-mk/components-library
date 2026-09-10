import React from 'react';
import { Input } from '../../input';
import { isIntegerControl, rankWith } from '@jsonforms/core';
import merge from 'lodash/merge';
import isNil from 'lodash/isNil';
import { jsonFormsControl } from '../jsonFormsControl';
import type { InputControlElementOptions, ControlWithTextAlignmentElementOptions } from '../models';
import { FieldWrapper } from './utils';
import { useErrorsWithTouched } from '../useErrorsWithTouched';
import { useJsonFormsErrorMessage, useJsonFormsInputChange } from '../shared';

export type InputIntegerControlOptions = InputControlElementOptions & ControlWithTextAlignmentElementOptions;

export const InputIntegerControl = jsonFormsControl<unknown, InputIntegerControlOptions>(props => {
    const { config, data, id, enabled, visible, required, errors, uischema, schema, label, path, handleChange } = props;

    const appliedUiSchemaOptions = merge({}, config, uischema.options);
    const { errorsWithTouched, TouchedWrapper, isRequiredWithTouched, isTouched } = useErrorsWithTouched(
        errors,
        required
    );

    const alignment = uischema.options?.alignment || 'left';
    const textAlignStyle = {
        left: 'text-left',
        right: 'text-right',
    };

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
                    id={id}
                    type="number"
                    sizing={uischema.options?.sizing || 'md'}
                    value={inputValue}
                    className={textAlignStyle[alignment]}
                    placeholder={appliedUiSchemaOptions.placeholder}
                    pattern={schema.pattern}
                    disabled={!enabled}
                    required={isRequiredWithTouched}
                    max={schema.maximum} //ToDo: exclusiveMaximum
                    min={schema.minimum} //ToDo: exclusiveMinimum
                    step="1"
                    errorMessage={isTouched ? errorMessage || undefined : undefined}
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

export const integerControlTester = rankWith(3, isIntegerControl);
