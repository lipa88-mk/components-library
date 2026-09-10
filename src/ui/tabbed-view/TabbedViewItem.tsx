import React from 'react';
import { classes } from '../../utils';
import { type TabbedViewItemProps, tabSizes } from './models';

export const TabbedViewItem: React.FC<TabbedViewItemProps> = ({
    tab,
    id,
    isSelected,
    iconOnly,
    fullWidth,
    mode,
    iconPosition,
    size,
    onSelect,
}) => {
    return (
        <button
            type={'button'}
            key={id}
            disabled={tab.disable}
            data-testid={'tab-button'}
            role="tab"
            aria-current={isSelected ? 'page' : undefined}
            onClick={onSelect}
            className={classes(
                'transition duration-200 shrink-0 text-sm font-medium text-fg-soft focus:outline-hidden ',
                'flex justify-start items-center gap-2 overflow-hidden',
                iconOnly && 'justify-center',
                'border-2 border-transparent',

                !fullWidth && mode === 'horizontal' && 'max-w-[200px]',
                fullWidth && mode === 'horizontal' && 'grow max-w-full justify-center',
                mode === 'vertical' && 'grow max-w-[300px]',

                iconPosition === 'left' && 'flex-row',
                iconPosition === 'right' && 'flex-row-reverse',
                iconPosition === 'top' && 'flex-col',
                iconPosition === 'bottom' && 'flex-col-reverse',

                iconOnly ? tabSizes[mode].iconOnly[size] : tabSizes[mode].default[size],

                'hover:text-accent-default focus:text-fg-default focus:outline focus:-outline-offset-2 focus:outline-2 focus:outline-accent-default',

                isSelected &&
                    `${mode === 'horizontal' ? 'border-b-accent-hover' : 'border-l-accent-hover'}  text-accent-hover `,

                tab.disable === true && 'pointer-events-none cursor-default text-fg-disabled'
            )}
        >
            {tab.Icon && <tab.Icon className={'shrink-0 h-4 w-4'} />}
            <span
                className={classes(
                    fullWidth && mode === 'horizontal' && 'truncate text-center',
                    !fullWidth && mode === 'horizontal' && 'max-w-full grow truncate text-left',
                    mode === 'vertical' && 'max-w-full grow text-left line-clamp-1',
                    iconOnly && 'sr-only'
                )}
            >
                {tab.title}
            </span>
        </button>
    );
};
