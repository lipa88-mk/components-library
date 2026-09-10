import type { InputHTMLAttributes, PropsWithChildren } from 'react';
import React, { forwardRef, useEffect, useState } from 'react';
import { classes } from '../../utils';
import type { SharedProps } from '../button/models';
import { useThemableElementRef } from '../../theming';
import { fileImportVariants } from './variants';

export type FileImportProps = Omit<SharedProps, 'coloring'> &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
        additionalInfo?: string[];
    };

const FileImport = forwardRef<HTMLInputElement, PropsWithChildren<FileImportProps>>(
    (
        {
            className,
            additionalInfo = [],
            Icon,
            iconPosition = 'left',
            size = 'md',
            disabled = false,
            isLoading = false,
            active = false,
            innerAlignment = 'center',
            children,
            value,
            onChange,
            ...props
        },
        ref
    ) => {
        const themableRef = useThemableElementRef<HTMLLabelElement>();

        const isIconOnly = Icon && !children;

        const variants = fileImportVariants({
            type: 'tertiary',
            coloring: 'default',
            size,
            active,
            iconPosition,
            innerAlignment,
            isIconOnly,
        });

        const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

        useEffect(() => {
            if (typeof value === 'string' || value === undefined) setSelectedFileName(value || null);
        }, [value]);

        const handleChange = e => {
            const files = e.target.files;
            setSelectedFileName(files[0]?.name ?? null);
            onChange?.(e);
        };
        return (
            <figure className={classes(variants.figure())}>
                <label
                    ref={themableRef}
                    className={classes(variants.button(), className)}
                    data-testid={'import-button'}
                    aria-disabled={disabled || isLoading}
                    aria-busy={isLoading}
                    style={props.style}
                >
                    {Icon && <Icon className={classes(variants.icon())} />}
                    <span>{children === undefined && Icon === undefined ? 'Choose file' : children}</span>

                    <input
                        disabled={disabled}
                        className={'sr-only'}
                        type="file"
                        {...props}
                        onChange={handleChange}
                        ref={ref}
                    />
                </label>

                <figcaption>
                    <p
                        className={classes(variants.fileName(), {
                            'mb-1': additionalInfo.length > 0,
                        })}
                    >
                        {selectedFileName ?? 'No file chosen'}
                    </p>

                    {additionalInfo &&
                        additionalInfo.map(el => (
                            <p className={classes(variants.additionalInfo())} key={el}>
                                {el}
                            </p>
                        ))}
                </figcaption>
            </figure>
        );
    }
);

export default FileImport;
