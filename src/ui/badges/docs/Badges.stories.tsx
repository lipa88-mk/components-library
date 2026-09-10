import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BadgesProps, Badges } from '../Badges';
import { args, argTypes } from './config';

const meta: Meta<typeof Badges> = {
    title: 'Components/Badges',
    component: Badges,
    argTypes,
    args,
    parameters: {
        controls: {
            exclude: ['title'],
        },
    },
};

export const Playground: StoryFn<BadgesProps> = props => <Badges {...props} />;

export default meta;
