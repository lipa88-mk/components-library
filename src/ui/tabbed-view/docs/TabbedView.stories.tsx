import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { TabbedViewProps } from '../models';
import { TabbedView } from '../TabbedView';
import { args, argTypes } from './config';
import { EnvelopeIcon, MapIcon, LinkIcon } from '@heroicons/react/24/outline';
import { Content } from './helper';

const meta: Meta<typeof TabbedView> = {
    title: 'Components/TabbedView',
    component: TabbedView,
    argTypes,
    args,
};

export const Playground: StoryFn<TabbedViewProps> = props => (
    <TabbedView {...props}>
        <TabbedView.Tab title={'Title1'} Icon={MapIcon}>
            <Content length="long" />
        </TabbedView.Tab>
        <TabbedView.Tab title={'Too long title with many simbols in it'} Icon={EnvelopeIcon}>
            <Content length="midium" />
        </TabbedView.Tab>
        <TabbedView.Tab disable title={'Disabled tab'} Icon={MapIcon}>
            Disabled content should not be visible
        </TabbedView.Tab>
        <TabbedView.Tab title={'Title4'} Icon={LinkIcon}>
            <Content />
        </TabbedView.Tab>
    </TabbedView>
);

export default meta;
