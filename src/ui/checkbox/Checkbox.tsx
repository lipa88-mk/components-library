import React, { forwardRef, useRef } from 'react';
import { classes } from '../../utils';
import { useFieldValidation } from '../input';
import { useMergeRefs } from '@floating-ui/react';
import { ErrorNotification } from '../input/Input';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    indeterminate?: boolean;
    errorMessage?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(
    ({ label, disabled = false, indeterminate = false, onChange, errorMessage, ...props }, propRef) => {
        const localRef = useRef<HTMLInputElement | null>(null);
        const ref = useMergeRefs<HTMLInputElement>([localRef, propRef]);

        if (indeterminate && localRef.current) localRef.current.indeterminate = true;
        if (!indeterminate && localRef.current) localRef.current.indeterminate = false;

        const { errorText, isValid, handleChange } = useFieldValidation(errorMessage, localRef, onChange);

        return (
            <label
                className={classes(
                    'w-full flex items-start gap-2 break-words hyphens-auto',
                    disabled ? 'cursor-default' : 'cursor-pointer',
                    !isValid && 'relative'
                )}
            >
                <input
                    {...props}
                    ref={ref}
                    type="checkbox"
                    id={label}
                    disabled={disabled}
                    onChange={handleChange}
                    className={classes(
                        'shrink-0 appearance-none h-4 w-4 m-1 border rounded-sm transition bg-page focus:ring-offset-1 focus:ring-4',

                        isValid &&
                            'accent-accent-default text-accent-default border-border-soft hover:border-accent-soft focus:border-accent-soft focus:ring-accent-container-default',
                        !isValid &&
                            'accent-danger-default  text-danger-default border-danger-soft hover:border-danger-soft focus:border-danger-soft focus:ring-danger-container-default',

                        isValid &&
                            'checked:bg-accent-default checked:hover:bg-accent-hover checked:border-accent-default checked:hover:border-accent-hover',
                        !isValid &&
                            'checked:bg-danger-default checked:hover:bg-danger-hover checked:border-danger-default checked:hover:border-danger-hover',

                        indeterminate &&
                            isValid &&
                            'indeterminate:bg-accent-default indeterminate:border-accent-default indeterminate:hover:bg-accent-hover indeterminate:hover:border-accent-hover',
                        indeterminate &&
                            !isValid &&
                            'indeterminate:bg-danger-default  indeterminate:border-danger-default  indeterminate:hover:bg-danger-hover  indeterminate:hover:border-danger-hover',
                        disabled &&
                            'disabled:border-border-soft disabled:bg-bg-disabled disabled:hover:border-border-soft disabled:checked:bg-bg-disabled disabled:indeterminate:bg-bg-disabled'
                        // same for default and error states
                    )}
                />
                {label && (
                    <span
                        className={classes(
                            'text-sm pt-0.5 font-normal text-wrap break-words ',
                            !isValid && 'pr-6 relative',
                            disabled ? 'cursor-default text-fg-disabled' : 'cursor-pointer text-fg-default'
                        )}
                    >
                        {label}
                        {!isValid && errorText && (
                            <div className={classes('right-0 top-0.5 absolute')}>
                                <ErrorNotification errorText={errorText} />
                            </div>
                        )}
                    </span>
                )}
                {!label && !isValid && errorText && (
                    <div className={classes('left-6 top-0.5 absolute')}>
                        <ErrorNotification errorText={errorText} />
                    </div>
                )}
            </label>
        );
    }
);
