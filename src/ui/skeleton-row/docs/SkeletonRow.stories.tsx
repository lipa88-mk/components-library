import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SkeletonRow from '../SkeletonRow';
import { args, argTypes } from './config';

const meta: Meta<typeof SkeletonRow> = {
    title: 'Components/Skeleton/Row',
    component: SkeletonRow,
    argTypes,
    args,
    decorators: [
        Story => (
            <div className="flex">
                <Story />
            </div>
        ),
    ],
};

export const Playground: StoryFn = () => <SkeletonRow />;

export default meta;
