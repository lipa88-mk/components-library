import React, { cloneElement, useRef, useState } from 'react';

import type { PopoverProps, TPopoverContext } from './models';
import { useControlledState } from '../../utils';
import {
    autoUpdate,
    offset,
    FloatingFocusManager,
    FloatingNode,
    useClick,
    useDismiss,
    useFloating,
    useFloatingNodeId,
    useFloatingParentNodeId,
    useFocus,
    useInteractions,
    useListNavigation,
    useTransitionStyles,
    flip,
} from '@floating-ui/react';
import { Portal } from '../portal';
import { PopoverContext } from './popover-context';
import { Content, List, Item } from './components';
import { TRANSITION_OPTIONS } from './popover.const';

const Root: React.FC<PopoverProps> = ({
    children,
    open: propOpen,
    defaultOpen,
    placement = 'bottom-start',
    fallbackAxisSideDirection,
    offset: offsetValue = 12,
    onChangeOpen,
}) => {
    const [open, setOpen] = useControlledState<boolean>({
        value: propOpen,
        defaultValue: defaultOpen,
        onChange: onChangeOpen,
    });
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const listElementsRef = useRef<(HTMLLIElement | null)[]>([]);

    const nodeId = useFloatingNodeId();
    const parentNodeId = useFloatingParentNodeId();
    const isNested = parentNodeId !== null;

    const { refs, floatingStyles, context } = useFloating({
        nodeId,
        open,
        placement,
        whileElementsMounted: autoUpdate,
        middleware: [
            flip({
                fallbackAxisSideDirection,
            }),
            offset(offsetValue),
        ],
        onOpenChange: setOpen,
    });

    const listNav = useListNavigation(context, {
        activeIndex,
        listRef: listElementsRef,
        nested: isNested,
        onNavigate: setActiveIndex,
    });

    const { isMounted, styles: transitionStyles } = useTransitionStyles(context, TRANSITION_OPTIONS);
    const { getFloatingProps, getReferenceProps } = useInteractions([
        useFocus(context),
        useDismiss(context),
        useClick(context),
        listNav,
    ]);

    const [trigger, content] = children;
    if (!trigger || !content) {
        return null;
    }

    const contextValue: TPopoverContext = {
        open,
        activeIndex,
        listElementsRef,
        offset: offsetValue,
        placement,
        onChangeActiveIndex: setActiveIndex,
        onChangeOpen: setOpen,
    };

    return (
        <FloatingNode id={nodeId}>
            <PopoverContext.Provider value={contextValue}>
                {cloneElement(trigger, {
                    ...getReferenceProps(),
                    ref: refs.setReference,
                })}

                {isMounted && (
                    <Portal>
                        <FloatingFocusManager
                            context={context}
                            initialFocus={-1}
                            returnFocus={isNested}
                            visuallyHiddenDismiss="Dismiss popover"
                        >
                            {cloneElement(content, {
                                ...getFloatingProps(),
                                ref: refs.setFloating,
                                role: 'dialog',
                                style: {
                                    ...transitionStyles,
                                    ...floatingStyles,
                                    ...content.props.style,
                                },
                            })}
                        </FloatingFocusManager>
                    </Portal>
                )}
            </PopoverContext.Provider>
        </FloatingNode>
    );
};

export const Popover = Object.assign(Root, {
    Content,
    List,
    Item,
});
