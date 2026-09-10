import type { ArgTypes } from '@storybook/react';
import type { AlertsProps } from '../Alerts';

export const argTypes: ArgTypes<AlertsProps> = {
    title: {
        control: 'text',
        description: 'Optional title',
    },
    message: {
        control: 'text',
        description: 'Optional description',
    },
    list: {
        description: 'Optional list',
    },
    theme: {
        control: 'inline-radio',
        options: ['info', 'warning', 'danger', 'success'],
        description: 'With theme option action state can be selected',
    },
    linkTo: {
        control: 'text',
        description: 'Link to details page',
    },
    actionButtonText: {
        control: 'text',
        description: 'Action button text',
    },
    onActionClick: {
        control: false,
        description: 'Action function callback',
    },
    show: {
        control: 'boolean',
        description: 'Toggle to show and hide the component.',
    },
};

export const shortTextString = 'Attention needed';
export const LongTextString =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nisi? Sapiente itaque hic exercitationem culpa ad dolores tenetur id sint? Necessitatibus excepturi optio temporibus adipisci. Earum, veritatis. Est, voluptates itaque.';
export const textList = [
    'Your password must be at least 8 characters',
    'Your password must include at least one pro wrestling finishing move',
    LongTextString,
    'item 4',
];

export const args: Partial<AlertsProps> = {
    show: true,
    title: shortTextString,
    message: LongTextString,
    list: [],
    theme: 'info',
    linkTo: '',
};
