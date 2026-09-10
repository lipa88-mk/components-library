import type React from 'react';
import type {
    SelectOptionProps,
    SelectControlProps,
    SelectDropdownIndicatorProps,
    SelectHeaderProps,
    SelectInputSearchProps,
    SelectLoadingIndicatorProps,
    SelectMenuBodyProps,
    SelectMenuListProps,
    SelectMenuProps,
    SelectPlaceholderProps,
    SelectReferenceProps,
    SelectTagProps,
} from '../select';
import type { AlignedPlacement, OffsetOptions } from '@floating-ui/react';

export type DefaultMetaType = Record<string, unknown>;

export type MultiSelectValue = string[];

export type MultiSelectTagsProps<M extends DefaultMetaType = DefaultMetaType> = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'children'
> & {
    value: MultiSelectProps['value'];
    meta?: M;
    children: React.ReactElement<MultiSelectTagProps>[];
    disabled: boolean;
};

export type MultiSelectTagProps<M extends DefaultMetaType = DefaultMetaType> = SelectTagProps<string, M>;

export type MultiSelectFooterProps<M extends DefaultMetaType = DefaultMetaType> = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'children' | 'onChange'
> & {
    children: React.HTMLAttributes<HTMLDivElement>['children'];
    meta?: M;
    options: string[];
    onChange: (value: string[]) => void;
};

export type MultiSelectFooterActionProps<M extends DefaultMetaType = DefaultMetaType> =
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        meta?: M;
    };

export type MultiSelectControlProps<M extends DefaultMetaType = DefaultMetaType> = SelectControlProps<
    MultiSelectValue,
    M
>;

export type MultiSelectInputSearchProps<M extends DefaultMetaType = DefaultMetaType> = SelectInputSearchProps<M>;

export type MultiSelectHeaderProps<M extends DefaultMetaType = DefaultMetaType> = SelectHeaderProps<
    MultiSelectValue,
    M
> & {
    searchable: boolean;
};

export type MultiSelectOptionProps<M extends DefaultMetaType = DefaultMetaType> = SelectOptionProps<string, M>;

export type MultiSelectMenuListProps<M extends DefaultMetaType = DefaultMetaType> = SelectMenuListProps<
    MultiSelectValue,
    M
>;

export type MultiSelectMenuProps<M extends DefaultMetaType = DefaultMetaType> = SelectMenuProps<MultiSelectValue, M>;

export type MultiSelectMenuBodyProps<M extends DefaultMetaType = DefaultMetaType> = SelectMenuBodyProps<
    MultiSelectValue,
    M
>;

export type MultiSelectDropdownIndicatorProps<M extends DefaultMetaType = DefaultMetaType> =
    SelectDropdownIndicatorProps<MultiSelectValue, M>;

export type MultiSelectLoadingIndicatorProps<M extends DefaultMetaType = DefaultMetaType> = SelectLoadingIndicatorProps<
    MultiSelectValue,
    M
>;

export type MultiSelectReferenceProps<M extends DefaultMetaType = DefaultMetaType> = SelectReferenceProps<
    MultiSelectValue,
    M
>;

export type MultiSelectPlaceholderProps<M extends DefaultMetaType = DefaultMetaType> = SelectPlaceholderProps<
    MultiSelectValue,
    M
>;

export type MultiSelectRenderControlTagsProps<M extends DefaultMetaType = DefaultMetaType> = {
    meta?: M;
    value: MultiSelectValue;
    items: React.ReactElement<MultiSelectItemProps>[];
    disabled: boolean;
    isSelected: (value: string) => boolean;
    onDelete: (value: string) => void;
};

