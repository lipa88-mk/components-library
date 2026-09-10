import type { ChangeEventHandler } from 'react';
import { forwardRef } from 'react';
import React, { useRef } from 'react';
import { classes, generateId } from '../../utils';
import { useFieldValidation } from '../input';
import { useMergeRefs } from '@floating-ui/react';
import { ErrorNotification } from '../input/Input';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    description?: string;
    errorMessage?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Radio = forwardRef<HTMLInputElement, Props>(
    (
        { id, value, name, disabled, required, errorMessage, checked, onChange, description, label, ...props },
        propRef
    ) => {
        const inputId = id || generateId();
        const localRef = useRef<HTMLInputElement | null>(null);
        const ref = useMergeRefs([localRef, propRef]);
        const { errorText, isValid, handleChange } = useFieldValidation(errorMessage, localRef, onChange);

        return (
            <label className={classes('flex gap-2 items-start', disabled ? 'cursor-default' : 'cursor-pointer')}>
                <input
                    {...props}
                    ref={ref}
                    id={inputId}
                    aria-describedby={`radio-label-${inputId}`}
                    name={name}
                    required={required}
                    type="radio"
                    value={value}
                    checked={checked}
                    onChange={handleChange}
                    disabled={disabled}
                    className={classes(
                        'shrink-0 appearance-none w-4 h-4 m-1 bg-bg-page border rounded-full transition focus:ring-offset-1 focus:ring-4',

                        isValid &&
                            !disabled &&
                            'accent-accent-default text-accent-default border-border-soft hover:border-accent-soft focus:border-accent-soft focus:ring-accent-container-default',
                        !isValid &&
                            !disabled &&
                            'accent-danger-default text-danger-default border-danger-soft hover:border-danger-soft focus:border-danger-soft focus:ring-danger-container-default',

                        checked && 'checked:outline checked:outline-[5px] checked:outline-offset-[-5px]',
                        isValid &&
                            checked &&
                            'checked:outline-accent-default checked:border-accent-default checked:hover:outline-accent-hover',
                        !isValid &&
                            checked &&
                            'checked:outline-danger-default checked:border-danger-default checked:hover:outline-danger-hover',

                        disabled &&
                            'disabled:bg-bg-disabled disabled:border-bg-disabled disabled:outline-bg-disabled disabled:hover:outline-bg-disabled checked:hover:bg-bg-disabled'
                        // same for default and error states
                    )}
                />
                <div id={`radio-label-${inputId}`} className="flex flex-col items-start justify-start">
                    <span
                        className={classes(
                            'text-sm font-normal',
                            disabled ? 'cursor-default text-fg-disabled' : 'cursor-pointer text-fg-default',
                            description ? 'leading-5' : 'leading-6',
                            !isValid && 'pr-6 relative'
                        )}
                    >
                        {label}
                        {!isValid && errorText && (
                            <div className={classes('right-0 absolute', description ? 'top-0' : 'top-0.5')}>
                                <ErrorNotification errorText={errorText} />
                            </div>
                        )}
                    </span>

                    {description && (
                        <span
                            className={classes(' text-sm font-normal', disabled ? 'text-fg-disabled' : 'text-fg-muted')}
                        >
                            {description}
                        </span>
                    )}
                </div>
            </label>
        );
    }
);

export default Radio;
