import React, { forwardRef, useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { MultiSelect } from '../MultiSelect';
import { MultiSelectFooterProps, type MultiSelectProps, MultiSelectTagsProps } from '../models';
import { args, argTypes, parameters } from './config';
import { Button } from '../../button';

const meta: Meta<typeof MultiSelect> = {
    title: 'Form Elements/MultiSelect/Recipes',
    component: MultiSelect,
    args,
    argTypes,
    parameters,
};

export default meta;

type CustomFooterMeta = {
    onAdd: () => void;
};

export const CustomFooter: StoryFn<MultiSelectProps> = props => {
    const meta: CustomFooterMeta = {
        onAdd: () => alert('Add country'),
    };

    const Footer = forwardRef<HTMLDivElement, MultiSelectFooterProps<CustomFooterMeta>>(
        ({ options, onChange, meta }, ref) => (
            <MultiSelect.Footer ref={ref} options={options} onChange={onChange}>
                <MultiSelect.FooterAction onClick={() => meta?.onAdd()}>
                    <PlusCircleIcon className="w-4 h-4" /> Add country
                </MultiSelect.FooterAction>
            </MultiSelect.Footer>
        )
    );

    return <MultiSelect {...props} meta={meta} components={{ Footer }} />;
};

export const ControllableOpeningState: StoryFn<MultiSelectProps> = props => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div className="mb-3">
                <Button.Primary type="button" onClick={() => setOpen(true)}>
                    Open dropdown
                </Button.Primary>
            </div>
            <MultiSelect {...props} open={open} onChangeOpen={setOpen} />
        </>
    );
};

export const CustomTags: StoryFn<MultiSelectProps> = props => {
    const Tags = forwardRef<HTMLDivElement, MultiSelectTagsProps>(({ children, value = [] }, ref) => {
        return (
            <div ref={ref} className="flex gap-2 max-w-full overflow-hidden">
                {value.length > 0 && <mark className="shrink-0">Selected countries:</mark>}
                {children}
            </div>
        );
    });

    return <MultiSelect {...props} components={{ Tags }} />;
};
