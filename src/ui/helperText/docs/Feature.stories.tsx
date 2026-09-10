import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../HelperText';
import { HelperText } from '../HelperText';
import { args, argTypes } from './config';
import { Input } from '../../input';

const meta: Meta<typeof HelperText> = {
    title: 'Form Elements/HelperText/Features',
    tags: ['!autodocs'],
    component: HelperText,
    args,
    argTypes,
};

export default meta;

export const className: StoryFn<Props> = props => (
    <section>
        <div className="bg-slate-200 py-2 px-4 rounded">some element</div>
        <HelperText {...props} />
    </section>
);

className.args = {
    className: 'mt-2 px-1 border-l-2 border-blue-400 ',
    children: 'Some text with a hint and custom classes',
};

export const WithInput: StoryFn<Props> = props => <Input helperText={'Some text with a hint.'} />;
WithInput.parameters = {
    controls: {
        include: [],
    },
};
