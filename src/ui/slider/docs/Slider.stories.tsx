import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../Slider';
import Slider from '../Slider';
import { args, argTypes } from './config';

const meta: Meta<typeof Slider> = {
    title: 'Components/Slider',
    component: Slider,
    argTypes,
    args,
    decorators: [
        Story => (
            <div className="p-4">
                <Story />
            </div>
        ),
    ],
};

export const Playground: StoryFn<Props> = props => (
    <Slider {...props}>
        <ul className="flex gap-2">
            <li className="w-96 p-3 border border-slate-300">1</li>
            <li className="w-96 p-3 border border-slate-300">2</li>
            <li className="w-96 p-3 border border-slate-300">3</li>
            <li className="w-96 p-3 border border-slate-300">4</li>
            <li className="w-96 p-3 border border-slate-300">5</li>
            <li className="w-96 p-3 border border-slate-300">6</li>
            <li className="w-96 p-3 border border-slate-300">7</li>
        </ul>
    </Slider>
);

export default meta;
