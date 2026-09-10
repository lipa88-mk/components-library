import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { ButtonGroupSwitchProps } from '../models';
import ButtonGroupSwitch from '../ButtonGroupSwitch';
import { args, argTypes } from './config';
import { Button } from '../../button';

const meta: Meta<typeof ButtonGroupSwitch> = {
    title: 'Components/Buttons/ButtonGroupSwitch',
    component: ButtonGroupSwitch,
    argTypes,
    args,
};

export const Playground: StoryFn<ButtonGroupSwitchProps> = props => (
    <ButtonGroupSwitch {...props}>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary>Button active</Button.Primary>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary active>Button active</Button.Primary>
        <Button.Primary disabled>Button disabled</Button.Primary>
        <Button.Primary>Button </Button.Primary>
    </ButtonGroupSwitch>
);
Playground.parameters = {
    controls: { exclude: ['level'] },
};

export default meta;
