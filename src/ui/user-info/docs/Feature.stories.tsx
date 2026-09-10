import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../UserInfo';
import UserInfo from '../UserInfo';
import { args, argTypes } from './config';

const meta: Meta<typeof UserInfo> = {
    title: 'Components/UserInfo/Features',
    tags: ['!autodocs'],
    component: UserInfo,
    args,
    argTypes,
};

export default meta;

const avatarUrl =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

export const Empty: StoryFn<Props> = props => <UserInfo {...props} />;

Empty.args = {
    userName: '',
};

export const WithInitials: StoryFn<Props> = props => <UserInfo {...props} />;

WithInitials.args = {
    userName: 'John Dow',
};

export const WithDescription: StoryFn<Props> = props => <UserInfo {...props} />;

WithDescription.args = {
    userName: 'John Dow',
    userDescription: 'Some long name or description or something else',
};

export const WithImage: StoryFn<Props> = props => <UserInfo {...props} />;

WithImage.args = {
    userName: 'John Doevovich Doev',
    userDescription: 'Some description or something else',
    userAvatarUrl: avatarUrl,
};

export const Sizes: StoryFn<Props> = props => <UserInfo {...props} />;

Sizes.args = {
    userName: 'John Doevovich Doev',
    userDescription: 'Some description or something else',
    userAvatarSize: 'lg',
    userAvatarUrl: avatarUrl,
};

export const CustomLayout: StoryFn<Props> = props => <UserInfo {...props} />;

CustomLayout.args = {
    userName: 'John Doevovich Doev',
    userDescription: 'Some description or something else',
    userAvatarSize: 'lg',
    userAvatarUrl: avatarUrl,
};
