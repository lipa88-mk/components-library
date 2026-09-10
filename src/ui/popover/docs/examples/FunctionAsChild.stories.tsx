import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Popover } from '../../Popover';
import type { PopoverProps } from '../../models';
import { args, argTypes } from '../config';
import { Button } from '../../../button';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover/Examples',
    component: Popover,
    argTypes,
    args,
};

export const FunctionAsChild: StoryFn<PopoverProps> = props => (
    <Popover {...props}>
        <Button.Primary type="button">Click me!</Button.Primary>
        <Popover.Content className="divide-y divide-border-soft">
            {({ onChangeOpen }) => (
                <Popover.List>
                    <Popover.Item
                        className="flex items-center gap-2 justify-between"
                        onSelect={() => onChangeOpen(false)}
                    >
                        Accept <CheckIcon className="w-4 h-4" />
                    </Popover.Item>
                    <Popover.Item
                        className="flex items-center gap-2 justify-between"
                        onSelect={() => onChangeOpen(false)}
                    >
                        Decline <XMarkIcon className="w-4 h-4" />
                    </Popover.Item>
                </Popover.List>
            )}
        </Popover.Content>
    </Popover>
);

export default meta;
