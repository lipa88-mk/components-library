import type { ArgTypes } from '@storybook/react';
import type { TabbedViewProps } from '../models';

export const argTypes: ArgTypes<TabbedViewProps> = {
    children: {
        control: false,
    },
    size: {
        description: 'Size of Tabs navigation buttons.',
        options: ['sm', 'md', 'lg'],
        control: { type: 'inline-radio' },
    },
    iconPosition: {
        description: 'Option to set position of the icon in tabs navigation bar.',
        options: ['left', 'right', 'top', 'bottom'],
        control: { type: 'inline-radio' },
    },
    iconOnly: {
        description: 'Mode to shop only icons in tabs navigation bar.',
        control: 'boolean',
    },
    activeTab: {
        description: 'Option to set open tab from the list in navigation bar.',
        control: 'text',
    },
    onSelect: {
        control: false,
    },
    overflowVisible: {
        description: 'Option to set overflow behavior.',
        control: 'boolean',
    },
    showPadding: {
        description: 'Option to turn on/off default paddings for content area.',
        control: 'boolean',
    },
    showBrowserScroll: {
        description:
            'Option to switch between browser scroll or Slider component in case of overflow in tabs navigation bar.',
        control: 'boolean',
    },
    mode: {
        description: 'Mode of navigation bar and tabs content.',
        options: ['horizontal', 'vertical'],
        control: { type: 'inline-radio' },
    },
    tooltipPosition: {
        description: 'Tooltip placement relative to the target element.',
        table: {
            type: { summary: 'Placement' },
        },
    },
    fullWidth: {
        description: 'Option to stretch items in horizontal direction.',
        table: {
            type: { summary: 'Placement' },
        },
    },
};

export const args: Partial<TabbedViewProps> = {
    size: 'sm',
    mode: 'horizontal',
    iconPosition: 'left',
    iconOnly: false,
    overflowVisible: false,
    showPadding: true,
    showBrowserScroll: false,
    fullWidth: false,
};
