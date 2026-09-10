import React from 'react';
import { type TooltipProps } from '../models';
import type { ArgTypes, Parameters } from '@storybook/react';
import { Button } from '../../button';

export const argTypes: ArgTypes<TooltipProps> = {
    title: {
        description: 'The content displayed inside the tooltip.',
        control: 'text',
    },
    placement: {
        description: 'Tooltip placement relative to the target element.',
        table: {
            type: { summary: 'Placement' },
        },
    },
    showArrow: {
        description: 'Determines if the tooltip should display an arrow.',
        control: 'boolean',
    },
    disableHoverListener: {
        description: 'Do not respond to hover events.',
        control: 'boolean',
    },
    disableFocusListener: {
        description: 'Do not respond to focus-visible events.',
        control: 'boolean',
    },
    disableClickListener: {
        description: 'Do not respond to click events.',
        control: 'boolean',
    },
    disableInteractive: {
        description: 'Makes a tooltip not interactive.',
    },
    enterDelay: {
        description:
            'The number of milliseconds to wait before showing the tooltip,  applicable only for hover events.',
    },
    leaveDelay: {
        description: 'The number of milliseconds to wait before hiding the tooltip,  applicable only for hover events.',
    },
};

export const args: Partial<TooltipProps> = {
    title: 'Click here to submit the form',
    showArrow: false,
    disableHoverListener: false,
    disableFocusListener: false,
    disableClickListener: true,
    disableInteractive: false,
    enterDelay: 1000,
    leaveDelay: 0,
    placement: 'top',
    children: <Button.Primary>Submit</Button.Primary>,
};

export const parameters: Parameters = {
    controls: {
        exclude: ['children', 'className', 'renderReferenceElement'],
    },
    layout: 'centered',
};
