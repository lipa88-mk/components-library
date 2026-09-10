import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { ExpandProps } from '../Expand';
import Expand from '../Expand';
import { args, argTypes } from './config';
import { TvIcon } from '@heroicons/react/16/solid';
import { createTheme, ThemeProvider } from '../../../theming';

const meta: Meta<typeof Expand> = {
    title: 'Components/Expand/Features',
    tags: ['!autodocs'],
    component: Expand,
    args,
    argTypes,
};

export default meta;

export const Sizes: StoryFn<ExpandProps> = props => <Expand {...props} />;
Sizes.parameters = {
    controls: {
        include: ['size'],
    },
};

export const Expanded: StoryFn<ExpandProps> = props => <Expand {...props} />;
Expanded.args = {
    expanded: true,
};
Expanded.parameters = {
    controls: {
        include: ['expanded'],
    },
};

export const WithIcon: StoryFn<ExpandProps> = props => <Expand {...props} />;
WithIcon.args = {
    TitleIcon: TvIcon,
    titleIconPosition: 'left',
};
WithIcon.parameters = {
    controls: {
        include: ['titleIconPosition'],
    },
};

export const Nesting: StoryFn<ExpandProps> = props => <Expand {...props} />;
Nesting.args = {
    children: (
        <div className="ml-4">
            <Expand title="level 2">
                <div className="ml-4">
                    <Expand title="level 3">
                        <div className="ml-4 mt-2 p-4 bg-accent-container-soft text-center">some content</div>
                    </Expand>
                </div>
            </Expand>
        </div>
    ),
};
Nesting.parameters = {
    controls: {
        include: [],
    },
};

const customTheme = createTheme({
    palette: {
        accent: '#9966FF',
        neutral: '#666600',
    },
});
export const Theming: StoryFn<ExpandProps> = props => (
    <ThemeProvider theme={customTheme}>
        <Expand {...props} />
    </ThemeProvider>
);
Theming.args = {
    TitleIcon: TvIcon,
    titleIconPosition: 'left',
    expanded: true,
    children: (
        <p>
            <code>neutral: #666600</code>
        </p>
    ),
};
Theming.parameters = {
    controls: {
        include: [],
    },
};
