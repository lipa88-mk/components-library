import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { classes, noop } from '../../utils';
import { Field, Label, Switch } from '@headlessui/react';
import { ErrorNotification } from '../input/Input';

export interface SwitcherProps {
    label?: string;
    active?: boolean;
    className?: string;
    disabled?: boolean;
    errorMessage?: string;
    onChange: (isActivated) => void;
}

export const Switcher: FC<SwitcherProps> = ({
    label,
    active = false,
    className,
    disabled = false,
    errorMessage,
    onChange = noop,
}) => {
    const [activated, setActivated] = useState(active);
    useEffect(() => {
        setActivated(active);
    }, [active]);

    const isValid = !errorMessage;

    const handleSwitchChange = value => {
        setActivated(value);
        onChange(value);
    };

    return (
        <Field>
            <div className={classes('group', className ? className : 'flex items-center gap-2')}>
                <Switch
                    checked={activated}
                    disabled={disabled}
                    onChange={handleSwitchChange}
                    className={classes(
                        'shrink-0 relative inline-flex h-6 w-12 p-0.5 items-center',
                        'appearance-none rounded-xl transition-colors outline-hidden',

                        'focus:ring-offset-1 focus:ring-4',
                        isValid && 'focus:ring-accent-container-default',
                        !isValid && 'focus:ring-danger-container-default',

                        isValid && !activated && 'bg-border-soft group-hover:bg-border-default',
                        isValid && activated && 'bg-accent-default group-hover:bg-accent-hover',

                        !isValid && !activated && 'bg-danger-container-default group-hover:bg-danger-container-hover',
                        !isValid && activated && 'bg-danger-default group-hover:bg-danger-hover',

                        disabled &&
                            'cursor-default bg-transparent group-hover:bg-transparent outline-1 -outline-offset-1 outline-border-soft'
                    )}
                >
                    <span
                        className={classes(
                            'block h-5 w-5 rounded-full  transform transition-transform',
                            activated ? 'translate-x-6 ' : 'translate-x-0.25',
                            disabled ? 'bg-bg-disabled' : 'bg-white'
                        )}
                    />
                    {disabled && activated && (
                        <span className="absolute top-1.5 left-1  text-[10px] leading-3 font-normal text-fg-disabled uppercase">
                            on
                        </span>
                    )}
                    {disabled && !activated && (
                        <span className="absolute top-1.5 right-1 text-[10px] leading-3 font-normal text-fg-disabled uppercase">
                            off
                        </span>
                    )}
                </Switch>

                <Label
                    className={classes(
                        'text-sm font-normal',
                        disabled ? 'cursor-default text-fg-disabled' : 'cursor-pointer text-fg-default',
                        !isValid && 'pr-6 relative'
                    )}
                >
                    {label}
                    {!isValid && (
                        <div className={classes('right-0 top-0 absolute')}>
                            <ErrorNotification errorText={errorMessage} />
                        </div>
                    )}
                </Label>
            </div>
        </Field>
    );
};
