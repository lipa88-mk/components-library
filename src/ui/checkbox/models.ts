import type React from 'react';

export interface MultiPickerProps<T> {
    values?: T[];
    searchable?: boolean;
    selectAllOption?: boolean;
    selectAllOptionLabel?: string;
    id?: string;
    items: T[];
    placeholder?: string;
    onChange: (i: T) => void;
    onBlur?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    readValue?: (i: T) => string;
    readLabel?: (i: T) => string;
    ariaLabel?: string;
    noStrict?: boolean;
    className?: string;
    isValid?: boolean;
    sizing?: 'md' | 'sm';
    helperText?: string | React.JSX.Element;
    errorMessage?: string;
}
