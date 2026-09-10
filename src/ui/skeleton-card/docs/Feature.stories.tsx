import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../SkeletonCard';
import SkeletonCard from '../SkeletonCard';
import { args, argTypes } from './config';

const meta: Meta<typeof SkeletonCard> = {
    title: 'Components/Skeleton/Card/Features',
    tags: ['!autodocs'],
    component: SkeletonCard,
    args,
    argTypes,
};

export default meta;

export const SingleRow: StoryFn<Props> = props => <SkeletonCard {...props} />;

SingleRow.args = {
    rows: 1,
};

SingleRow.parameters = {
    controls: { include: ['rows'] },
};

export const TwoRows: StoryFn<Props> = props => <SkeletonCard {...props} />;

TwoRows.args = {
    rows: 2,
};

TwoRows.parameters = {
    controls: { include: ['rows'] },
};

export const WithLoadedContent: StoryFn<Props> = props => (
    <SkeletonCard {...props}>
        <div className="py-4 px-6 rounded-lg bg-slate-100 text-black">some loaded content</div>
    </SkeletonCard>
);

WithLoadedContent.args = {
    loading: false,
};

WithLoadedContent.parameters = {
    controls: { include: ['loading'] },
};
