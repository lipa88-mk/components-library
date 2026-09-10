import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { ModalProps } from '../Modal';
import Modal from '../Modal';
import { SkeletonList } from '../../skeleton-list';
import { args, argTypes } from './config';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
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

export const Playground: StoryFn<ModalProps> = props => (
    <Modal {...props}>
        <div className="w-1/2 mb-4">
            <SkeletonList lines={2} />
        </div>
        <SkeletonList lines={10} />
    </Modal>
);

export default meta;
