import type { ArgTypes } from '@storybook/react';
import type { SwitcherProps } from '../Switcher';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<SwitcherProps> = {
    label: {
        control: 'text',
        description: 'Label text near by the Switcher to describe what this action refer to.',
    },
    active: {
        control: 'boolean',
        description: 'If `true` switcher is turned on, in opposite - turned off. Like a default value. ',
    },
    className: {
        control: 'text',
        description: 'Some custom styles that can be applied in addition to default styles.',
    },
    disabled: {
        control: 'boolean',
        description: ' If `true`, the Switcher will be disabled and unclickable',
    },
    errorMessage: {
        control: 'text',
        description: 'An error message displayed below the component to inform users of validation issues.',
    },
    onChange: {
        description: 'A callback function that is triggered when the textarea state changes.',
    },
};

export const args: Partial<SwitcherProps> = {
    label: 'Switcher label text',
    active: false,
    disabled: false,
    errorMessage: '',
    className: '',
    onChange: action('onChange'),
};
