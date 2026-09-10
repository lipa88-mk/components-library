import React, { FC } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { args, argTypes } from './config';
import { EnvelopeIcon, MapIcon, LinkIcon } from '@heroicons/react/24/outline';
import { TabbedView } from '../TabbedView';
import type { TabbedViewProps } from '../models';
import { Content } from './helper';

const meta: Meta<typeof TabbedView> = {
    title: 'Components/TabbedView/Features',
    tags: ['!autodocs'],
    component: TabbedView,
    args,
    argTypes,
};

export default meta;

export const Default: StoryFn<TabbedViewProps> = args => (
    <TabbedView {...args}>
        <TabbedView.Tab title={'Tab 1'}>
            <Content length="midium" />
        </TabbedView.Tab>
        <TabbedView.Tab title={'Tab 2'} active>
            <Content />
        </TabbedView.Tab>
        <TabbedView.Tab title={'Tab 3'} Icon={MapIcon}>
            <Content length="midium" />
        </TabbedView.Tab>
        <TabbedView.Tab title={'Tab 4'} disable>
            <Content />
        </TabbedView.Tab>
    </TabbedView>
);
Default.args = {
    size: 'sm',
};
Default.parameters = {
    controls: {
        include: ['size'],
    },
};

export const tooltip: StoryFn<TabbedViewProps> = args => (
    <TabbedView {...args}>
        <TabbedView.Tab title={'Some element 1'} Icon={EnvelopeIcon} tooltipText={'Other tooltip description 1'}>
            <Content length="midium" />
        </TabbedView.Tab>
        <TabbedView.Tab title={'Some element 2'} Icon={MapIcon} tooltipText={'Other tooltip description 2'}>
            <Content />
        </TabbedView.Tab>
        <TabbedView.Tab disable title={'Disabled tab'} Icon={EnvelopeIcon} tooltipText={'Other tooltip description 3'}>
            <Content />
        </TabbedView.Tab>
        <TabbedView.Tab title={'Some element 4'} Icon={LinkIcon} tooltipText={'Other tooltip description 4'}>
            <Content length="midium" />
        </TabbedView.Tab>
    </TabbedView>
);
tooltip.args = {
    tooltipPosition: 'right',
};
tooltip.parameters = {
    controls: {
        include: ['tooltipPosition'],
    },
};

export const VerticalTabs: StoryFn<TabbedViewProps> = args => (
    <TabbedView {...args}>
        <TabbedView.Tab title={'Tab 1'}>
            <Content length="midium" />
        </TabbedView.Tab>
        <TabbedView.Tab title={'Tab 2'} active>
            <Content />
        </TabbedView.Tab>
        <TabbedView.Tab title={'Tab 3'} Icon={MapIcon}>
            <Content length="midium" />
        </TabbedView.Tab>
        <TabbedView.Tab title={'Tab 4'} disable>
            <Content />
        </TabbedView.Tab>
    </TabbedView>
);
VerticalTabs.args = {
    mode: 'vertical',
};
VerticalTabs.parameters = {
    controls: {
        include: ['mode'],
    },
};

export const TabsWithTextAndIcon: StoryFn<TabbedViewProps> = args => (
    <TabbedView {...args}>
        <TabbedView.Tab title={'Title 1'} Icon={EnvelopeIcon}>
            <Content />
        </TabbedView.Tab>
        <TabbedView.Tab
            title={
                'Too long title with many simbols in it Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque magni odio, dolores soluta exercitationem consequuntur deleniti alias repellat, perferendis nobis'
            }
            Icon={MapIcon}
        >
            <Content length="midium" />
        </TabbedView.Tab>
        <TabbedView.Tab disable title={'Disabled tab'} Icon={EnvelopeIcon}>
            <Content />
        </TabbedView.Tab>
        <TabbedView.Tab title={'Title 4'} Icon={LinkIcon}>
            <Content />
        </TabbedView.Tab>
    </TabbedView>
);
TabsWithTextAndIcon.args = {
    mode: 'horizontal',
    iconPosition: 'left',
};
TabsWithTextAndIcon.parameters = {
    controls: {
        include: ['iconPosition', 'mode'],
    },
};

export const IconOnly: StoryFn<TabbedViewProps> = args => (
    <TabbedView {...args}>
        <TabbedView.Tab title={'Some element 1'} Icon={EnvelopeIcon}>
            <Content length="midium" />
        </TabbedView.Tab>
        <TabbedView.Tab title={'Some element 2'} Icon={MapIcon}>
            <Content />
        </TabbedView.Tab>
        <TabbedView.Tab disable title={'Disabled tab'} Icon={EnvelopeIcon}>
            <Content />
        </TabbedView.Tab>
        <TabbedView.Tab title={'Some element 3'} Icon={LinkIcon}>
            <Content length="midium" />
        </TabbedView.Tab>
    </TabbedView>
);
IconOnly.args = {
    iconOnly: true,
};
IconOnly.parameters = {
    controls: {
        include: ['iconOnly', 'mode'],
    },
};

