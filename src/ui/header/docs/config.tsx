import React from 'react';
import type { ArgTypes } from '@storybook/react';
import type { HeaderProps } from '../Header';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<HeaderProps> = {
    Logo: {
        control: false,
        description: 'Component with logo',
    },
    SectionsMenu: {
        control: false,
        description: 'Optional component for section menu',
    },
    onLogout: {
        control: false,
        description: 'Optional function for logout option in user dropdown menu',
    },
    userName: {
        control: 'text',
        description: 'Optional string for user name',
    },
};

export const args: Partial<HeaderProps> = {
    Logo: () => <div className="border h-full border-danger-default uppercase text-fg-default ">logo</div>,
    userName: 'John Smith',
    onLogout: action('onLogout'),
};
