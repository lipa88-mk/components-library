import React, { forwardRef } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { classes } from '../../utils';
import type { TagsProps, TagProps } from './models';

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
    ({ className, children, onDelete, type = 'default', ...props }, ref) => {
        const isDeletable = onDelete !== undefined;
        const getTitle = () => {
            if (typeof children === 'string') {
                return children;
            }

            return undefined;
        };

        return (
            <span
                {...props}
                ref={ref}
                className={classes(
                    'min-w-8 flex items-center shrink-0 gap-1 truncate rounded-sm px-1 text-sm text-fg-default ',
                    type === 'default' && 'bg-accent-container-soft border border-accent-container-soft',
                    type === 'warning' && 'bg-warning-container-soft border border-warning-muted',
                    className
                )}
            >
                <span className="grow max-w-fit truncate cursor-default" title={getTitle()}>
                    {children}
                </span>
                {isDeletable && (
                    <button
                        type="button"
                        className="shrink-0 flex items-center justify-center text-fg-muted cursor-pointer"
                        onClick={e => {
                            e.stopPropagation();
                            onDelete();
                        }}
                    >
                        <XMarkIcon className="w-4 h-4 shrink-0" />
                    </button>
                )}
            </span>
        );
    }
);

const Root = forwardRef<HTMLDivElement, TagsProps>(({ className, ...props }, ref) => (
    <div {...props} ref={ref} className={classes('flex flex-wrap items-center justify-start gap-2', className)} />
));

export const Tags = Object.assign(Root, {
    Item: Tag,
});
