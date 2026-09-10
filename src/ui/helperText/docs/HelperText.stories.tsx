import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Props, HelperText } from '../HelperText';
import { args, argTypes } from './config';

const meta: Meta<typeof HelperText> = {
    title: 'Form Elements/HelperText',
    component: HelperText,
    argTypes,
    args,
};

export const Playground: StoryFn<Props> = props => (
    <section>
        <div className="bg-slate-200 py-2 px-4 rounded">some element</div>
        <HelperText {...props} />
    </section>
);

Playground.args = {
    className: 'mt-1',
};

export default meta;
