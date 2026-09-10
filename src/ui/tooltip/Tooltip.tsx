import React from 'react';
import type { FC } from 'react';
import { useState, useRef } from 'react';
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    useHover,
    useFocus,
    useDismiss,
    useRole,
    useInteractions,
    FloatingArrow,
    arrow,
    hide,
    useClick,
} from '@floating-ui/react';
import { Portal } from '../portal';
import { getAlignment } from '@floating-ui/utils';
import { classes } from '../../utils';
import type { TooltipProps } from './models';

const ARROW_EDGE_SHIFT = 8;
const ARROW_WIDTH = 10;

export const Tooltip: FC<TooltipProps> = ({
    children,
    title,
    placement = 'top',
    showArrow = false,
    className,
    disableHoverListener,
    disableFocusListener,
    disableClickListener = true,
    disableInteractive,
    enterDelay = 1000,
    leaveDelay = 0,
    renderReferenceElement,
    ...childProps
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const arrowRef = useRef(null);
    const arrowOffset = getAlignment(placement) ? ARROW_EDGE_SHIFT : null;

    const { refs, floatingStyles, context, middlewareData } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: placement,
        whileElementsMounted: autoUpdate,
        strategy: 'fixed',
        middleware: [
            offset(8),
            flip({
                fallbackAxisSideDirection: 'start',
            }),
            hide(),
            shift(),
            arrow({
                element: arrowRef,
            }),
        ],
    });

    // Event listeners to change the open state
    const hover = useHover(context, {
        move: false,
        enabled: !disableInteractive && !disableHoverListener,
        restMs: 400,
        delay: {
            open: enterDelay,
            close: leaveDelay,
        },
    });

    const focus = useFocus(context, {
        enabled: !disableInteractive && !disableFocusListener,
    });

    const click = useClick(context, {
        enabled: !disableInteractive && !disableClickListener,
    });

    const dismiss = useDismiss(context);
    const role = useRole(context, { role: 'tooltip' });
    const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, click, dismiss, role]);

    const reference =
        renderReferenceElement !== undefined ? (
            renderReferenceElement({
                ...getReferenceProps(),
                ref: refs.setReference,
                children,
                className,
                ...childProps,
            })
        ) : (
            <div {...getReferenceProps()} ref={refs.setReference} className={classes('inline-flex', className)}>
                {children}
            </div>
        );

    if (!title) {
        return reference;
    }

    return (
        <>
            {reference}
            {isOpen && (
                <Portal>
                    <div
                        ref={refs.setFloating}
                        style={{
                            ...floatingStyles,
                            visibility: middlewareData.hide?.referenceHidden ? 'hidden' : 'visible',
                        }}
                        {...getFloatingProps()}
                        className="p-2 min-h-8 min-w-8 max-w-[200px] bg-slate-600 shadow-md rounded-sm text-white text-xs break-words"
                    >
                        {title}
                        {showArrow && (
                            <FloatingArrow
                                className="fill-slate-600"
                                staticOffset={arrowOffset}
                                ref={arrowRef}
                                context={context}
                                width={ARROW_WIDTH}
                            />
                        )}
                    </div>
                </Portal>
            )}
        </>
    );
};
