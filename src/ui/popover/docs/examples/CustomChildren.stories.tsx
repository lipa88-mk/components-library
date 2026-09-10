import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Popover, usePopoverContext } from '../..';
import type { PopoverItemProps, PopoverProps } from '../../models';
import { args, argTypes } from '../config';
import { Button } from '../../../button';
import { Avatar } from '../../../avatar';
import {
    UserCircleIcon,
    FolderIcon,
    BriefcaseIcon,
    BuildingOfficeIcon,
    ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover/Examples',
    component: Popover,
    argTypes,
    args,
};

const Content = () => {
    const { onChangeOpen } = usePopoverContext();
    const handleSelect: PopoverItemProps['onSelect'] = () => {
        onChangeOpen(false);
    };

    return (
        <>
            <div className="py-2 flex items-center gap-2">
                <Avatar userAvatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                <div className="text-sm">
                    <span className="block font-bold text-gray-900">@john_doe</span>
                    <span className="block text-slate-600">John Doe</span>
                </div>
            </div>
            <Popover.List className="py-2">
                <Popover.Item className="flex items-center gap-2" onSelect={handleSelect}>
                    <UserCircleIcon className="w-4 h-4" /> Your profile
                </Popover.Item>
                <Popover.Item className="flex items-center gap-2" onSelect={handleSelect}>
                    <FolderIcon className="w-4 h-4" /> Your repositories
                </Popover.Item>
                <Popover.Item className="flex items-center gap-2" onSelect={handleSelect}>
                    <BriefcaseIcon className="w-4 h-4" />
                    Your projects
                </Popover.Item>
                <Popover.Item className="flex items-center gap-2" onSelect={handleSelect}>
                    <BuildingOfficeIcon className="w-4 h-4" /> Your organizations
                </Popover.Item>
                <Popover.Item className="flex items-center gap-2" onSelect={handleSelect}>
                    <ArrowRightStartOnRectangleIcon className="w-4 h-4" /> Logout
                </Popover.Item>
            </Popover.List>
        </>
    );
};

export const CustomChildren: StoryFn<PopoverProps> = props => (
    <Popover {...props}>
        <Button.Primary type="button">Click me!</Button.Primary>
        <Popover.Content className="divide-y divide-border-soft">
            <Content />
        </Popover.Content>
    </Popover>
);

export default meta;
