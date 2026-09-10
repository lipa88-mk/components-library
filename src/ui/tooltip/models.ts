import type React from 'react';
import type { Placement } from '@floating-ui/react';

export type TooltipProps = React.PropsWithChildren<{
    title: React.ReactNode;
    placement?: Placement;
    showArrow?: boolean;
    className?: string;
    disableHoverListener?: boolean;
    disableFocusListener?: boolean;
    disableClickListener?: boolean;
    disableInteractive?: boolean;
    enterDelay?: number;
    leaveDelay?: number;
    renderReferenceElement?: (
        props: React.HTMLAttributes<HTMLElement> & {
            ref: (node: HTMLElement | null) => void;
        }
    ) => React.ReactElement;
}>;
