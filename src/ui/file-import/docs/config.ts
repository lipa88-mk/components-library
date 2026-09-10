import type { ArgTypes } from '@storybook/react';
import type { FileImportProps } from '../FileImport';
import { action } from '@storybook/addon-actions';

export const argTypes: ArgTypes<FileImportProps> = {
    size: {
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
        control: { type: 'inline-radio' },
        description: 'The size on the button, affects paddings and icon/text size',
    },
    Icon: {
        control: 'object',
        description: 'svg icon can be provided',
    },
    iconPosition: {
        control: { type: 'inline-radio' },
        options: ['left', 'right', 'top', 'bottom'],
        description:
            'If `Icon` and text label for the button are provided, allows to set the position of the icon on the sides of the text',
    },
    disabled: {
        description: 'If `true`, the button will be disabled and unclickable',
        control: 'boolean',
    },
    active: {
        description: 'If `true`, the button will be shown as pressed/selected',
        control: 'boolean',
    },
    additionalInfo: {
        description: 'An array of strings to set a list of additional information items',
    },
    children: {
        control: 'text',
        description: 'Text string to set a caption instead of the default "Choose file"',
    },
    onClick: {
        control: false,
        description: 'A custom function to specify an action that should happen when user clicks on the component',
    },
    className: {
        control: 'text',
        description: 'Optional class names for FileImport button styles',
    },
    value: {
        description: 'Initial value for the FileImport component to set selected file',
    },
    isLoading: {
        control: false,
        description: 'WIP. Not supported at the moment',
    },
    innerAlignment: {
        control: false,
        description: 'WIP. Not supported at the moment',
    },
};

export const args: Partial<FileImportProps> = {
    size: 'md',
    Icon: undefined,
    iconPosition: undefined,
    disabled: false,
    active: false,
    additionalInfo: [],
    children: undefined,
    onClick: action('onClick'),
};

export const parameters = {
    controls: { exclude: ['isLoading', 'innerAlignment', 'coloring'] },
};
