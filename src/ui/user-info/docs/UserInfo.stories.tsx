import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../UserInfo';
import UserInfo from '../UserInfo';
import { args, argTypes } from './config';

const meta: Meta<typeof UserInfo> = {
    title: 'Components/UserInfo',
    component: UserInfo,
    argTypes,
    args,
};

export const Playground: StoryFn<Props> = props => <UserInfo {...props} />;

export default meta;
