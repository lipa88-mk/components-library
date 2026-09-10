import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import RadioGroup from '../RadioGroup';
import { Labelify } from '../../labelify';
import { args, argTypes, itemsWithDescription } from './config';

const meta: Meta<typeof RadioGroup> = {
    title: 'Form Elements/RadioGroup/Features',
    tags: ['!autodocs'],
    component: RadioGroup,
    args,
    argTypes,
};

export default meta;

export const WithLabel: StoryFn<typeof RadioGroup> = props => (
    <Labelify label={'Some label for radio group elements'}>
        <RadioGroup {...props} />
    </Labelify>
);

WithLabel.parameters = {
    controls: { exclude: ['onChange'] },
};

export const WithDescription: StoryFn<typeof RadioGroup> = props => <RadioGroup {...props} />;

WithDescription.args = {
    items: itemsWithDescription,
    value: itemsWithDescription[1].value,
};

WithDescription.parameters = {
    controls: { exclude: ['onChange'] },
};

export const CustomLayout: StoryFn<typeof RadioGroup> = props => <RadioGroup {...props} />;

CustomLayout.args = {
    className: 'grid grid-cols-2 gap-4',
};

CustomLayout.parameters = {
    controls: { include: ['className'] },
};
