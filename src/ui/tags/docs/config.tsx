import React from 'react';
import type { ArgTypes, Parameters } from '@storybook/react';
import { Tags } from '../Tags';
import type { TagsProps } from '../models';

export const argTypes: ArgTypes<TagsProps> = {};

export const args: Partial<TagsProps> = {
    children: [
        <Tags.Item key="US">United States</Tags.Item>,
        <Tags.Item key="SVG">Saint Vincent and the Grenadines</Tags.Item>,
        <Tags.Item key="MFS">Federated States of Micronesia</Tags.Item>,
        <Tags.Item key="CN">China</Tags.Item>,
        <Tags.Item key="IN">India</Tags.Item>,
        <Tags.Item key="DRC">Democratic Republic of the Congo</Tags.Item>,
        <Tags.Item key="BR">Brazil</Tags.Item>,
        <Tags.Item key="DE">Germany</Tags.Item>,
        <Tags.Item key="JP">Japan</Tags.Item>,
        <Tags.Item key="FR">France</Tags.Item>,
        <Tags.Item key="GB">United Kingdom</Tags.Item>,
        <Tags.Item key="PT">Portugal</Tags.Item>,
        <Tags.Item key="IT">Italy</Tags.Item>,
        <Tags.Item key="CA">Canada</Tags.Item>,
    ],
};

export const parameters: Parameters = {
    controls: {
        exclude: ['children'],
    },
};
