import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { Props } from '../Slider';
import Slider from '../Slider';
import { args, argTypes } from './config';

const meta: Meta<typeof Slider> = {
    title: 'Components/Slider/Features',
    tags: ['!autodocs'],
    component: Slider,
    args,
    argTypes,
    decorators: [
        Story => (
            <div className="p-4">
                <Story />
            </div>
        ),
    ],
};

export default meta;

export const NoOverflow: StoryFn<Props> = props => (
    <Slider {...props}>
        <ul className="flex gap-2">
            <li className="w-24 p-3 border border-slate-300">1</li>
            <li className="w-24 p-3 border border-slate-300">2</li>
            <li className="w-24 p-3 border border-slate-300">3</li>
        </ul>
    </Slider>
);

export const CustomClassName: StoryFn<Props> = props => (
    <Slider {...props}>
        <ul className="flex gap-2">
            <li className="w-96 p-3 border border-slate-300">1</li>
            <li className="w-96 p-3 border border-slate-300">2</li>
            <li className="w-96 p-3 border border-slate-300">3</li>
            <li className="w-96 p-3 border border-slate-300">4</li>
            <li className="w-96 p-3 border border-slate-300">5</li>
        </ul>
    </Slider>
);

CustomClassName.args = {
    className: 'rounded-md bg-bg-surface1',
};

CustomClassName.parameters = {
    controls: { include: ['className'] },
};
