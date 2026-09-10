import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { FileImportProps } from '../FileImport';
import FileImport from '../FileImport';
import { args, argTypes, parameters } from './config';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof FileImport> = {
    title: 'Components/Buttons/FileImport/Features',
    tags: ['!autodocs'],
    component: FileImport,
    args,
    argTypes,
    parameters,
    decorators: [
        Story => (
            <div className={'flex'}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

export const Children: StoryFn<FileImportProps> = props => <FileImport {...props} />;

Children.args = {
    children: undefined,
};

Children.parameters = {
    controls: {
        include: ['children'],
    },
};

export const IconOnly: StoryFn<FileImportProps> = props => <FileImport {...props} />;

IconOnly.args = {
    children: undefined,
    Icon: CloudArrowUpIcon,
};

IconOnly.parameters = {
    controls: {
        include: ['children', 'Icon'],
    },
};

export const IconPosition: StoryFn<FileImportProps> = props => <FileImport {...props} />;

IconPosition.args = {
    iconPosition: 'left',
    Icon: CloudArrowUpIcon,
    children: 'Select file',
};

IconPosition.parameters = {
    controls: { include: ['Icon', 'iconPosition', 'children'] },
};

export const Disabled: StoryFn<FileImportProps> = props => <FileImport {...props} />;

Disabled.args = {
    iconPosition: 'left',
    Icon: CloudArrowUpIcon,
    children: 'Select file',
    disabled: true,
};

Disabled.parameters = {
    controls: { include: ['disabled'] },
};

export const Size: StoryFn<FileImportProps> = props => <FileImport {...props} />;

Size.args = {
    iconPosition: 'left',
    Icon: CloudArrowUpIcon,
    children: 'Select file',
};

Size.parameters = {
    controls: { include: ['size', 'children'] },
};

export const Active: StoryFn<FileImportProps> = props => <FileImport {...props} />;

Active.args = {
    iconPosition: 'left',
    Icon: CloudArrowUpIcon,
    children: 'Select file',
    active: true,
};

Active.parameters = {
    controls: { include: ['active'] },
};

export const ClassName: StoryFn<FileImportProps> = props => <FileImport {...props} />;

ClassName.args = {
    iconPosition: 'left',
    Icon: CloudArrowUpIcon,
    children: 'Select file',
    className: 'uppercase underline tracking-tight',
};

ClassName.parameters = {
    controls: { include: ['className'] },
};

export const Value: StoryFn<FileImportProps> = props => <FileImport {...props} />;

Value.args = {
    iconPosition: 'left',
    Icon: CloudArrowUpIcon,
    children: 'Select file',
    value: 'file.pdf',
};

Value.parameters = {
    controls: { include: ['value'] },
};

export const AdditionalInfo: StoryFn<FileImportProps> = props => <FileImport {...props} />;

AdditionalInfo.args = {
    additionalInfo: [
        'Maxmum supported file size - 10Mb',
        'Supported file formats  - pdf, png, jpg, jpeg, tif, tiff, xls',
    ],
};

AdditionalInfo.parameters = {
    controls: { include: ['additionalInfo'] },
};
