import type { FC } from 'react';
import React, { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { Spinner } from './Spinner';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useDeferredFunction, useRerender } from '../../utils';

export type LoadingProps = {
    isLoading?: boolean;
    message?: string;
};

export const DEFAULT_MIN_LOADER_VISIBILITY = 1500;

export const Loading: FC<LoadingProps> = ({ message = 'Loading data...', isLoading = true }) => {
    const rerender = useRerender();
    const [timerIsRunning, deferredRerender] = useDeferredFunction(rerender, DEFAULT_MIN_LOADER_VISIBILITY);

    const isVisible = timerIsRunning || isLoading;

    useEffect(() => {
        if (isLoading) {
            deferredRerender();
        }
    }, [isLoading]);

    return (
        <Transition
            as="div"
            show={isVisible}
            enter="transform transition duration-500 sm:duration-700"
            enterFrom="translate-y-full opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transform transition duration-500 sm:duration-700 "
            leaveFrom="translate-y-100"
            leaveTo="translate-y-full opacity-0"
            className={
                'pointer-events-none fixed z-50 left-2 bottom-2 w-56 rounded-sm px-5 py-3 bg-slate-700 text-white text-base font-semibold flex justify-between items-center'
            }
            role={'note'}
            aria-label={'loading'}
            data-testid={'waiter'}
        >
            <span>{message}</span>

            {isLoading ? (
                <Spinner data-testid={'spinner'} className={'animate-spin-slow w-6 h-6 text-amber-300'} />
            ) : (
                <CheckIcon data-testid={'completed'} className={'w-6 h-6 text-emerald-300'} />
            )}
        </Transition>
    );
};
