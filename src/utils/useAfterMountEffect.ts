import { type DependencyList, type EffectCallback, useEffect, useRef } from 'react';

export const useAfterMountEffect = (effect: EffectCallback, deps?: DependencyList) => {
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            effect();
        }

        isMounted.current = true;
    }, deps);
};
