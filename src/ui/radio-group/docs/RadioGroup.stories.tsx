import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioGroup from '../RadioGroup';
import { args, argTypes, defaultItems } from './config';

const meta: Meta<typeof RadioGroup> = {
    title: 'Form Elements/RadioGroup',
    component: RadioGroup,
    argTypes,
    args,
};

export const Playground: StoryFn<typeof RadioGroup> = props => {
    const [value, setValue] = useState(defaultItems[0].value);
    return <RadioGroup {...props} items={defaultItems} value={value} onChange={setValue} />;
};

Playground.parameters = {
    controls: { exclude: ['onChange'] },
};

export default meta;
