import type { PropsWithChildren } from 'react';
import React, { forwardRef, memo } from 'react';
import { classes, noop } from '../../utils';
import type { ButtonProps, ImportProps } from './models';
import { buttonVariants } from './variants';
import { useThemableElementRef } from '../../theming/hooks';
import { useMergeRefs } from '@floating-ui/react';
import { Spinner } from '../loading/Spinner';

export type IButtonSubcomponents = {
    Primary: typeof Primary;
    Secondary: typeof Secondary;
    Tertiary: typeof Tertiary;
    Ghost: typeof Ghost;
    Import: typeof Import;
};

type ButtonWithRef<T> = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<T> & React.RefAttributes<HTMLButtonElement>
>;

const Button: ButtonWithRef<ButtonProps> & Partial<IButtonSubcomponents> = memo<ButtonProps>(
    forwardRef<HTMLButtonElement, ButtonProps>(
        (
            {
                className,
                Icon,
                iconPosition = 'left',
                innerAlignment = 'center',
                size = 'md',
                isLoading = false,
                children,
                disabled = false,
                ...props
            },
            propRef
        ) => {
            const themableRef = useThemableElementRef();
            const ref = useMergeRefs([themableRef, propRef]);

            const isIconOnly = Icon && !children;
            const variants = buttonVariants({
                size,
                iconPosition,
                innerAlignment,
                isIconOnly,
            });

            return (
                <button
                    data-testid={'button'}
                    className={classes(variants.button(), className)}
                    {...props}
                    ref={ref}
                    disabled={disabled || isLoading}
                    aria-disabled={disabled || isLoading}
                    aria-busy={isLoading}
                >
                    {Icon && (
                        <Icon data-testid={'button-icon'} aria-busy={isLoading} className={classes(variants.icon())} />
                    )}

                    {children}

                    {isLoading && (
                        <span className={classes(variants.loading())}>
                            <Spinner
                                data-testid={'button-spinner'}
                                className={classes('animate-spin-slow', variants.icon(), variants.spinnerIcon())}
                            />
                        </span>
                    )}
                </button>
            );
        }
    )
);

const Primary = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, coloring = 'default', active = false, ...props }, ref) => {
        const variants = buttonVariants({
            type: 'primary',
            coloring,
            active,
        });
        return (
            <Button data-button-type="primary" className={classes(variants.button(), className)} {...props} ref={ref} />
        );
    }
);

const Secondary = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, coloring = 'default', active = false, ...props }, ref) => {
        const variants = buttonVariants({
            type: 'secondary',
            coloring,
            active,
        });
        return (
            <Button
                data-button-type="secondary"
                className={classes(variants.button(), className)}
                {...props}
                ref={ref}
            />
        );
    }
);

const Tertiary = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, coloring = 'default', active = false, ...props }, ref) => {
        const variants = buttonVariants({
            type: 'tertiary',
            coloring,
            active,
        });
        return (
            <Button
                data-button-type="tertiary"
                className={classes(variants.button(), className)}
                {...props}
                ref={ref}
            />
        );
    }
);

const Ghost = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, coloring = 'default', active = false, ...props }, ref) => {
        const variants = buttonVariants({
            type: 'ghost',
            coloring,
            active,
        });
        return (
            <Button data-button-type="ghost" className={classes(variants.button(), className)} {...props} ref={ref} />
        );
    }
);

const Import = forwardRef<HTMLInputElement, PropsWithChildren<ImportProps>>(
    (
        {
            onImport = noop,
            className,
            Icon,
            iconPosition = 'left',
            isLoading = false,
            size = 'md',
            disabled = false,
            active = false,
            innerAlignment = 'center',
            children,
            ...props
        },
        ref
    ) => {
        const themableRef = useThemableElementRef<HTMLLabelElement>();

        const isIconOnly = Icon && !children;
        const variants = buttonVariants({
            type: 'tertiary',
            coloring: 'default',
            size,
            active,
            iconPosition,
            innerAlignment,
            isIconOnly,
        });

        const handleChange = e => {
            const files = structuredClone(e.target.files);
            if (files.length) onImport(files);
            e.target.value = '';
        };

        return (
            <label
                ref={themableRef}
                className={classes(variants.button(), className)}
                data-testid={'import-button'}
                aria-disabled={disabled || isLoading}
                aria-busy={isLoading}
                style={props.style}
            >
                {Icon && <Icon className={classes(variants.icon())} />}

                {children && <span className={classes(isLoading && 'opacity-0')}>{children}</span>}

                {isLoading && (
                    <span className={classes(variants.loading())}>
                        <Spinner
                            data-testid={'spinner'}
                            className={classes('animate-spin-slow', variants.icon(), variants.spinnerIcon())}
                        />
                    </span>
                )}

                <input
                    disabled={disabled || isLoading}
                    className={'sr-only'}
                    type="file"
                    onChange={handleChange}
                    {...props}
                    ref={ref}
                />
            </label>
        );
    }
);

Button.Primary = Primary;
Button.Secondary = Secondary;
Button.Tertiary = Tertiary;
Button.Ghost = Ghost;
Button.Import = Import;

export default Button as ButtonWithRef<ButtonProps> & IButtonSubcomponents;
