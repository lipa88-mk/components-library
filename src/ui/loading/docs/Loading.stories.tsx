import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { LoadingProps, Loading } from '../Loading';
import { args, argTypes } from './config';

const meta: Meta<typeof Loading> = {
    title: 'Components/Loading',
    component: Loading,
    argTypes,
    args,
};

export const Playground: StoryFn<LoadingProps> = props => <Loading {...props} />;

export default meta;
