import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../SkeletonList';
import SkeletonList from '../SkeletonList';
import { args, argTypes } from './config';

const meta: Meta<typeof SkeletonList> = {
    title: 'Components/Skeleton/List',
    component: SkeletonList,
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

export const Playground: StoryFn<Props> = props => <SkeletonList {...props} />;

export default meta;
