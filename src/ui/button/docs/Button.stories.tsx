import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '../Button';
import { ButtonProps } from '../models';
import { args, argTypes } from './config';

const meta: Meta<typeof Button> = {
    title: 'Components/Buttons/Button',
    component: Button,
    argTypes,
    args,
};

export const Playground: StoryFn<ButtonProps> = props => (
    <div className="flex gap-4">
        <Button.Primary {...props} />
        <Button.Secondary {...props} />
        <Button.Tertiary {...props} />
        <Button.Ghost {...props} />
    </div>
);

export default meta;
