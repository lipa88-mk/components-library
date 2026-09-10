import { useContext } from 'react';
import { LoadingContext } from './context';

export const useLoadingContext = () => {
    return useContext(LoadingContext);
};
