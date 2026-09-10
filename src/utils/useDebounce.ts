import { useEffect, useRef, useCallback } from 'react';
import { useLatestRef } from './useLatestRef';

export const useDebounce = <T extends (...args: any[]) => void>(
    callback: T,
    time: number,
    dependencies: unknown[] = []
) => {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const callbackLatestRef = useLatestRef(callback);

    useEffect(() => {
        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, []);

    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callbackLatestRef.current(...args);
                timer.current = null;
            }, time);
        },
        [time, ...dependencies]
    );
};
