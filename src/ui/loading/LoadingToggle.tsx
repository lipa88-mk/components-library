import type { FC, PropsWithChildren } from 'react';
import React, { useState } from 'react';
import { LoadingContext } from './context';
import { Loading } from './Loading';

const getLastItem = <T,>(array: T[]) => array[array.length - 1];
type Wrapper = { message?: string };

const LoadingToggle: FC<PropsWithChildren> = ({ children }) => {
    const [loadingQueue, setLoadingQueue] = useState<Wrapper[]>([]);

    const addLoading = (message?: string) => {
        const wrapper: Wrapper = { message };
        setLoadingQueue(queue => [...queue, wrapper]);
        return () => setLoadingQueue(queue => queue.filter(it => it !== wrapper));
    };

    const isLoading = Boolean(loadingQueue.length);
    const message = getLastItem(loadingQueue)?.message;

    return (
        <LoadingContext.Provider value={{ addLoading, isLoading }}>
            {children}
            <Loading message={message} isLoading={isLoading} />
        </LoadingContext.Provider>
    );
};

export default LoadingToggle;
