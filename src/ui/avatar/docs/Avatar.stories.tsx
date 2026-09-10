import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Props, Avatar } from '../Avatar';
import { args, argTypes } from './config';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes,
    args,
};

export const Playground: StoryFn<Props> = props => <Avatar {...props} />;

export default meta;
