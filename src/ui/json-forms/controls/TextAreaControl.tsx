import React from 'react';
import { jsonFormsControl } from '../jsonFormsControl';
import type { HorizontalAlignment } from '../models';
import { and, isMultiLineControl, rankWith } from '@jsonforms/core';
import { FieldWrapper } from './utils';
import merge from 'lodash/merge';
import { isMatchDataType } from '../helpers';
import { useErrorsWithTouched } from '../useErrorsWithTouched';
import { Textarea } from '../../textarea';
import { useJsonFormsErrorMessage, useJsonFormsInputChange } from '../shared';

export type TextareaControlOptions = {
    alignment?: HorizontalAlignment;
    placeholder: string;
    autoFocus?: boolean;
    rows?: number;
    resizable?: boolean;
    onChangeStrategy?: 'input' | 'blur';
    debounceMs?: number;
};

export const TextAreaControl = jsonFormsControl<unknown, TextareaControlOptions>(props => {
    const { config, data, id, enabled, visible, required, errors, uischema, schema, label, path, handleChange } = props;
    const appliedUiSchemaOptions = merge({}, config, uischema.options);
    const value = isMatchDataType<string>(data, 'string') ? data : '';

    const { minLength, maxLength, pattern } = schema;
    const { placeholder, autoFocus, alignment, rows, resizable } = appliedUiSchemaOptions;

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

    const textAlignCn: Record<HorizontalAlignment, string> = {
        left: 'text-left',
        right: 'text-right',
        center: 'text-center',
    };

    if (!visible) {
        return null;
    }

    return (
        <FieldWrapper required={required} label={label} disabled={!enabled} id={id}>
            <TouchedWrapper>
                <Textarea
                    id={id}
                    value={inputValue}
                    className={textAlignCn[alignment || 'left']}
                    placeholder={placeholder}
                    pattern={pattern}
                    rows={rows}
                    resizable={typeof resizable === 'undefined' ? true : resizable}
                    errorMessage={isTouched ? errorMessage || undefined : undefined}
                    required={isRequiredWithTouched}
                    disabled={!enabled}
                    maxLength={maxLength}
                    minLength={minLength}
                    autoFocus={autoFocus}
                    onChange={e => handleInputChange(e.target.value)}
                    onBlur={e => handleInputBlur(e.target.value)}
                />
            </TouchedWrapper>
        </FieldWrapper>
    );
});

export const textAreaControlTester = rankWith(4, and(isMultiLineControl));
