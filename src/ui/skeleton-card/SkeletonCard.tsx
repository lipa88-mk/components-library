import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { classes } from '../../utils';
import SkeletonRow from '../skeleton-row/SkeletonRow';

export interface Props {
    loading: boolean;
    className?: string;
    rows?: 1 | 2;
}

export const SkeletonCard: FC<PropsWithChildren<Props>> = ({ loading, className = '', rows = 2, children }) => {
    if (!loading) return <>{children}</>;

    return (
        <div
            data-testid={'skeleton-card'}
            role="status"
            aria-label="Loading"
            className={classes('animate-pulse flex flex-col gap-4 bg-bg-page p-5 rounded-lg shadow-xs ', className)}
        >
            {rows === 2 && <SkeletonRow />}
            <SkeletonRow />
        </div>
    );
};

export default SkeletonCard;
