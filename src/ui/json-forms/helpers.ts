import type React from 'react';
import { useRef } from 'react';
import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import isNil from 'lodash/isNil';
import type { UseJsonFormFieldDebouncedChangeOptions, UseJsonFormFieldDebounceValue } from './models';

export function isMatchDataType<T>(
    data: unknown,
    expectedType: 'string' | 'number' | 'boolean' | 'symbol' | 'object' | 'function'
): data is T {
    const type = typeof data;

    if (type !== 'undefined' && type !== expectedType) {
        // eslint-disable-next-line no-console
        console.warn(`JSONForms: Expected type "${expectedType}", but received type "${type}".`);
        return false;
    }

    return true;
}

export function parseCssProperty(value: unknown): string | number | undefined {
    if (typeof value === 'number') {
        return value;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            return Number(value);
        }

        return value;
    }

    if (typeof value !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn(
            `JSONForms: Expected a valid css-property (string or number), but received type "${typeof value}".`
        );
    }
}

/**
 * @deprecated
 * This hook is no longer supported. Please use the "useJsonFormsInputChange" hook.
 *
 * The approach was taken from the material-renderers
 * https://github.com/eclipsesource/jsonforms/blob/master/packages/material-renderers/src/util/debounce.ts
 */
export const useJsonFormFieldDebouncedChange = ({
    handleChange,
    defaultValue = '',
    data,
    path,
    eventToValue,
    timeout = 300,
    dataToInputValue,
}: UseJsonFormFieldDebouncedChangeOptions): [UseJsonFormFieldDebounceValue, React.ChangeEventHandler] => {
    const [input, setInput] = useState<UseJsonFormFieldDebounceValue>(data ?? defaultValue);

    useEffect(() => {
        if (dataToInputValue !== undefined) {
            setInput(dataToInputValue(data, input) ?? defaultValue);
            return;
        }
        setInput(data ?? defaultValue);
    }, [data, dataToInputValue]);

    const debouncedUpdate = useCallback(
        debounce((newValue: UseJsonFormFieldDebounceValue) => handleChange(path, newValue), timeout),
        [handleChange, path, timeout]
    );

    const onChange = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = eventToValue(ev);
            setInput(newValue ?? defaultValue);
            debouncedUpdate(newValue);
        },
        [debouncedUpdate, eventToValue]
    );

    return [input, onChange];
};

/**
 * @deprecated
 * This hook is no longer supported. Please use the "useJsonFormsInputChange" hook.
 */
export const useJsonFormNumericFieldDebouncedChangeCb = (
    onChange: UseJsonFormFieldDebouncedChangeOptions['handleChange']
) => {
    const onChangeRef = useRef<typeof onChange>(onChange);
    onChangeRef.current = onChange;

    return useCallback<UseJsonFormFieldDebouncedChangeOptions['handleChange']>((path, value) => {
        // If the input value is empty or invalid, reset the JSON form state to undefined.
        // Note: In most browsers, if the input value is invalid (e.g., "2e"), the onChange event will emit an empty string in event.target.value
        if (isNil(value)) {
            onChangeRef.current(path, undefined);
            return;
        }

        const formattedNumber = Number(value);
        if (!isNaN(formattedNumber)) {
            onChangeRef.current(path, formattedNumber);
        }
    }, []);
};

/**
 * @deprecated
 * This function is no longer supported. Please use the "shouldUpdateInternalValue" function in the "useJsonFormsInputChange" hook.
 */
export const numericJsonFormDataToInputValue: UseJsonFormFieldDebouncedChangeOptions['dataToInputValue'] = (
    value,
    inputValue
) => {
    // If the JSON form state is 200 and the input value is "2e2", they are equivalent. No need to change input value.
    if (Number(value) === Number(inputValue)) {
        return inputValue;
    }

    return value;
};
