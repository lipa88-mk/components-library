import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import SkeletonRow from '../SkeletonRow';
import { args, argTypes } from './config';

const meta: Meta<typeof SkeletonRow> = {
    title: 'Components/Skeleton/Row/Features',
    tags: ['!autodocs'],
    component: SkeletonRow,
    args,
    argTypes,
};

export default meta;

export const Stacked: StoryFn = () => (
    <div className="flex flex-col gap-2 w-full">
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
    </div>
);
