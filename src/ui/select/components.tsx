import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import React, { forwardRef } from 'react';
import { classes } from '../../utils';
import type {
    SelectOptionProps,
    SelectDropdownIndicatorProps,
    SelectSize,
    SelectReferenceProps,
    SelectValueContainerProps,
    SelectLoadingIndicatorProps,
    SelectPlaceholderProps,
    SelectMenuProps,
    SelectMenuBodyProps,
    SelectMenuListProps,
    SelectHeaderProps,
    SelectControlProps,
    SelectInputSearchProps,
    SelectComponents,
    SelectTagProps,
} from './models';
import { Spinner } from '../loading/Spinner';
import { Tag as TagComponent } from '../tags';
import { ErrorNotification, WarningNotification } from '../input/Input';

const Reference = forwardRef<HTMLDivElement, SelectReferenceProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ className, error, value, meta, disabled, size, isLoading, ...props }, ref) => {
        const disabledOrLoading = disabled || isLoading;

        return (
            <div
                {...props}
                ref={ref}
                className={classes(
                    `flex items-center cursor-pointer min-w-[80px] relative w-full rounded-md border border-border-soft transition-all
                    font-inter text-sm leading-[22px] text-fg-default placeholder:text-fg-muted
                    bg-bg-page outline-2 outline-offset-0 outline-transparent ring-0 focus:ring-0
                    hover:-outline-offset-2 hover:outline-accent-soft focus:-outline-offset-2
                `,
                    error &&
                        'border-danger-default hover:outline-danger-hover focus:-outline-offset-2 focus:outline-danger-hover focus-within:-outline-offset-2 focus-within:outline-danger-hover',
                    disabledOrLoading &&
                        'pointer-events-none focus:outline-hidden focus:ring-none border-border-muted bg-bg-disabled text-fg-default',

                    {
                        'px-2.5 h-10 pr-10': size === 'md' && !error,
                        'px-2.5 h-10 pr-[74px]': size === 'md' && error,

                        'pl-2 h-8 pr-9': size === 'sm' && !error,
                        'pl-2 h-8 pr-16': size === 'sm' && error,
                    },
                    className
                )}
            />
        );
    }
);

const ValueContainer = forwardRef<HTMLDivElement, SelectValueContainerProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ className, value, size, meta, disabled, ...props }, ref) => (
        <div {...props} className={classes('truncate', className)} ref={ref} />
    )
);

const Option = forwardRef<HTMLLIElement, SelectOptionProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ isSelected, isDisabled, className, children, meta, value, ...props }, ref) => (
        <li
            {...props}
            ref={ref}
            role="option"
            className={classes(
                'flex items-start justify-start gap-1 px-4 py-2 select-none text-sm cursor-pointer focus:outline-2 focus:outline-accent-hover',
                isSelected ? 'text-accent-default bg-accent-container-soft' : 'text-fg-default hover:bg-bg-surface2',
                isDisabled && 'text-fg-disabled bg-bg-disabled cursor-not-allowed hover:bg-bg-disabled',
                className
            )}
        >
            <span className="break-all">{children}</span>
            {isSelected && (
                <span className="flex items-center justify-center shrink-0 ml-auto" data-testid={'selected-mark'}>
                    <CheckIcon
                        className={classes('w-4 h-4', isDisabled ? 'text-fg-disabled' : 'text-accent-default')}
                    />
                </span>
            )}
        </li>
    )
);

const DropdownIndicator = forwardRef<HTMLButtonElement, SelectDropdownIndicatorProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ className, disabled, size, value, meta, ...props }, ref) => {
        const cnMap: Record<SelectSize, [string]> = {
            md: ['w-10'],
            sm: ['w-8'],
        };
        const cn = cnMap[size];

        return (
            <button
                {...props}
                ref={ref}
                type="button"
                disabled={disabled}
                className={classes(
                    'absolute right-0 inset-y-0 flex items-center justify-center rounded-r-md focus:outline-hidden',
                    cn,
                    className
                )}
            >
                <ChevronDownIcon
                    className={classes('h-6 w-6', disabled ? 'text-fg-disabled' : 'text-fg-soft')}
                    aria-hidden="true"
                />
            </button>
        );
    }
);

