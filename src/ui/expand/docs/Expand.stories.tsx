import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { ExpandProps } from '../Expand';
import Expand from '../Expand';
import { args, argTypes } from './config';
import { TvIcon } from '@heroicons/react/20/solid';

const meta: Meta<typeof Expand> = {
    title: 'Components/Expand',
    component: Expand,
    argTypes,
    args,
};

export const Playground: StoryFn<ExpandProps> = props => <Expand {...props} />;
Playground.args = {
    TitleIcon: TvIcon,
};

export default meta;
