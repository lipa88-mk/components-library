import type { UseTransitionStylesProps } from '@floating-ui/react';

export const TRANSITION_OPTIONS: UseTransitionStylesProps = {
    duration: 150,
    initial: ({ side }) => ({
        opacity: 0,
        transform: side === 'top' || side === 'bottom' ? 'scaleY(0.95)' : 'scaleX(0.95)',
    }),
};
