import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { SkeletonCardsProps } from '../SkeletonCards';
import SkeletonCards from '../SkeletonCards';
import { args, argTypes } from './config';

const meta: Meta<typeof SkeletonCards> = {
    title: 'Components/Skeleton/Cards',
    component: SkeletonCards,
    argTypes,
    args: {
        ...args,
        className: 'w-full',
        rows: 1,
        length: 3,
        children: <div className="py-4 px-6 rounded-lg bg-slate-100 text-black">some loaded content</div>,
    },
};

export const Playground: StoryFn<SkeletonCardsProps> = props => <SkeletonCards {...props} />;

export default meta;
