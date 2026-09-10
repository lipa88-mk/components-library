import React, { useMemo } from 'react';
import { PortalProvider, ThemeProvider, createTheme } from '../src';
import { StoryContext, StoryFn } from '@storybook/react';
import type { Preview } from '@storybook/react';
import './styles.css';

export const parameters = {
    layout: 'padded',
    options: {
        storySort: {
            order: ['Introduction', '*'],
        },
    },
    controls: {
        expanded: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: { disable: true },
};

export const globalTypes = {
    mode: {
        name: 'Mode',
        title: 'mode',
        description: 'Mode for your components',
        defaultValue: 'system',
        toolbar: {
            icon: 'sun',
            dynamicTitle: true,
            items: [
                { value: 'light', left: '☀️', title: 'Light mode' },
                { value: 'dark', left: '🌙', title: 'Dark mode' },
                { value: 'system', left: '🌓', title: 'System mode' },
            ],
        },
    },
};

const preview: Preview = {
    // Generate a Docs page automatically for every story in the repo.
    // Opt a story out with `tags: ['!autodocs']` in its meta.
    tags: ['autodocs'],
    decorators: [
        (Story: StoryFn) => (
            <>
                <PortalProvider zIndex={30} />
                <Story />
            </>
        ),
        (Story: StoryFn, context: StoryContext) => {
            const { mode } = context.globals;

            const theme = useMemo(
                () =>
                    createTheme({
                        mode,
                    }),
                [mode]
            );

            return (
                <ThemeProvider theme={theme}>
                    <Story />
                </ThemeProvider>
            );
        },
    ],
};

export default preview;
