import type { FC } from 'react';
import { forwardRef } from 'react';
import React from 'react';
import { Labelify } from '../../labelify';
import type { LabelifyProps } from '../../labelify/Labelify';
import type { HorizontalAlignment, VerticalAlignment } from '../models';
import { MultiSelect, type MultiDropdownPickerMeta, type MultiSelectComponents } from '../../multi-select';
import { Select, type SelectComponents } from '../../select';

type FieldWrapperProps = Omit<LabelifyProps, 'size'>;

export const FieldWrapper: FC<React.PropsWithChildren<FieldWrapperProps>> = ({
    label,
    disabled,
    required,
    id,
    children,
}) =>
    label ? (
        <Labelify required={required} label={label} disabled={disabled} id={id}>
            {children}
        </Labelify>
    ) : (
        <>{children}</>
    );

export const getHorizontalAlignmentClassName = (alignment: HorizontalAlignment = 'left') => {
    const textAlignStyle: Record<HorizontalAlignment, string> = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
    return textAlignStyle[alignment];
};

export const getVerticalAlignmentClassName = (alignment: VerticalAlignment = 'top') => {
    const textAlignStyle: Record<VerticalAlignment, string> = {
        top: 'items-start',
        center: 'items-center',
        bottom: 'items-end',
    };
    return textAlignStyle[alignment];
};

type GetMultiSelectComponentsOptions = {
    showSelectedTags: boolean | undefined;
    showSelectControls: boolean | undefined;
    searchable: boolean | undefined;
};

type GetSelectComponentsOptions = Omit<GetMultiSelectComponentsOptions, 'showSelectControls'>;

const noopForwardRef = <T, P>() => forwardRef<T, P>(() => null);
const noopFC = () => null;

export const getSelectComponents = <T = unknown,>({
    showSelectedTags = true,
    searchable = true,
}: GetSelectComponentsOptions): Partial<SelectComponents<T>> => {
    return {
        Tag: showSelectedTags ? Select.Tag : noopForwardRef(),
        Header: searchable || showSelectedTags ? Select.Header : noopForwardRef(),
    } as Partial<SelectComponents<T>>;
};

export const getMultiselectComponents = <T = unknown,>({
    showSelectedTags = true,
    showSelectControls = true,
    searchable = true,
}: GetMultiSelectComponentsOptions): Partial<MultiSelectComponents<MultiDropdownPickerMeta<T>>> => {
    return {
        Tags: showSelectedTags ? MultiSelect.Tags : noopForwardRef(),
        RenderControlTags: showSelectedTags ? MultiSelect.RenderControlTags : noopFC,
        Header: searchable || showSelectedTags ? MultiSelect.Header : noopForwardRef(),
        Footer: showSelectControls ? MultiSelect.Footer : noopForwardRef(),
    } as Partial<MultiSelectComponents<MultiDropdownPickerMeta<T>>>;
};
