import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../SkeletonCard';
import SkeletonCard from '../SkeletonCard';
import { args, argTypes } from './config';

const meta: Meta<typeof SkeletonCard> = {
    title: 'Components/Skeleton/Card',
    component: SkeletonCard,
    argTypes,
    args: {
        ...args,
        children: <div className="py-4 px-6 rounded-lg bg-slate-100 text-black">some loaded content</div>,
    },
};

export const Playground: StoryFn<Props> = props => <SkeletonCard {...props} />;

Playground.parameters = {
    controls: { exclude: ['length'] },
};

export default meta;
