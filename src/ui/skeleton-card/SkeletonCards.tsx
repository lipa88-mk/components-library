import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import type { Props } from './SkeletonCard';
import SkeletonCard from './SkeletonCard';

export interface SkeletonCardsProps extends Props {
    length: number;
}

export const SkeletonCards: FC<PropsWithChildren<SkeletonCardsProps>> = ({
    children,
    loading,
    length,
    className = '',
    rows,
}) => {
    if (!loading) return <>{children}</>;

    const cards = new Array(length).fill(null).map((_, i) => (
        <React.Fragment key={i}>
            <SkeletonCard className={className} loading={loading} rows={rows} />
        </React.Fragment>
    ));

    return (
        <div
            data-testid="skeleton-cards"
            role="status"
            aria-label="Loading"
            className={'flex flex-col items-center gap-4'}
        >
            {cards}
        </div>
    );
};

export default SkeletonCards;
