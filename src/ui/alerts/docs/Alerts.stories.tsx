import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AlertsProps } from '../Alerts';
import Alerts from '../Alerts';
import { args, argTypes } from './config';

const meta: Meta<typeof Alerts> = {
    title: 'Components/Alerts',
    component: Alerts,
    argTypes,
    args,
};

export const Playground: StoryFn<AlertsProps> = props => <Alerts {...props} />;

export default meta;
