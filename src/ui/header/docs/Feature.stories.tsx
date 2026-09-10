import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { HeaderProps } from '../Header';
import Header from '../Header';
import { args, argTypes } from './config';
import HeaderPortal from '../HeaderPortal';

const meta: Meta<typeof Header> = {
    title: 'Components/Header/Features',
    tags: ['!autodocs'],
    component: Header,
    args,
    argTypes,
};

export default meta;

export const Logo: StoryFn<HeaderProps> = props => <Header {...props} />;
Logo.args = {
    userName: undefined,
};
Logo.parameters = {
    controls: { include: ['Logo'] },
};

export const userName: StoryFn<HeaderProps> = props => <Header {...props} />;
userName.parameters = {
    controls: { include: ['userName'] },
};

export const SectionsMenu: StoryFn<HeaderProps> = props => <Header {...props} />;
SectionsMenu.args = {
    SectionsMenu: () => (
        <div className="border h-full border-danger-default uppercase text-fg-default ">SectionsMenu</div>
    ),
};
SectionsMenu.parameters = {
    controls: { include: ['SectionsMenu'] },
};

export const ProfileMenuFooter: StoryFn<HeaderProps> = props => <Header {...props} />;
ProfileMenuFooter.args = {
    profileMenuFooter: <div className="text-xs">App version: 1.2.3</div>,
};
SectionsMenu.parameters = {
    controls: { include: ['SectionsMenu'] },
};

export const WithCenterPortal: StoryFn<HeaderProps> = props => <Header {...props} />;
WithCenterPortal.decorators = [
    Story => (
        <div>
            <Story />
            <HeaderPortal position={'center'}>center portal content</HeaderPortal>
        </div>
    ),
];
WithCenterPortal.parameters = {
    controls: { include: [] },
};

export const WithRightPortal: StoryFn<HeaderProps> = props => <Header {...props} />;
WithRightPortal.decorators = [
    Story => (
        <div>
            <Story />
            <HeaderPortal position={'right'}>right portal content</HeaderPortal>
        </div>
    ),
];
WithCenterPortal.parameters = {
    controls: { include: [] },
};

export const WithLeftPortal: StoryFn<HeaderProps> = props => <Header {...props} />;
WithLeftPortal.decorators = [
    Story => (
        <div>
            <Story />
            <HeaderPortal position={'left'}>left portal content</HeaderPortal>
        </div>
    ),
];
WithLeftPortal.parameters = {
    controls: { include: [] },
};

export const WithBottomPortal: StoryFn<HeaderProps> = props => <Header {...props} />;
WithBottomPortal.decorators = [
    Story => (
        <div>
            <Story />
            <HeaderPortal position={'bottom'}>bottom portal content</HeaderPortal>
        </div>
    ),
];
WithBottomPortal.parameters = {
    controls: { include: [] },
};

export const AllPortals: StoryFn<HeaderProps> = props => <Header {...props} />;
AllPortals.decorators = [
    Story => (
        <div>
            <Story />
            <HeaderPortal position={'center'}>
                <div className=" w-full bg-danger-muted">center portal content</div>
            </HeaderPortal>
            <HeaderPortal position={'right'}>
                <div className=" w-full bg-success-muted">right portal content</div>
            </HeaderPortal>
            <HeaderPortal position={'left'}>
                <div className=" w-full bg-warning-muted">left portal content</div>
            </HeaderPortal>
            <HeaderPortal position={'bottom'}>
                <div className=" w-full bg-info-muted">bottom portal content</div>
            </HeaderPortal>
        </div>
    ),
];
AllPortals.parameters = {
    controls: { include: [] },
};

export const LeftOverflowingContent: StoryFn<HeaderProps> = props => <Header {...props} />;
LeftOverflowingContent.decorators = [
    Story => (
        <div>
            <Story />
            <HeaderPortal position={'center'}>
                <div className=" w-full bg-danger-muted">center portal</div>
            </HeaderPortal>
            <HeaderPortal position={'right'}>
                <div className=" w-full bg-success-muted">right portal </div>
            </HeaderPortal>
            <HeaderPortal position={'left'}>
                <div className=" w-full bg-warning-muted">
                    left portal Overflowing Content Overflowing Content Overflowing Content Overflowing Content
                </div>
            </HeaderPortal>
            <HeaderPortal position={'bottom'}>
                <div className=" w-full bg-info-muted">bottom portal </div>
            </HeaderPortal>
        </div>
    ),
];
LeftOverflowingContent.parameters = {
    controls: { include: [] },
};

export const CenterOverflowingContent: StoryFn<HeaderProps> = props => <Header {...props} />;
CenterOverflowingContent.decorators = [
    Story => (
        <div>
            <Story />
            <HeaderPortal position={'center'}>
                <div className=" w-full bg-danger-muted">
                    center portal Overflowing Content Overflowing Content Overflowing Content Overflowing Content
                </div>
            </HeaderPortal>
            <HeaderPortal position={'right'}>
                <div className=" w-full bg-success-muted">right portal </div>
            </HeaderPortal>
            <HeaderPortal position={'left'}>
                <div className=" w-full bg-warning-muted">left portal</div>
            </HeaderPortal>
            <HeaderPortal position={'bottom'}>
                <div className=" w-full bg-info-muted">bottom portal </div>
            </HeaderPortal>
        </div>
    ),
];
CenterOverflowingContent.parameters = {
    controls: { include: [] },
};

export const RightOverflowingContent: StoryFn<HeaderProps> = props => <Header {...props} />;
RightOverflowingContent.decorators = [
    Story => (
        <div>
            <Story />
            <HeaderPortal position={'center'}>
                <div className=" w-full bg-danger-muted">center portal </div>
            </HeaderPortal>
            <HeaderPortal position={'right'}>
                <div className=" w-full bg-success-muted">
                    right portal Overflowing Content Overflowing Content Overflowing Content Overflowing Content
                </div>
            </HeaderPortal>
            <HeaderPortal position={'left'}>
                <div className=" w-full bg-warning-muted">left portal</div>
            </HeaderPortal>
            <HeaderPortal position={'bottom'}>
                <div className=" w-full bg-info-muted">bottom portal</div>
            </HeaderPortal>
        </div>
    ),
];
RightOverflowingContent.parameters = {
    controls: { include: [] },
};

export const BottomOverflowingContent: StoryFn<HeaderProps> = props => <Header {...props} />;
BottomOverflowingContent.decorators = [
    Story => (
        <div>
            <Story />
            <HeaderPortal position={'center'}>
                <div className=" w-full bg-danger-muted">center portal </div>
            </HeaderPortal>
            <HeaderPortal position={'right'}>
                <div className=" w-full bg-success-muted">right portal </div>
            </HeaderPortal>
            <HeaderPortal position={'left'}>
                <div className=" w-full bg-warning-muted">left portal</div>
            </HeaderPortal>
            <HeaderPortal position={'bottom'}>
                <div className=" w-full bg-info-muted">
                    bottom portal Overflowing Content Overflowing Content Overflowing Content Overflowing Content
                    Overflowing Content Overflowing Content Overflowing Content
                </div>
            </HeaderPortal>
        </div>
    ),
];
BottomOverflowingContent.parameters = {
    controls: { include: [] },
};
