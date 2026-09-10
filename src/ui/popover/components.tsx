import React, { forwardRef } from 'react';
import type { PopoverContentProps, PopoverItemProps, PopoverListProps } from './models';
import { usePopoverContext } from './popover-context';
import { FloatingList, useListItem, useMergeRefs } from '@floating-ui/react';
import { classes } from '../../utils';

export const List = forwardRef<HTMLUListElement, PopoverListProps>((props, ref) => {
    const { listElementsRef } = usePopoverContext();

    return (
        <FloatingList elementsRef={listElementsRef || { current: [] }}>
            <ul {...props} ref={ref} />
        </FloatingList>
    );
});

export const Item = forwardRef<HTMLLIElement, PopoverItemProps>(
    ({ className, disabled = false, onSelect, onClick, onKeyDown, ...props }, propRef) => {
        const { activeIndex } = usePopoverContext();
        const { ref: listItemRef, index } = useListItem();
        const ref = useMergeRefs(disabled ? [propRef] : [listItemRef, propRef]);

        const isActive = activeIndex === index;

        const handleClick: React.MouseEventHandler<HTMLLIElement> = e => {
            onClick?.(e);
            onSelect?.();
        };

        const handleKeyDown: React.KeyboardEventHandler<HTMLLIElement> = e => {
            onKeyDown?.(e);
            if (onSelect !== undefined && e.key === 'Enter') {
                e.preventDefault();
                onSelect();
            }
        };

        return (
            <li
                {...props}
                ref={ref}
                tabIndex={disabled || !isActive ? -1 : 0}
                role="button"
                className={classes(
                    'py-2 px-3 text-sm transition-colors rounded-md',
                    disabled
                        ? 'text-fg-disabled pointer-events-none touch-none'
                        : 'text-fg-default hover:text-accent-hover hover:bg-accent-container-soft focus:text-accent-hover focus:bg-accent-container-soft',
                    className
                )}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
            />
        );
    }
);

export const Content = forwardRef<HTMLDivElement, PopoverContentProps>(({ className, children, ...props }, ref) => {
    const context = usePopoverContext();

    return (
        <div
            {...props}
            ref={ref}
            className={classes('min-w-60 py-2 px-3 ring-1 ring-border-soft shadow-md rounded-md bg-bg-page', className)}
        >
            {typeof children === 'function' ? children(context) : children}
        </div>
    );
});
