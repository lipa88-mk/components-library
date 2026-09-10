import type { FC } from 'react';
import React from 'react';

const SkeletonRow: FC = () => (
    <div
        data-testid={'skeleton-row'}
        role="status"
        aria-label="Loading"
        className={'animate-pulse bg-border-soft rounded-lg h-4 w-full'}
    />
);

export default SkeletonRow;
