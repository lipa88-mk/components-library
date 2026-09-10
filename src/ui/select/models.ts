import type React from 'react';
import type { TagProps } from '../tags';
import type { AlignedPlacement, OffsetOptions } from '@floating-ui/react';

export type DefaultMetaType = Record<string, unknown>;

export type SelectSize = 'sm' | 'md';

export type SelectItemProps<T = unknown> = {
    children: string;
    value: T;
    isDisabled?: boolean;
};

export type InternalItemProps<T = string, M extends DefaultMetaType = DefaultMetaType> = {
    activeIndex: number | null;
    Component: SelectComponents<T, M>['Option'];
    readLabel: SelectProps<T, M>['readLabel'];
    meta?: M;
    isVisible: (item: T, label: string) => boolean;
    isSelected: (value: SelectItemProps<T>['value']) => boolean;
    isDisabled?: boolean;
    onSelect: (value: T | null) => void;
};

export type SelectReferenceProps<
    T = unknown,
    M extends DefaultMetaType = DefaultMetaType,
> = React.HTMLAttributes<HTMLDivElement> & {
    meta?: M;
    disabled?: boolean;
    isLoading?: boolean;
    size: SelectSize;
    error: boolean | string;
    value: T | null;
};

export type SelectOptionProps<
    T = unknown,
    M extends DefaultMetaType = DefaultMetaType,
> = React.HTMLAttributes<HTMLLIElement> & {
    value: T;
    meta?: M;
    isSelected: boolean;
    isDisabled?: boolean;
};

export type SelectDropdownIndicatorProps<T = unknown, M extends DefaultMetaType = DefaultMetaType> = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'type' | 'children' | 'value'
> & {
    value: T | null;
    open: boolean;
    size: SelectSize;
    meta?: M;
};

export type SelectValueContainerProps<
    T = unknown,
    M extends DefaultMetaType = DefaultMetaType,
> = React.HTMLAttributes<HTMLDivElement> & {
    value: T | null;
    disabled?: boolean;
    size: SelectSize;
    meta?: M;
};

export type SelectLoadingIndicatorProps<T = unknown, M extends DefaultMetaType = DefaultMetaType> = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'children'
> & {
    value: T | null;
    meta?: M;
    size: SelectSize;
};

export type SelectPlaceholderProps<
    T = unknown,
    M extends DefaultMetaType = DefaultMetaType,
> = React.HTMLAttributes<HTMLSpanElement> & {
    value: T | null;
    meta?: M;
};

export type SelectMenuProps<
    T = unknown,
    M extends DefaultMetaType = DefaultMetaType,
> = React.HTMLAttributes<HTMLDivElement> & {
    value: T | null;
    meta?: M;
};

export type SelectMenuBodyProps<
    T = unknown,
    M extends DefaultMetaType = DefaultMetaType,
> = React.HTMLAttributes<HTMLDivElement> & {
    value: T | null;
    meta?: M;
};

export type SelectMenuListProps<
    T = unknown,
    M extends DefaultMetaType = DefaultMetaType,
> = React.HTMLAttributes<HTMLUListElement> & {
    value: T | null;
    meta?: M;
};

export type SelectHeaderProps<
    T = unknown,
    M extends DefaultMetaType = DefaultMetaType,
> = React.HTMLAttributes<HTMLDivElement> & {
    value: T | null;
    meta?: M;
    searchable?: boolean;
};

export type SelectControlProps<
    T = unknown,
    M extends DefaultMetaType = DefaultMetaType,
> = React.HTMLAttributes<HTMLDivElement> & {
    value: T | null;
    meta?: M;
    isValid?: boolean;
    error?: string;
    warning?: string;
};

export type SelectInputSearchProps<M extends DefaultMetaType = DefaultMetaType> =
    React.InputHTMLAttributes<HTMLInputElement> & {
        meta?: M;
    };

export type SelectTagProps<T = unknown, M extends DefaultMetaType = DefaultMetaType> = TagProps & {
    disabled: boolean;
    value: T;
    meta?: M;
    isWarning?: boolean;
};

export type SelectComponents<T = unknown, M extends DefaultMetaType = DefaultMetaType> = {
    Reference: React.ForwardRefExoticComponent<SelectReferenceProps<T, M> & React.RefAttributes<HTMLDivElement>>;
    ValueContainer: React.ForwardRefExoticComponent<
        SelectValueContainerProps<T, M> & React.RefAttributes<HTMLDivElement>
    >;
    DropdownIndicator: React.ForwardRefExoticComponent<
        SelectDropdownIndicatorProps<T, M> & React.RefAttributes<HTMLButtonElement>
    >;
    LoadingIndicator: React.ForwardRefExoticComponent<
        SelectLoadingIndicatorProps<T, M> & React.RefAttributes<HTMLDivElement>
    >;
    Placeholder: React.ForwardRefExoticComponent<SelectPlaceholderProps<T, M> & React.RefAttributes<HTMLSpanElement>>;
    Control: React.ForwardRefExoticComponent<SelectControlProps<T, M> & React.RefAttributes<HTMLDivElement>>;
    Header: React.ForwardRefExoticComponent<SelectHeaderProps<T, M> & React.RefAttributes<HTMLDivElement>>;
    Menu: React.ForwardRefExoticComponent<SelectMenuProps<T, M> & React.RefAttributes<HTMLDivElement>>;
    MenuBody: React.ForwardRefExoticComponent<SelectMenuBodyProps<T, M> & React.RefAttributes<HTMLDivElement>>;
    MenuList: React.ForwardRefExoticComponent<SelectMenuListProps<T, M> & React.RefAttributes<HTMLUListElement>>;
    Option: React.ForwardRefExoticComponent<SelectOptionProps<T, M> & React.RefAttributes<HTMLLIElement>>;
    Tag: React.ForwardRefExoticComponent<SelectTagProps<T, M> & React.RefAttributes<HTMLSpanElement>>;
    InputSearch: React.ForwardRefExoticComponent<SelectInputSearchProps<M> & React.RefAttributes<HTMLInputElement>>;
};

export type SelectProps<T = unknown, M extends DefaultMetaType = DefaultMetaType> = Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'disabled' | 'placeholder' | 'id'
> & {
    open?: boolean;
    defaultOpen?: boolean;
    value?: T | null;
    defaultValue?: T | null;
    isLoading?: boolean;
    meta?: M;
    sizing?: SelectSize;
    ariaLabel?: string;
    /**
     * @deprecated
     * Will be removed in the next major release.
     */
    readLabel?: (value: T) => string;
    searchable?: boolean;
    isValid?: boolean;
    helperText?: string | React.JSX.Element;
    errorMessage?: string;
    children: React.ReactElement<SelectItemProps<T>> | React.ReactElement<SelectItemProps<T>>[];
    components?: Partial<SelectComponents<T, M>>;
    /**
     * @deprecated
     * Will be removed in the next major release.
     */
    onBlur?: React.HTMLAttributes<HTMLDivElement>['onBlur'];
    onChange?: (value: T | null) => void;
    onChangeOpen?: (value: boolean) => void;
    filterOption?: (value: T, input: string) => boolean;
    placement?: AlignedPlacement;
    offset?: OffsetOptions;
};
