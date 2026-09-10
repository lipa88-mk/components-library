import type { ArgTypes } from '@storybook/react';
import type { ModalProps } from '../Modal';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<ModalProps> = {
    title: {
        control: 'text',
        description: 'Content of the modal header, rendered as the dialog title',
    },
    open: {
        control: 'boolean',
        description: 'Controls whether the modal is visible',
    },
    size: {
        options: ['small', 'medium', 'default', 'large', 'xl-large', 'full'],
        control: { type: 'inline-radio' },
        description: 'The max width of the modal',
    },
    closeOnClickOutside: {
        control: 'boolean',
        description: 'If `true`, clicking the backdrop closes the modal',
    },
    onClose: {
        control: false,
        description: 'Called when the modal requests to close (close button, Esc, or backdrop click)',
    },
    initialFocus: {
        control: false,
        description: 'Ref to the element that should receive focus when the modal opens',
    },
    children: {
        control: false,
        description: 'Body content of the modal',
    },
};

export const args: Partial<ModalProps> = {
    title: 'Dialog title',
    open: true,
    size: 'default',
    closeOnClickOutside: false,
    onClose: action('close'),
};