export type MultiSelectComponents<M extends DefaultMetaType = DefaultMetaType> = {
    Reference: React.ForwardRefExoticComponent<MultiSelectReferenceProps<M> & React.RefAttributes<HTMLDivElement>>;
    DropdownIndicator: React.ForwardRefExoticComponent<
        MultiSelectDropdownIndicatorProps<M> & React.RefAttributes<HTMLButtonElement>
    >;
    LoadingIndicator: React.ForwardRefExoticComponent<
        MultiSelectLoadingIndicatorProps<M> & React.RefAttributes<HTMLDivElement>
    >;
    Placeholder: React.ForwardRefExoticComponent<MultiSelectPlaceholderProps<M> & React.RefAttributes<HTMLSpanElement>>;
    Control: React.ForwardRefExoticComponent<MultiSelectControlProps<M> & React.RefAttributes<HTMLDivElement>>;
    Header: React.ForwardRefExoticComponent<MultiSelectHeaderProps<M> & React.RefAttributes<HTMLDivElement>>;
    Menu: React.ForwardRefExoticComponent<MultiSelectMenuProps<M> & React.RefAttributes<HTMLDivElement>>;
    MenuBody: React.ForwardRefExoticComponent<MultiSelectMenuBodyProps<M> & React.RefAttributes<HTMLDivElement>>;
    MenuList: React.ForwardRefExoticComponent<MultiSelectMenuListProps<M>> & React.RefAttributes<HTMLUListElement>;
    Option: React.ForwardRefExoticComponent<MultiSelectOptionProps<M> & React.RefAttributes<HTMLLIElement>>;
    Tag: React.ForwardRefExoticComponent<MultiSelectTagProps<M> & React.RefAttributes<HTMLSpanElement>>;
    InputSearch: React.ForwardRefExoticComponent<
        MultiSelectInputSearchProps<M> & React.RefAttributes<HTMLInputElement>
    >;

    RenderControlTags: React.FC<MultiSelectRenderControlTagsProps<M>>;
    Tags: React.ForwardRefExoticComponent<MultiSelectTagsProps<M> & React.RefAttributes<HTMLDivElement>>;
    Footer: React.ForwardRefExoticComponent<MultiSelectFooterProps<M> & React.RefAttributes<HTMLDivElement>>;
    FooterAction: React.ForwardRefExoticComponent<
        MultiSelectFooterActionProps<M> & React.RefAttributes<HTMLButtonElement>
    >;
};

export type MultiSelectSize = 'sm' | 'md';

export type InternalItemProps<M extends DefaultMetaType = DefaultMetaType> = {
    activeIndex: number | null;
    Component: MultiSelectComponents<M>['Option'];
    meta?: M;
    isVisible: (value: string, label: string) => boolean;
    isSelected: (value: string) => boolean;
    onUnselect: (value: string) => void;
    onSelect: (value: string) => void;
    isDisabled?: boolean;
};

export type MultiSelectItemProps = {
    value: string;
    children: string;
    isDeprecated?: boolean;
};

export type MultiSelectProps<M extends DefaultMetaType = DefaultMetaType> = {
    id?: string;
    value?: MultiSelectValue;
    meta?: M;
    defaultOpen?: boolean;
    open?: boolean;
    defaultValue?: string[];
    placeholder?: string;
    searchable?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    isValid?: boolean;
    isLoading?: boolean;
    sizing?: MultiSelectSize;
    helperText?: string | React.JSX.Element;
    errorMessage?: string;
    children: React.ReactElement<MultiSelectItemProps>[];
    components?: Partial<MultiSelectComponents<M>>;
    filterOption?: (value: string, label: string, input: string) => boolean;
    /**
     * @deprecated
     * Will be removed in the next major release.
     */
    onBlur?: React.HTMLAttributes<HTMLDivElement>['onBlur'];
    onChange?: (value: string[]) => void;
    onChangeOpen?: (value: boolean) => void;
    placement?: AlignedPlacement;
    offset?: OffsetOptions;
};

export type MultiDropdownPickerMeta<T = unknown> = {
    itemsMap: Map<string, T>;
};

export type MultiDropdownPickerProps<T = unknown, M extends DefaultMetaType = DefaultMetaType> = Omit<
    MultiSelectProps<M>,
    'value' | 'onChange' | 'children' | 'components' | 'filterOption'
> & {
    value?: T[];
    items: T[];
    components?: Partial<MultiSelectComponents<M & MultiDropdownPickerMeta<T>>>;
    readValue?: (item: T) => string;
    readLabel?: (item: T) => string;
    filterOption?: (item: T, input: string) => boolean;
    onChange: (value: T[]) => void;
};
