import type { ArgTypes } from '@storybook/react';
import { badgeColoring } from '../Badges';
import type { BadgesProps } from '../Badges';

export const argTypes: ArgTypes<BadgesProps> = {
    list: {
        control: { type: 'boolean' },
        description: 'List of strings to display',
    },
    size: {
        control: { type: 'select' },
        options: ['base', 'large'],
        table: {
            defaultValue: { summary: 'base' },
        },
        description: 'Size of the badges',
    },
    coloring: {
        control: { type: 'select' },
        options: Object.keys(badgeColoring),
        table: {
            defaultValue: { summary: 'gray' },
        },
        description: 'Coloring of the badges',
    },
};

export const args: Partial<BadgesProps> = {
    list: ['New', 'Sale', 'Exclusive'],
    size: 'base',
    coloring: 'gray',
    title: 'Badge Component',
};
