import type { ArgTypes } from '@storybook/react';
import type { ExpandProps } from '../Expand';

export const argTypes: ArgTypes<ExpandProps> = {
    title: {
        control: 'text',
        description: 'Title of the component.',
    },
    expanded: {
        control: 'boolean',
        description: 'If true, expands the component, otherwise collapse it.',
    },
    size: {
        control: 'inline-radio',
        options: ['sm', 'md', 'lg'],
        description: 'Size of the component.',
    },
    TitleIcon: {
        description: 'Prop to provide svg icon hear by the `title`.',
    },
    titleIconPosition: {
        control: 'inline-radio',
        options: ['left', 'right'],
        description: 'Option to align title and svg icon.',
    },
    children: {
        description: 'The content of the component.',
    },
};

const expandContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, hic reprehenderit sed odio, sequi facere quia, nostrum vero delectus accusamus consequatur quod praesentium dolorem. Ducimus eligendi commodi sed dolorum? Necessitatibus.';

export const args: Partial<ExpandProps> = {
    title: 'Expand example',
    size: 'md',
    titleIconPosition: 'left',
    children: expandContent,
};
