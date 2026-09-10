import { classes } from '../../utils';
import type { ChangeEvent, FC, HTMLProps } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { getPlaceholder } from '../input';
import { HelperText } from '../helperText';
import { ErrorNotification } from '../input/Input';

export interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
    helperText?: string | React.JSX.Element;
    errorMessage?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    resizable?: boolean;
}

export const Textarea: FC<TextareaProps> = ({
    className,
    placeholder,
    required,
    disabled,
    helperText,
    errorMessage,
    onChange,
    // ToDo: add maxLength/minLength counter
    resizable = false,
    ...props
}) => {
    const placeholderText = getPlaceholder(placeholder, required);
    const innerRef = useRef<HTMLTextAreaElement>(null);
    const { errorText, isValid, handleChange } = useFieldValidation(errorMessage, innerRef, onChange);

    return (
        <div className="relative w-full h-full" data-testid="textarea-field-wrapper">
            <textarea
                rows={4}
                required={required}
                disabled={disabled}
                placeholder={placeholderText}
                ref={innerRef}
                onChange={handleChange}
                className={classes(
                    className,
                    'block w-full bg-bg-page rounded-md font-inter text-sm leading-[18px] text-fg-default',
                    'border transition-all placeholder:text-fg-muted placeholder:text-sm',
                    'outline outline-2 outline-offset-0 outline-transparent ring-0 focus:ring-0',

                    resizable ? 'resize-y' : 'resize-none',

                    !isValid &&
                        'border-danger-soft hover:-outline-offset-2 hover:outline-danger-soft focus:-outline-offset-2 focus:outline-danger-hover pr-8',

                    isValid && 'border-border-soft',

                    disabled &&
                        isValid &&
                        'disabled:border-border-soft disabled:bg-bg-disabled disabled:text-fg-default',
                    disabled && !isValid && 'disabled:bg-bg-disabled',

                    !disabled &&
                        isValid &&
                        'hover:-outline-offset-2 hover:outline-accent-soft focus:-outline-offset-2 focus:outline-accent-hover',

                    'min-h-10 p-2.5',
                    errorText && 'pr-4'
                )}
                style={{ scrollbarWidth: 'thin', scrollbarGutter: 'stable' }}
                data-testid="textarea-field"
                {...props}
            />
            {errorText && (
                <div className={'top-0 right-2 absolute'}>
                    <ErrorNotification errorText={errorText} className={'px-1 py-1.5'} />
                </div>
            )}
            {helperText && <HelperText className="mt-1">{helperText}</HelperText>}
        </div>
    );
};

export const useFieldValidation = (errorMessage, innerRef, onChange) => {
    const [errorText, setErrorText] = useState<string | undefined>(undefined);

    useEffect(() => {
        innerRef.current?.setCustomValidity(errorMessage ?? '');
        setErrorText(innerRef.current?.validationMessage);
    }, [errorMessage]);

    const checkValidity = innerRef.current?.checkValidity();
    const isValid = checkValidity !== undefined ? checkValidity : true;

    const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        setErrorText(evt.target.validationMessage);
        onChange?.(evt);
    };

    return { errorText, isValid, handleChange };
};