export const WrappedContainer: StoryFn<TabbedViewProps> = args => (
    <TabbedView {...args}>
        <TabbedView.Tab title={'long'}>
            <div className="w-full max-h-96">
                <Content length="long" className="p-8 bg-lime-50" />
            </div>
        </TabbedView.Tab>
        <TabbedView.Tab title={'midium'}>
            <div className="w-full max-h-96">
                <Content length="midium" className="pl-10  bg-lime-50" />
            </div>
        </TabbedView.Tab>
        <TabbedView.Tab title={'short'}>
            <div className="w-full max-h-96">
                <Content className="p-0  bg-lime-50" />
            </div>
        </TabbedView.Tab>
    </TabbedView>
);
WrappedContainer.decorators = [
    Story => (
        <>
            <h2 className="">Parent's container with fixed height: </h2>
            <div className="border border-slate-600 h-96">
                <Story />
            </div>
        </>
    ),
];
WrappedContainer.args = {
    overflowVisible: false,
    showPadding: false,
};
WrappedContainer.parameters = {
    controls: {
        include: ['overflowVisible', 'showPadding', 'mode'],
    },
};

export const SlideManyTabs: StoryFn<TabbedViewProps> = args => (
    <TabbedView {...args}>
        <TabbedView.Tab key={1} title={'Some element 1'} Icon={MapIcon}>
            <Content />
        </TabbedView.Tab>
        <TabbedView.Tab key={2} title={'Some element'} Icon={MapIcon}>
            <Content />
        </TabbedView.Tab>
        <TabbedView.Tab key={3} title={'Some element'} Icon={MapIcon}>
            content 3
        </TabbedView.Tab>
        <TabbedView.Tab key={4} title={'Some element'} Icon={MapIcon}>
            content 4
        </TabbedView.Tab>
        <TabbedView.Tab key={5} title={'Some element'} Icon={MapIcon}>
            content 5
        </TabbedView.Tab>
        <TabbedView.Tab key={6} title={'Some element'} Icon={MapIcon}>
            content 6
        </TabbedView.Tab>
        <TabbedView.Tab key={7} title={'Some element'} Icon={MapIcon}>
            content 7
        </TabbedView.Tab>
        <TabbedView.Tab key={8} title={'Some element'} Icon={MapIcon}>
            content 8
        </TabbedView.Tab>
        <TabbedView.Tab key={9} title={'Some element'} Icon={MapIcon}>
            content 9
        </TabbedView.Tab>
        <TabbedView.Tab key={10} title={'Some element'} Icon={MapIcon}>
            content 10
        </TabbedView.Tab>
        <TabbedView.Tab key={11} title={'Some element'} Icon={MapIcon}>
            content 11
        </TabbedView.Tab>
        <TabbedView.Tab key={12} title={'Some element'} Icon={MapIcon}>
            content 12
        </TabbedView.Tab>
        <TabbedView.Tab key={13} title={'Some element'} Icon={MapIcon}>
            content 13
        </TabbedView.Tab>
        <TabbedView.Tab key={14} title={'Some element'} Icon={MapIcon}>
            content 14
        </TabbedView.Tab>
        <TabbedView.Tab key={15} title={'Some element last'} Icon={MapIcon}>
            content 15 last
        </TabbedView.Tab>
    </TabbedView>
);
SlideManyTabs.args = {
    showBrowserScroll: false,
    mode: 'horizontal',
};
SlideManyTabs.parameters = {
    controls: {
        include: ['showBrowserScroll'],
    },
};

export const BrowseManyTabs: StoryFn<TabbedViewProps> = args => (
    <TabbedView {...args}>
        <TabbedView.Tab key={1} title={'Some element 1'} Icon={MapIcon}>
            <Content />
        </TabbedView.Tab>
        <TabbedView.Tab key={2} title={'Some element'} Icon={MapIcon}>
            <Content />
        </TabbedView.Tab>
        <TabbedView.Tab key={3} title={'Some element'} Icon={MapIcon}>
            content 3
        </TabbedView.Tab>
        <TabbedView.Tab key={4} title={'Some element'} Icon={MapIcon}>
            content 4
        </TabbedView.Tab>
        <TabbedView.Tab key={5} title={'Some element'} Icon={MapIcon}>
            content 5
        </TabbedView.Tab>
        <TabbedView.Tab key={6} title={'Some element'} Icon={MapIcon}>
            content 6
        </TabbedView.Tab>
        <TabbedView.Tab key={7} title={'Some element'} Icon={MapIcon}>
            content 7
        </TabbedView.Tab>
        <TabbedView.Tab key={8} title={'Some element'} Icon={MapIcon}>
            content 8
        </TabbedView.Tab>
        <TabbedView.Tab key={9} title={'Some element'} Icon={MapIcon}>
            content 9
        </TabbedView.Tab>
        <TabbedView.Tab key={10} title={'Some element'} Icon={MapIcon}>
            content 10
        </TabbedView.Tab>
        <TabbedView.Tab key={11} title={'Some element'} Icon={MapIcon}>
            content 11
        </TabbedView.Tab>
        <TabbedView.Tab key={12} title={'Some element'} Icon={MapIcon}>
            content 12
        </TabbedView.Tab>
        <TabbedView.Tab key={13} title={'Some element'} Icon={MapIcon}>
            content 13
        </TabbedView.Tab>
        <TabbedView.Tab key={14} title={'Some element'} Icon={MapIcon}>
            content 14
        </TabbedView.Tab>
        <TabbedView.Tab key={15} title={'Some element last'} Icon={MapIcon}>
            content 15 last
        </TabbedView.Tab>
    </TabbedView>
);
BrowseManyTabs.decorators = [
    Story => (
        <>
            <h2 className="">Parent's container with fixed height: </h2>
            <div className="border border-slate-600 h-96">
                <Story />
            </div>
        </>
    ),
];
BrowseManyTabs.args = {
    showBrowserScroll: true,
};
BrowseManyTabs.parameters = {
    controls: {
        include: ['showBrowserScroll', 'mode'],
    },
};
