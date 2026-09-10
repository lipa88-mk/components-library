import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { LabelifyProps } from '../Labelify';
import { Labelify } from '../index';
import { args, argTypes } from './config';
import { Input } from '../../input';

const meta: Meta<typeof Labelify> = {
    title: 'Form Elements/Labelify/Features',
    tags: ['!autodocs'],
    component: Labelify,
    args,
    argTypes,
};

export default meta;

export const WithId: StoryFn<LabelifyProps> = props => <Labelify {...props} />;
WithId.args = {
    id: 'some-custom-id',
    children: <Input value="Check `id` in inspector" />,
};
WithId.parameters = {
    controls: { include: ['id'] },
};

export const Disabled: StoryFn<LabelifyProps> = props => <Labelify {...props} />;
Disabled.args = {
    disabled: true,
    children: <Input value="5" type="number" />,
};
Disabled.parameters = {
    controls: { include: ['disabled'] },
};

export const Required: StoryFn<LabelifyProps> = props => <Labelify {...props} />;
Required.args = {
    required: true,
    children: <Input value="" enableInternalValidation={false} />,
};
Required.parameters = {
    controls: { include: ['required'] },
};

export const Sizes: StoryFn<LabelifyProps> = props => <Labelify {...props} />;
Sizes.args = {
    children: <Input />,
};
Sizes.parameters = {
    controls: { include: ['size'] },
};
