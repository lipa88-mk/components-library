import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { BadgesProps } from '../Badges';
import { Badges, BadgesWrapper, Badge } from '../Badges';
import { args, argTypes } from './config';

const meta: Meta<typeof Badges> = {
    title: 'Components/Badges/Components',
    component: Badges,
    args,
    argTypes,
};

export default meta;

export const BadgesWrapperComponent: StoryFn<BadgesProps> = ({ list }) => (
    <BadgesWrapper>
        {list.map(item => (
            <li key={item}>
                <mark>{item}</mark>
            </li>
        ))}
    </BadgesWrapper>
);

BadgesWrapperComponent.storyName = 'BadgesWrapper';

BadgesWrapperComponent.parameters = {
    controls: {
        include: [],
    },
};

export const BadgeComponent: StoryFn<BadgesProps> = ({ list }) => (
    <ul>
        {list.map(item => (
            <Badge key={item} label={item} />
        ))}
    </ul>
);

BadgeComponent.storyName = 'Badge';

BadgeComponent.parameters = {
    controls: {
        include: [],
    },
};