const LoadingIndicator = forwardRef<HTMLDivElement, SelectLoadingIndicatorProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ value, meta, className, size, ...props }, ref) => {
        const widthCn: Record<SelectSize, string> = {
            md: 'w-10',
            sm: 'w-8',
        };

        return (
            <div
                {...props}
                ref={ref}
                className={classes(
                    'absolute inset-y-0 flex items-center justify-center right-0 rounded-r-md focus:outline-hidden',
                    widthCn[size],
                    className
                )}
            >
                <Spinner className="w-5 h-5 text-fg-soft animate-spin-slow" aria-hidden />
            </div>
        );
    }
);

const Placeholder = forwardRef<HTMLSpanElement, SelectPlaceholderProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ value, meta, className, ...props }, ref) => (
        <span
            {...props}
            ref={ref}
            className={classes(
                'truncate inline-block flex-grow max-w-full text-fg-muted text-sm select-none',
                className
            )}
        />
    )
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Menu = forwardRef<HTMLDivElement, SelectMenuProps>(({ value, meta, className, ...props }, ref) => (
    <div
        {...props}
        ref={ref}
        className={classes(
            'min-w-52 border-none outline-hidden focus:outline-hidden focus:border-none focus:ring-0',
            className
        )}
    />
));

const MenuBody = forwardRef<HTMLDivElement, SelectMenuBodyProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ value, meta, className, ...props }, ref) => (
        <div
            {...props}
            ref={ref}
            className={classes(
                'shadow-md border border-border-soft rounded-md bg-bg-page flex flex-col overflow-hidden',
                className
            )}
        />
    )
);

const MenuList = forwardRef<HTMLUListElement, SelectMenuListProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ value, meta, className, ...props }, ref) => (
        <ul
            {...props}
            ref={ref}
            className={classes('max-h-80 overflow-auto leading-5 focus:outline-hidden', className)}
        />
    )
);

const Header = forwardRef<HTMLDivElement, SelectHeaderProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ value, searchable, meta, className, ...props }, ref) => {
        return (
            <div
                {...props}
                ref={ref}
                className={classes('min-h-[55px] max-h-80 p-2 border-b border-border-soft overflow-auto', className)}
            />
        );
    }
);

const Control = forwardRef<HTMLDivElement, SelectControlProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ value, meta, className, error, isValid, warning, ...props }, ref) => (
        <div
            {...props}
            ref={ref}
            className={classes(
                'control min-h-10 relative flex gap-2 flex-wrap items-center justify-start overflow-auto py-2 px-3 rounded-lg',
                'border outline-2 -outline-offset-2 outline-transparent transition-colors',
                !isValid
                    ? 'pr-9 border-danger-default hover:outline-danger-default focus-within:outline-danger-hover'
                    : 'border-border-default hover:outline-accent-default focus-within:outline-accent-hover',
                className
            )}
        >
            {(error || !isValid) && (
                <div className="absolute right-2.5 top-2 ">
                    <ErrorNotification errorText={error || 'Some error occured.'} />
                </div>
            )}
            {warning && (
                <div className="absolute right-2.5 top-2 ">
                    <WarningNotification
                        warningText={warning || 'Something went wrong, please check again selected option.'}
                    />
                </div>
            )}
            {props.children}
        </div>
    )
);

const InputSearch = forwardRef<HTMLInputElement, SelectInputSearchProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ className, placeholder = 'Search', meta, ...props }, ref) => (
        <input
            {...props}
            ref={ref}
            placeholder={placeholder}
            className={classes(
                'min-w-0 flex-grow bg-bg-page text-fg-default p-0 border-none outline-hidden focus:outline-hidden focus:border-none focus:ring-0 text-sm placeholder:text-fg-muted',
                className
            )}
        />
    )
);

const Tag = forwardRef<HTMLSpanElement, SelectTagProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ disabled, className, value, meta, isWarning, ...props }, ref) => (
        <TagComponent
            {...props}
            ref={ref}
            type={isWarning ? 'warning' : 'default'}
            className={classes('max-w-full', disabled && 'bg-accent-container-muted text-fg-default', className)}
        />
    )
);

const components: SelectComponents = {
    Reference,
    ValueContainer,
    DropdownIndicator,
    LoadingIndicator,
    Placeholder,
    Control,
    Header,
    Menu,
    MenuBody,
    MenuList,
    Option,
    Tag,
    InputSearch,
};

export default components;
