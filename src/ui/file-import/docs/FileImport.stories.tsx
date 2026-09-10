import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { FileImportProps } from '../FileImport';
import FileImport from '../FileImport';
import { args, argTypes, parameters } from './config';

const meta: Meta<typeof FileImport> = {
    title: 'Components/Buttons/FileImport',
    component: FileImport,
    argTypes,
    args,
    parameters,
    decorators: [
        Story => (
            <div className={'flex'}>
                <Story />
            </div>
        ),
    ],
};

export const Playground: StoryFn<FileImportProps> = props => <FileImport {...props} />;

export default meta;
