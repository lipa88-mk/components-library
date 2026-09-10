import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TextareaProps, Textarea } from '../Textarea';
import { args, argTypes } from './config';

const meta: Meta<typeof Textarea> = {
    title: 'Form Elements/Textarea',
    component: Textarea,
    argTypes,
    args,
};

export const Playground: StoryFn<TextareaProps> = props => <Textarea {...props} />;

export default meta;
