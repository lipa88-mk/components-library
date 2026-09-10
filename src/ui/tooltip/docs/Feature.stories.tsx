import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Tooltip } from '../Tooltip';
import { type TooltipProps } from '../models';
import { args, argTypes, parameters } from './config';

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip/Features',
    tags: ['!autodocs'],
    component: Tooltip,
    args,
    argTypes,
    parameters,
};

export default meta;

export const Title: StoryFn<TooltipProps> = props => <Tooltip {...props} />;

Title.parameters = {
    controls: {
        include: 'title',
    },
};

export const Placement: StoryFn<TooltipProps> = props => <Tooltip {...props} />;

Placement.parameters = {
    controls: {
        include: 'placement',
    },
};

export const ShowArrow: StoryFn<TooltipProps> = props => <Tooltip {...props} />;

ShowArrow.parameters = {
    controls: {
        include: 'showArrow',
    },
};

export const DisableHoverListener: StoryFn<TooltipProps> = props => <Tooltip {...props} />;

DisableHoverListener.parameters = {
    controls: {
        include: 'disableHoverListener',
    },
};

DisableHoverListener.args = {
    disableHoverListener: true,
};

export const DisableFocusListener: StoryFn<TooltipProps> = props => <Tooltip {...props} />;

DisableFocusListener.parameters = {
    controls: {
        include: 'disableFocusListener',
    },
};

DisableFocusListener.args = {
    disableFocusListener: true,
};

export const DisableClickListener: StoryFn<TooltipProps> = props => <Tooltip {...props} />;

DisableClickListener.parameters = {
    controls: {
        include: 'disableClickListener',
    },
};

DisableClickListener.args = {
    disableClickListener: true,
};

export const DisableInteractive: StoryFn<TooltipProps> = props => <Tooltip {...props} />;

DisableInteractive.parameters = {
    controls: {
        include: 'disableInteractive',
    },
};

DisableInteractive.args = {
    disableInteractive: true,
};

export const EnterDelay: StoryFn<TooltipProps> = props => <Tooltip {...props} />;

EnterDelay.parameters = {
    controls: {
        include: 'enterDelay',
    },
};

export const LeaveDelay: StoryFn<TooltipProps> = props => <Tooltip {...props} />;

LeaveDelay.parameters = {
    controls: {
        include: 'leaveDelay',
    },
};

LeaveDelay.args = {
    leaveDelay: 500,
};
