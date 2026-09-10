import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { ModalProps } from '../Modal';
import Modal from '../Modal';
import { SkeletonList } from '../../skeleton-list';
import { args, argTypes } from './config';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal/Features',
    tags: ['!autodocs'],
    component: Modal,
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
        <div className="w-1/2 mb-4">
            <SkeletonList lines={2} />
        </div>
        <SkeletonList lines={10} />
    </>
);

export const Size: StoryFn<ModalProps> = props => (
    <Modal {...props}>
        <Content />
    </Modal>
);

Size.args = {
    size: 'small',
};

Size.parameters = {
    controls: { include: ['size'] },
};

export const CloseOnClickOutside: StoryFn<ModalProps> = props => (
    <Modal {...props}>
        <Content />
    </Modal>
);

CloseOnClickOutside.args = {
    closeOnClickOutside: true,
};

CloseOnClickOutside.parameters = {
    controls: { include: ['closeOnClickOutside'] },
};

export const WithoutTitle: StoryFn<ModalProps> = props => (
    <Modal {...props}>
        <Content />
    </Modal>
);

WithoutTitle.args = {
    title: undefined,
};

WithoutTitle.parameters = {
    controls: { include: ['title'] },
};
