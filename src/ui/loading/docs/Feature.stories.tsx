import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { LoadingProps } from '../Loading';
import { Loading } from '../Loading';
import { args, argTypes } from './config';

const meta: Meta<typeof Loading> = {
    title: 'Components/Loading/Features',
    tags: ['!autodocs'],
    component: Loading,
    args,
    argTypes,
    decorators: [
        Story => (
            <div style={{ minHeight: 250 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

export const IsLoading: StoryFn<LoadingProps> = props => <Loading {...props} />;

IsLoading.parameters = {
    controls: {
        include: 'isLoading',
    },
};

export const Message: StoryFn<LoadingProps> = props => <Loading {...props} />;

Message.parameters = {
    controls: {
        include: 'message',
    },
};
