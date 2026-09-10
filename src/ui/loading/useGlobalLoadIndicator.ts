import { useEffect } from 'react';
import { useLoadingContext } from './useLoadingContext';

export const useGlobalLoadIndicator = (isLoading: boolean) => {
    const { addLoading } = useLoadingContext();

    useEffect(() => {
        let removeLoading;
        if (isLoading) {
            removeLoading = addLoading();
        }
        return () => removeLoading?.();
    }, [isLoading]);
};
