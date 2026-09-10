import React from 'react';

export function useDeferredFunction(fn: (...args: any[]) => any, duration): [boolean, () => void] {
    const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const runFunction = () => {
        timer.current = setTimeout(() => {
            timer.current = null;
            fn();
        }, duration);
    };

    React.useEffect(
        () => () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        },
        []
    );

    return [!!timer.current, runFunction];
}
