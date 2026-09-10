import type { ChangeEvent, ReactElement } from 'react';
import React from 'react';
import { classes, generateId, noop } from '../../utils';
import Radio from '../radio/Radio';

interface Props<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value: T;
    name?: string;
    items: { label: string; value?: T; description?: string }[];
    disabled?: boolean;
    onChange?: (value: T) => void;
}

function RadioGroup<T extends string | number | boolean>({
    value: groupValue,
    name: groupName = null,
    items,
    disabled = false,
    onChange = noop,
    className = '',
}): ReactElement<Props<T>> {
    const name = groupName ?? generateId();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

    return (
        <div className={classes(className ? className : 'space-y-5')}>
            {items.map(({ label, value, description }) => {
                const inputValue = value || label;
                return (
                    <Radio
                        key={label}
                        label={label}
                        name={name}
                        value={inputValue}
                        description={description}
                        onChange={handleChange}
                        checked={inputValue === groupValue}
                        disabled={disabled}
                    />
                );
            })}
        </div>
    );
}

export default RadioGroup;
