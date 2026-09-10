import type { ChangeEvent, ComponentType, FC, HTMLProps, RefAttributes, SVGProps } from 'react';
import { useEffect } from 'react';
import React, { forwardRef, useRef, useState, useImperativeHandle } from 'react';
import { classes } from '../../utils';
import { ExclamationCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { Tooltip } from '../tooltip';
import './Input.css';
import { HelperText } from '../helperText';
import { Adornment } from './components';
import type { CalculatePaddings, InputAdornmentProps } from './models';
import { calculatePaddings } from './helpers';
import { inputVariants, type InputVariantsProps } from './variants';

export type InputSize = NonNullable<InputVariantsProps['sizing']>;
type InputColoring = NonNullable<InputVariantsProps['coloring']>;
type IconPosition = NonNullable<InputVariantsProps['iconPosition']>;

export interface Props extends HTMLProps<HTMLInputElement> {
    sizing?: InputSize;
    enableInternalValidation?: boolean;
    coloring?: InputColoring;
    Icon?: ComponentType<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
    iconPosition?: IconPosition;
    helperText?: string | React.JSX.Element;
    errorMessage?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    integerArrowButtons?: boolean;
    renderStartAdornment?: (props: InputAdornmentProps, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement;
}

const useApplyPaddings = ({
    defaultPaddings,
    startAdornmentRef,
    onApply,
}: {
    defaultPaddings: CalculatePaddings;
    startAdornmentRef: React.RefObject<HTMLDivElement>;
    onApply: (paddings: CalculatePaddings) => void;
}) => {
    useEffect(() => {
        const result = { ...defaultPaddings };

        if (startAdornmentRef.current) {
            result.left += startAdornmentRef.current.offsetWidth + result.left;
        }

        onApply(result);
    });
};

const Root = forwardRef<HTMLInputElement, Props>(
    (
        {
            type = 'text',
            disabled = false,
            required = false,
            sizing = 'md',
            coloring = 'default',
            Icon,
            iconPosition = 'left',
            helperText,
            errorMessage,
            onChange,
            className,
            integerArrowButtons = true,
            enableInternalValidation = true,
            renderStartAdornment,
            ...props
        },
        ref
    ) => {
        const startAdornmentRef = useRef<HTMLDivElement>(null);
        const inputPlaceholder = props.placeholder;
        const placeholderText = getPlaceholder(inputPlaceholder, required);

        const innerRef = useRef<HTMLInputElement>(null);
        useImperativeHandle(ref, () => innerRef.current!, []);

        const { errorText, isValid, handleChange } = useFieldValidation(
            errorMessage,
            innerRef,
            onChange,
            enableInternalValidation
        );

        const variants = inputVariants({
            coloring,
            sizing,
            disabled,
            isValid,
            iconPosition,
        });

        const defaultPaddings = calculatePaddings({
            sizing,
            Icon,
            iconPosition,
            errorText,
        });

        useApplyPaddings({
            defaultPaddings,
            startAdornmentRef,
            onApply: ({ top, right, bottom, left }) => {
                if (innerRef.current) {
                    Object.assign(innerRef.current.style, {
                        paddingLeft: `${left}px`,
                        paddingRight: `${right}px`,
                        paddingTop: `${top}px`,
                        paddingBottom: `${bottom}px`,
                    });
                }
            },
        });

        return (
            <div className="relative w-full overflow-hidden">
                {renderStartAdornment?.(
                    {
                        style: {
                            left: `${defaultPaddings.left}px`,
                        },
                    },
                    startAdornmentRef
                )}
                <input
                    data-testid={'text-input-field'}
                    ref={innerRef}
                    type={type}
                    onChange={handleChange}
                    disabled={disabled}
                    required={required}
                    className={classes(
                        variants.input(),
                        type === 'number' && !integerArrowButtons && 'no-integer-arrows',
                        className
                    )}
                    {...props}
                    placeholder={placeholderText}
                />

                {Icon && <Icon className={variants.icon()} />}

                {errorText && (
                    <div className={'top-0 right-0 bottom-0 absolute'}>
                        <ErrorNotification errorText={errorText} className={variants.errorMsg()} />
                    </div>
                )}

                {helperText && <HelperText className="mt-1">{helperText}</HelperText>}
            </div>
        );
    }
);

export const getPlaceholder = (inputPlaceholder?: string, required = false): string | undefined => {
    if (!required) {
        return inputPlaceholder;
    }
    return inputPlaceholder ? `* ${inputPlaceholder}` : '* Required';
};

export const useFieldValidation = (
    errorMessage: string | undefined,
    ref: React.MutableRefObject<HTMLInputElement | null>,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
    enable = true
) => {
    const [errorText, setErrorText] = useState<string | undefined>(undefined);

    useEffect(() => {
        ref.current?.setCustomValidity(errorMessage ?? '');
        setErrorText(ref.current?.validationMessage);
    }, [errorMessage]);

    if (!enable) {
        return { errorText: errorMessage, isValid: !errorMessage, handleChange: onChange };
    }

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setErrorText(evt.target.validationMessage);
        onChange?.(evt);
    };

    const checkValidity = ref.current?.checkValidity();
    const isValid = checkValidity !== undefined ? checkValidity : true;

    return {
        errorText,
        isValid,
        handleChange,
    };
};

export const ErrorNotification: FC<{ errorText: string; className?: string }> = ({ errorText, className }) => (
    <Tooltip title={errorText} showArrow placement="top-end">
        <ExclamationCircleIcon className={classes('h-5 w-5 text-danger-default box-content', className)} />
    </Tooltip>
);

export const WarningNotification: FC<{ warningText: string; className?: string }> = ({ warningText, className }) => (
    <Tooltip title={warningText} showArrow placement="top-end">
        <ExclamationTriangleIcon className={classes('h-5 w-5 text-warning-default box-content', className)} />
    </Tooltip>
);

const Input = Object.assign(Root, {
    Adornment,
});

export default Input;
