import type { ArgTypes } from '@storybook/react';
import type { Props } from '../Drawer';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<Props> = {
    open: {
        control: 'boolean',
        description: 'Controls whether the drawer is visible',
    },
    header: {
        control: 'text',
        description: 'Content of the drawer header. A string is rendered as a styled `<h3>`',
    },
    size: {
        options: ['sm', 'md', 'lg'],
        control: { type: 'inline-radio' },
        description: 'The initial width of the drawer',
    },
    actions: {
        control: false,
        description: 'Footer node pinned to the bottom of the drawer (e.g. action buttons)',
    },
    overlay: {
        control: 'boolean',
        description: 'If `true`, renders a dimmed backdrop behind the drawer',
    },
    draggable: {
        control: 'boolean',
        description: 'If `true`, shows a handle on the left edge to resize the drawer width',
    },
    positionTopClassName: {
        control: 'text',
        description: 'Class controlling the top offset of the drawer (default `top-0`)',
    },
    childrenWrapClassName: {
        control: 'text',
        description: 'Extra classes for the wrapper around the drawer content',
    },
    onClose: {
        control: false,
        description: 'Called when the user closes the drawer or resizes it below the minimum width',
    },
    initialFocusRef: {
        control: false,
        description: 'Ref to the element that should receive focus when the drawer opens',
    },
};

export const args: Partial<Props> = {
    open: true,
    size: 'md',
    overlay: false,
    draggable: false,
    onClose: action('close'),
};
