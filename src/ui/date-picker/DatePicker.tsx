import { DateTime } from 'luxon';
import type { ChangeEvent } from 'react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { Props as InputProps } from '../input/Input';
import { noop } from '../../utils';
import { Input } from '../input';

export interface DatePickerProps extends Omit<
    InputProps,
    'type' | 'Icon' | 'iconPosition' | 'value' | 'integerArrowButtons'
> {
    value: string | null;
    type?: 'date' | 'time' | 'datetime-local';
}

const parseDate = (value: string | null, format: string) => {
    if (value) {
        const date = DateTime.fromISO(value);
        return date.isValid ? date.toFormat(format) : void 0;
    }
    return void 0;
};

const DATEPICKER_FORMATS = {
    date: 'yyyy-MM-dd',
    time: 'HH:mm:ss',
    'datetime-local': "yyyy-MM-dd'T'HH:mm:ss",
};

const EMPTY_INPUT_STATE = 'EMPTY';
const useForceRerenderOnExternalChange = (externalValue: string | null | undefined) => {
    const [key, setKey] = useState(Math.random());
    const internalValueRef = useRef(externalValue);

    useEffect(() => {
        if ((externalValue || '') !== internalValueRef.current && internalValueRef.current !== EMPTY_INPUT_STATE) {
            setKey(Math.random());
        }
    }, [externalValue]);

    return {
        key,
        setInternalValue: (value: string) => {
            internalValueRef.current = value || EMPTY_INPUT_STATE;
        },
    };
};

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>((props, ref) => {
    const { value, onChange = noop, type = 'date', ...otherProps } = props;
    const { key, setInternalValue } = useForceRerenderOnExternalChange(value);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const valueType = e.target.type;
        const newValue = parseDate(inputValue, DATEPICKER_FORMATS[valueType]) || '';

        setInternalValue(newValue);
        onChange({
            ...e,
            target: {
                ...e.target,
                name: props.name || type,
                value: newValue,
            },
        });
    };

    return (
        <Input
            key={key}
            type={type}
            data-testid={'datepicker-field'}
            defaultValue={parseDate(value, DATEPICKER_FORMATS[type]) || value || ''}
            onChange={handleChange}
            {...otherProps}
            ref={ref}
        />
    );
});

export default DatePicker;
