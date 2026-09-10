import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { HeaderProps } from '../Header';
import Header from '../Header';
import { args, argTypes } from './config';

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    argTypes,
    args,
};

export const Playground: StoryFn<HeaderProps> = props => <Header {...props} />;

export default meta;
