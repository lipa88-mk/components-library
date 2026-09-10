import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { BadgesProps } from '../Badges';
import { Badges, BadgesWrapper } from '../Badges';
import { args, argTypes } from './config';

const meta: Meta<typeof Badges> = {
    title: 'Components/Badges/Features',
    tags: ['!autodocs'],
    component: Badges,
    args,
    argTypes,
};

export default meta;

export const List: StoryFn<BadgesProps> = props => <Badges {...props} />;

List.parameters = {
    controls: {
        include: 'list',
    },
};

export const Size: StoryFn<BadgesProps> = props => <Badges {...props} />;

Size.parameters = {
    controls: {
        include: 'size',
    },
};

export const Color: StoryFn<BadgesProps> = props => <Badges {...props} />;

Color.parameters = {
    controls: {
        include: 'coloring',
    },
};
