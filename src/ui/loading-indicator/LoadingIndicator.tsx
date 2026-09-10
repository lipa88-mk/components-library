import React from 'react';

/**
 * @deprecated
 */
const LoadingIndicator = () => (
    <span className="flex h-3 w-3 absolute top-0 right-0" role={'note'} aria-label={'loading'}>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
    </span>
);

export default LoadingIndicator;
