import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Tags } from '../Tags';
import type { TagsProps } from '../models';
import { args, argTypes, parameters } from './config';

const meta: Meta<typeof Tags> = {
    title: 'Components/Tags',
    component: Tags,
    argTypes,
    args,
    parameters,
};

export const Playground: StoryFn<TagsProps> = props => <Tags {...props} />;

export default meta;
