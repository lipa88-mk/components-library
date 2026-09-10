import type { FC } from 'react';
import { isValidElement } from 'react';
import { cloneElement } from 'react';
import React from 'react';
import { classes, generateId } from '../../utils';

type RenderProps = {
    id: string;
    label: string;
    disabled: boolean;
    required: boolean;
};

type LabelSizes = '3xs' | 'xs';

export interface LabelifyProps {
    label: string;
    size?: LabelSizes;
    id?: string;
    disabled?: boolean;
    required?: boolean;
    children: React.ReactNode | ((p: RenderProps) => React.ReactNode);
}

const Labelify: FC<LabelifyProps> = ({ label, size = '3xs', id, disabled = false, required = false, children }) => {
    const elementId = id ?? generateId();

    const renderChildren = () => {
        if (!children) {
            return null;
        }

        const inputProps: Omit<RenderProps, 'label'> = {
            id: elementId,
            disabled,
            required,
        };

        if (typeof children === 'function') {
            return children({ ...inputProps, label });
        }

        if (Array.isArray(children)) {
            return children;
        }

        if (!isValidElement(children)) {
            // eslint-disable-next-line no-console
            console.warn(
                `Invalid child element passed to Labelify. Expected a valid React element, but received: ${typeof children}`
            );
            return null;
        }

        return cloneElement(children, inputProps);
    };

    return (
        <div className={'relative w-full flex flex-col gap-1'} data-testid={'labeled-field'}>
            <label
                htmlFor={elementId}
                data-testid={'field-label'}
                className={classes('block truncate pr-5 text-fg-default')}
            >
                <span
                    className={classes(
                        'inline-flex max-w-full py-0.5 truncate font-normal',

                        size === '3xs' && 'text-sm leading-4',
                        size === 'xs' && 'text-base leading-6',

                        required && 'after:content-["*"] after:text-md after:ml-1 after:align-middle '
                    )}
                >
                    {label || '\u00A0'}
                </span>
            </label>
            {renderChildren()}
        </div>
    );
};

export default Labelify;
