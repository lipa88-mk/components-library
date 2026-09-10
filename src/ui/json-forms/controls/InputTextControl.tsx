import React from 'react';
import { Input } from '../../input';
import { isStringControl, rankWith } from '@jsonforms/core';
import { jsonFormsControl } from '../jsonFormsControl';
import merge from 'lodash/merge';
import type { InputControlElementOptions, ControlWithTextAlignmentElementOptions } from '../models';
import { isMatchDataType } from '../helpers';
import { FieldWrapper } from './utils';
import { useErrorsWithTouched } from '../useErrorsWithTouched';
import { useJsonFormsInputChange, useJsonFormsErrorMessage } from '../shared';

export type InputTextControlOptions = InputControlElementOptions & ControlWithTextAlignmentElementOptions;

export const InputTextControl = jsonFormsControl<unknown, InputTextControlOptions>(props => {
    const { config, data, id, enabled, visible, required, errors, uischema, schema, label, path, handleChange } = props;
    const maxLength = schema.maxLength;
    const minLength = schema.minLength;
    const appliedUiSchemaOptions = merge({}, config, uischema.options);
    const value = isMatchDataType<string>(data, 'string') ? data : '';
    const { errorsWithTouched, TouchedWrapper, isRequiredWithTouched, isTouched } = useErrorsWithTouched(
        errors,
        required
    );

    const { inputValue, handleInputChange, handleInputBlur } = useJsonFormsInputChange({
        value: value || '',
        isValueEqual: (a, b) => a === b,
        debounceMs: appliedUiSchemaOptions.debounceMs,
        onChangeStrategy: appliedUiSchemaOptions.onChangeStrategy,
        onValueChange: newValue => handleChange(path, newValue.length === 0 ? undefined : newValue),
    });

    const errorMessage = useJsonFormsErrorMessage({
        valueToValidate: inputValue && inputValue.length > 0 ? inputValue : undefined,
        path,
        defaultError: errorsWithTouched,
        onChangeStrategy: appliedUiSchemaOptions.onChangeStrategy,
    });

    const alignment = uischema.options?.alignment || 'left';
    const textAlignStyle = {
        left: 'text-left',
        right: 'text-right',
    };

    if (!visible) {
        return null;
    }

    return (
        <FieldWrapper required={required} label={label} disabled={!enabled} id={id}>
            <TouchedWrapper>
                <Input
                    type={'text'}
                    id={id}
                    value={inputValue}
                    sizing={uischema.options?.sizing || 'md'}
                    className={textAlignStyle[alignment]}
                    placeholder={appliedUiSchemaOptions.placeholder}
                    pattern={schema.pattern}
                    errorMessage={isTouched ? errorMessage || undefined : undefined}
                    required={isRequiredWithTouched}
                    disabled={!enabled}
                    size={appliedUiSchemaOptions.inputSize ? maxLength : undefined}
                    maxLength={appliedUiSchemaOptions.maxLength || schema.maxLength ? maxLength : undefined}
                    minLength={schema.minLength ? minLength : undefined}
                    autoFocus={appliedUiSchemaOptions.autoFocus}
                    onChange={e => handleInputChange(e.target.value)}
                    onBlur={e => handleInputBlur(e.target.value)}
                />
            </TouchedWrapper>
        </FieldWrapper>
    );
});

export const inputTextControlTester = rankWith(3, isStringControl);
