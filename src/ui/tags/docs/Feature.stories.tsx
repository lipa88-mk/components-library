import React, { cloneElement } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { TagsProps, TagsItemProps } from '../models';
import { Tags } from '../Tags';
import { args, argTypes, parameters } from './config';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Tags> = {
    title: 'Components/Tags/Features',
    tags: ['!autodocs'],
    component: Tags,
    args,
    argTypes,
    parameters,
};

export default meta;

export const Deletable: StoryFn<TagsProps> = props => <Tags {...props} />;

Deletable.args = {
    ...args,
    children: Array.isArray(args.children)
        ? args.children.map(child =>
              cloneElement<TagsItemProps>(child, {
                  onDelete: action('onDelete'),
              })
          )
        : [],
};
