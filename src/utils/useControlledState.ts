import { useCallback, useRef, useState } from 'react';

interface UseControlledStateProps<T = unknown> {
    value: T | undefined;
    defaultValue: T | undefined;
    onChange?: (value: T) => void;
}

export const useControlledState = <T = unknown>({
    value: controlled,
    defaultValue,
    onChange,
}: UseControlledStateProps<T>): [T, (newValue: T | ((prevValue: T) => T)) => void] => {
    const onChangeRef = useRef<typeof onChange>(onChange);
    onChangeRef.current = onChange;

    const { current: isControlled } = useRef(controlled !== undefined);
    const [valueState, setValueState] = useState(defaultValue);
    const value = isControlled ? controlled : valueState;

    const setValue = useCallback((newValue: T) => {
        onChangeRef.current?.(newValue);

        if (!isControlled) {
            setValueState(newValue);
        }
    }, []);

    return [value as T, setValue as (newValue: T | ((prevValue: T) => T)) => void];
};
