import React from 'react';
import { noop } from '../../utils';

export interface LoadingContextProps {
    addLoading: (message?: string) => () => void;
    isLoading: boolean;
}

export const LoadingContext = React.createContext<LoadingContextProps>({
    addLoading: () => noop,
    isLoading: false,
});
