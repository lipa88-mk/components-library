import type { ArgTypes } from '@storybook/react';
import type { Props } from '../Avatar';

export const argTypes: ArgTypes<Props> = {
    userName: {
        description: 'The name of the user displayed in the avatar.',
        control: 'text',
    },
    userAvatarUrl: {
        description: 'The URL of the user avatar image.',
        control: 'text',
    },
    size: {
        description: 'The size of the avatar.',
        control: {
            type: 'select',
        },
    },
};

export const args: Partial<Props> = {
    userName: 'John Doe',
    userAvatarUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    size: 'xl',
};
