import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../SkeletonList';
import SkeletonList from '../SkeletonList';
import { args, argTypes } from './config';

const meta: Meta<typeof SkeletonList> = {
    title: 'Components/Skeleton/List/Features',
    tags: ['!autodocs'],
    component: SkeletonList,
    args,
    argTypes,
    decorators: [
        Story => (
            <div className="flex">
                <Story />
            </div>
        ),
    ],
};

export default meta;

export const FewLines: StoryFn<Props> = props => <SkeletonList {...props} />;

FewLines.args = {
    lines: 3,
};

FewLines.parameters = {
    controls: { include: ['lines'] },
};

export const ManyLines: StoryFn<Props> = props => <SkeletonList {...props} />;

ManyLines.args = {
    lines: 20,
};

ManyLines.parameters = {
    controls: { include: ['lines'] },
};
