import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../Avatar';
import { Avatar } from '../Avatar';
import { args, argTypes } from './config';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar/Features',
    tags: ['!autodocs'],
    component: Avatar,
    args,
    argTypes,
};

export default meta;

export const UserName: StoryFn<Props> = props => <Avatar {...props} />;

UserName.parameters = {
    controls: {
        include: 'userName',
    },
};

UserName.args = {
    userAvatarUrl: undefined,
};

export const UserAvatar: StoryFn<Props> = props => <Avatar {...props} />;

UserAvatar.parameters = {
    controls: {
        include: 'userAvatarUrl',
    },
};

UserAvatar.args = {
    userName: undefined,
};

export const Size: StoryFn<Props> = props => <Avatar {...props} />;

Size.parameters = {
    controls: {
        include: 'size',
    },
};
