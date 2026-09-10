import type { FC } from 'react';
import React from 'react';
import { range } from '../../utils';
import SkeletonRow from '../skeleton-row/SkeletonRow';

export interface Props {
    lines?: number;
}

const SkeletonList: FC<Props> = React.memo(({ lines = 8 }) => (
    <div role="status" aria-label="Loading" className={'flex flex-col space-y-2 w-full'} data-testid="skeleton-list">
        {range(1, lines).map(i => (
            <SkeletonRow key={i} />
        ))}
    </div>
));

export default SkeletonList;
