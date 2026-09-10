import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../Drawer';
import Drawer from '../Drawer';
import { SkeletonList } from '../../skeleton-list';
import { Button } from '../../button';
import { args, argTypes } from './config';

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer/Features',
    tags: ['!autodocs'],
    component: Drawer,
    args,
    argTypes,
    decorators: [
        Story => (
            <div className="flex">
                <div className="w-full">
                    <SkeletonList lines={20} />
                </div>
                <Story />
            </div>
        ),
    ],
};

export default meta;

const Content = () => (
    <>
        <div className="w-full mb-4">
            <SkeletonList lines={2} />
        </div>
        <SkeletonList lines={10} />
    </>
);

export const WithHeader: StoryFn<Props> = props => (
    <Drawer {...props}>
        <Content />
    </Drawer>
);

WithHeader.args = {
    header: 'Drawer title',
};

WithHeader.parameters = {
    controls: { include: ['header'] },
};

export const WithActions: StoryFn<Props> = props => (
    <Drawer {...props}>
        <Content />
    </Drawer>
);

WithActions.args = {
    header: 'Drawer title',
    actions: (
        <>
            <Button.Ghost coloring="neutral">Cancel</Button.Ghost>
            <Button.Primary>Save</Button.Primary>
        </>
    ),
};

export const Size: StoryFn<Props> = props => (
    <Drawer {...props}>
        <Content />
    </Drawer>
);

Size.args = {
    size: 'sm',
};

Size.parameters = {
    controls: { include: ['size'] },
};

export const WithOverlay: StoryFn<Props> = props => (
    <Drawer {...props}>
        <Content />
    </Drawer>
);

WithOverlay.args = {
    overlay: true,
};

WithOverlay.parameters = {
    controls: { include: ['overlay'] },
};

export const Draggable: StoryFn<Props> = props => (
    <Drawer {...props}>
        <Content />
    </Drawer>
);

Draggable.args = {
    draggable: true,
};

Draggable.parameters = {
    controls: { include: ['draggable'] },
};
