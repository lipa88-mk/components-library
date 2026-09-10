import type { ArgTypes } from '@storybook/react';
import type { Props } from '../HelperText';

export const argTypes: ArgTypes<Props> = {
    children: {
        description: 'The content of HelperText. Can be string or even JSX element',
        control: 'text',
    },
    className: {
        description: 'Additional classNames to position the component.',
        control: 'text',
    },
};

export const args: Partial<Props> = {
    children: 'Some text with a hint.',
    className: '',
};
