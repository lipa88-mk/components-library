import type { ArgTypes } from '@storybook/react';
import type { ButtonProps } from '../models';
import { action } from '@storybook/addon-actions';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export const argTypes: ArgTypes<ButtonProps> = {
    size: {
        control: { type: 'inline-radio' },
        options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'],
        description: 'The size on the button, affects paddings and icon/text size',
    },
    coloring: {
        control: { type: 'inline-radio' },
        options: ['default', 'danger', 'warning', 'success', 'neutral'],
        description: 'Props for component theming',
    },
    disabled: {
        description: 'If `true`, the button will be disabled and unclickable',
        control: 'boolean',
    },
    active: {
        description: 'If `true`, the button will be shown as pressed/selected',
        control: 'boolean',
    },
    isLoading: {
        description: 'If `true`, sets button in a loading state and disable interactions',
        control: 'boolean',
    },
    iconPosition: {
        control: { type: 'inline-radio' },
        options: ['left', 'right', 'top', 'bottom'],
        description:
            'If `Icon` and text label are provided, allows to set the position of the icon on the sides of the text',
    },
    innerAlignment: {
        control: { type: 'inline-radio' },
        options: ['left', 'center', 'right'],
        description: 'Allows to set alignment text/icon if button is wider then the content',
    },
    className: {
        control: 'text',
        description: 'Prop to set extra styles',
    },
    onChange: {
        control: false,
        description: 'A custom function to specify an action that should happen when user clicks on the component',
    },
    children: {
        control: 'text',
        description: 'Rect component as button label can be provided',
    },
    Icon: {
        control: 'object',
        description: 'svg icon can be provided',
    },
};

export const args: Partial<ButtonProps> = {
    size: 'md',
    coloring: 'default',
    children: 'Click me',
    disabled: false,
    active: false,
    isLoading: false,
    iconPosition: 'left',
    innerAlignment: 'center',
    onChange: action('onChange'),
    Icon: EnvelopeIcon,
};
