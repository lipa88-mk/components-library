import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { ButtonProps } from '../models';
import Button from '../Button';
import { ImportProps } from '../models';
import { args, argTypes } from './config';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
    title: 'Components/Buttons/Button/Features',
    tags: ['!autodocs'],
    component: Button,
    args,
    argTypes,
};

export default meta;

export const Size: StoryFn<ButtonProps> = props => (
    <div className="flex gap-4">
        <Button.Primary {...props} />
        <Button.Secondary {...props} />
        <Button.Tertiary {...props} />
        <Button.Ghost {...props} />
    </div>
);

Size.args = {
    size: 'sm',
};

Size.parameters = {
    controls: { include: ['size'] },
};

export const Coloring: StoryFn<ButtonProps> = props => (
    <div className="flex gap-4">
        <Button.Primary {...props} />
        <Button.Secondary {...props} />
        <Button.Tertiary {...props} />
        <Button.Ghost {...props} />
    </div>
);

Coloring.args = {
    coloring: 'neutral',
};

Coloring.parameters = {
    controls: { include: ['coloring'] },
};

export const Disabled: StoryFn<ButtonProps> = props => (
    <div className="flex gap-4">
        <Button.Primary {...props} />
        <Button.Secondary {...props} />
        <Button.Tertiary {...props} />
        <Button.Ghost {...props} />
    </div>
);

Disabled.args = {
    disabled: true,
};

Disabled.parameters = {
    controls: { include: ['disabled'] },
};

export const Active: StoryFn<ButtonProps> = props => (
    <div className="flex gap-4">
        <Button.Primary {...props} />
        <Button.Secondary {...props} />
        <Button.Tertiary {...props} />
        <Button.Ghost {...props} />
    </div>
);

Active.args = {
    active: true,
};

Active.parameters = {
    controls: { include: ['active'] },
};

export const isLoading: StoryFn<ButtonProps> = props => (
    <div className="flex gap-4">
        <Button.Primary {...props} />
        <Button.Secondary {...props} />
        <Button.Tertiary {...props} />
        <Button.Ghost {...props} />
    </div>
);

isLoading.args = {
    isLoading: true,
};

isLoading.parameters = {
    controls: { include: ['isLoading'] },
};

export const IconOnly: StoryFn<ButtonProps> = props => (
    <div className="flex gap-4">
        <Button.Primary {...props} />
        <Button.Secondary {...props} />
        <Button.Tertiary {...props} />
        <Button.Ghost {...props} />
    </div>
);

IconOnly.args = {
    children: undefined,
    iconPosition: undefined,
    Icon: EnvelopeIcon,
};

IconOnly.parameters = {
    controls: { include: ['children'] },
};

export const IconPosition: StoryFn<ButtonProps> = props => (
    <div className="flex gap-4">
        <Button.Primary {...props} />
        <Button.Secondary {...props} />
        <Button.Tertiary {...props} />
        <Button.Ghost {...props} />
    </div>
);
IconPosition.args = {
    children: 'Click me',
    iconPosition: 'right',
    Icon: EnvelopeIcon,
};

IconPosition.parameters = {
    controls: { include: ['iconPosition'] },
};

export const InnerAlignment: StoryFn<ButtonProps> = props => (
    <div className="flex gap-4">
        <Button.Primary {...props} />
        <Button.Secondary {...props} />
        <Button.Tertiary {...props} />
        <Button.Ghost {...props} />
    </div>
);

InnerAlignment.args = {
    children: 'Click me',
    innerAlignment: 'left',
    Icon: EnvelopeIcon,
    className: 'w-full',
};

InnerAlignment.parameters = {
    controls: { include: ['innerAlignment'] },
};

export const WithCustomStyles: StoryFn<ButtonProps> = props => <Button.Primary {...props} />;

WithCustomStyles.args = {
    children: 'Click me',
    className: 'w-56 shadow-md shadow-orange-400',
};

WithCustomStyles.parameters = {
    controls: { include: ['className'] },
};

export const ButtonImportPlayground: StoryFn<ImportProps> = props => <Button.Import {...props} />;
ButtonImportPlayground.args = {
    size: 'md',
    children: 'Select file',
    disabled: false,
    active: false,
    iconPosition: undefined,
    Icon: EnvelopeIcon,
    onClick: action('onClick'),
    onImport: action('onClick'),
};
ButtonImportPlayground.argTypes = {
    onImport: {
        control: false,
        description: 'A custom function to specify an action that should happen when something is imported',
    },
    onClick: {
        control: false,
        description: 'A custom function to specify an action that should happen when user click on the component',
    },
};
ButtonImportPlayground.parameters = {
    controls: {
        exclude: ['coloring'],
    },
};
