import { useCallback, useRef, useState } from 'react';
import { useDebounce, useLatestRef, useAfterMountEffect } from '../../../utils';

type Options<T = unknown> = {
    value: T;
    isValueEqual: (a: T, b: T) => boolean;
    onChangeStrategy?: 'input' | 'blur';
    onValueChange: (value: T) => void;
    debounceMs?: number;
};

export const useJsonFormsInputChange = <T = unknown>({
    value: externalValue,
    debounceMs = 300,
    isValueEqual = (a, b) => a === b,
    onChangeStrategy = 'input',
    onValueChange,
}: Options<T>) => {
    const [value, setValue] = useState(externalValue);
    const latestExternalValueRef = useRef(externalValue);
    const onValueChangeLatestRef = useLatestRef(onValueChange);
    const isValueEqualLatestRef = useLatestRef(isValueEqual);

    useAfterMountEffect(() => {
        if (isValueEqualLatestRef.current(externalValue, latestExternalValueRef.current)) {
            return;
        }

        if (!isValueEqualLatestRef.current(externalValue, value)) {
            setValue(externalValue);
        }

        latestExternalValueRef.current = externalValue;
    }, [externalValue]);

    const debouncedChange = useDebounce((value: T) => onValueChangeLatestRef.current?.(value), debounceMs);

    const handleInputChange = useCallback(
        (newValue: T) => {
            setValue(newValue);

            if (onChangeStrategy === 'input') {
                debouncedChange(newValue);
            }
        },
        [externalValue, onChangeStrategy, debouncedChange]
    );

    const handleInputBlur = useCallback(
        (newValue: T) => {
            if (onChangeStrategy === 'blur' && !isValueEqualLatestRef.current(newValue, externalValue)) {
                onValueChangeLatestRef.current?.(newValue);
            }
        },
        [onChangeStrategy, externalValue]
    );

    return {
        inputValue: value,
        handleInputChange,
        handleInputBlur,
    };
};
