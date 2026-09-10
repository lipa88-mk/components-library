import React from 'react';
import type { ArgTypes, Parameters } from '@storybook/react';
import type { PopoverProps } from '..';
import { Popover } from '..';
import { Button } from '../../button';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<PopoverProps> = {
    children: {
        control: false,
        description:
            'The first child should be an element that triggers the popover, such as a button or link. <br />' +
            'The second child should be an element that contains the popover content, which can include text, links, or other interactive elements.',
        table: {
            type: {
                summary: '[trigger: React.ReactNode, content: React.ReactNode]',
            },
        },
    },
    defaultOpen: {
        control: false,
        description:
            'Determines if the popover is initially open. This is used for uncontrolled components where the open state is managed internally.',
    },
    open: {
        control: false,
        description:
            'Controls the open state of the popover. This is a controlled prop, meaning it must be managed by the parent component.',
    },
    placement: {
        description: 'The final placement of the popover relative to the reference element.',
        table: {
            type: { summary: 'Placement' },
        },
    },
    fallbackAxisSideDirection: {
        description:
            'Whether to allow fallback to the opposite axis if no placements along the preferred placement axis fit, and if so, which side direction along that axis to choose. If necessary, it will fallback to the other direction.',
    },
    offset: {
        description:
            'A number represents the distance (gutter or margin) between the floating element and the reference element. An object can also be passed, which enables you to individually configure each axis.',
        table: {
            type: {
                summary: 'OffsetOptions',
            },
        },
    },
    onChangeOpen: {
        control: false,
        table: {
            defaultValue: {
                summary: 'noop',
            },
        },
        description: 'Callback function triggered when the open state of the popover changes.',
    },
};

export const args: Partial<PopoverProps> = {
    placement: 'bottom-start',
    offset: 12,
    children: [
        <Button.Primary key="trigger" type="button">
            Click me!
        </Button.Primary>,
        <Popover.Content key="content">
            <Popover.List>
                <Popover.Item>Create new subfolder</Popover.Item>
                <Popover.Item>Delete folder</Popover.Item>
                <Popover.Item>Empty folder</Popover.Item>
                <Popover.Item>Move</Popover.Item>
            </Popover.List>
        </Popover.Content>,
    ],
    onChangeOpen: action('onChangeOpen'),
};

export const parameters: Parameters = {
    controls: {
        exclude: ['children'],
    },
};
