import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../Drawer';
import Drawer from '../Drawer';
import { SkeletonList } from '../../skeleton-list';
import { args, argTypes } from './config';

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
    argTypes,
    args,
    decorators: [
        Story => (
            <div className="flex">
                <div className="flex w-full gap-4">
                    <div className="w-1/6">
                        <SkeletonList lines={6} />
                    </div>
                    <div className="w-2/6">
                        <SkeletonList lines={25} />
                    </div>
                    <div className="w-2/3">
                        <SkeletonList lines={10} />
                    </div>
                </div>
                <Story />
            </div>
        ),
    ],
};

export const Playground: StoryFn<Props> = props => (
    <Drawer {...props}>
        <div className="w-full mb-4">
            <SkeletonList lines={2} />
        </div>
        <SkeletonList lines={10} />
    </Drawer>
);

export default meta;
