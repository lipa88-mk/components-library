import type { ArgTypes } from '@storybook/react';
import type { Props } from '../UserInfo';

export const argTypes: ArgTypes<Props> = {
    userName: {
        control: 'text',
        description: 'The name of the user. Shown as text and used to derive the avatar initials',
    },
    userDescription: {
        control: 'text',
        description: 'A secondary line rendered under the name (role, email, etc.)',
    },
    userAvatarUrl: {
        control: 'text',
        description: 'The URL of the user avatar image',
    },
    userAvatarSize: {
        options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
        control: { type: 'inline-radio' },
        description: 'The size of the avatar',
    },
};

export const args: Partial<Props> = {
    userName: 'John Doe',
    userDescription: '',
    userAvatarUrl: '',
    userAvatarSize: 'md',
};
