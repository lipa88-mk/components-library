import React, { useEffect, useState } from 'react';
import type { Meta } from '@storybook/react';
import { useThemeMode } from '../../hooks';
import startCase from 'lodash/startCase';
import * as darkTokens from './_tokens-dark';
import * as lightTokens from './_tokens-light';

type Token = {
    name: string;
    value: string;
};

export type TokenGroups = Record<string, Token[]>;

function groupTokens(tokens: Record<string, string>): TokenGroups {
    const groups: TokenGroups = {};

    for (const [key, value] of Object.entries(tokens)) {
        const match = key.match(/^([^A-Z]+)/);
        const category = match ? match[0] : '';

        if (category.startsWith('modifier')) {
            continue;
        }

        const rest = key.slice(category.length);
        const name = rest ? startCase(rest) : '';

        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push({ name, value });
    }

    return groups;
}

const meta: Meta = {
    title: 'Theming',
};

type ColorListProps = {
    title: string;
    tokens: Token[];
};

const ColorList: React.FC<ColorListProps> = ({ title, tokens }) => {
    return (
        <div>
            <h3 className="mb-3 font-semibold capitalize">{title}</h3>

            <ul className="grid grid-cols-16 gap-x-2 gap-y-2 m-0 pl-0">
                {tokens.map(token => (
                    <li key={token.name} className="flex gap-2 flex-col items-center list-none !mt-0">
                        <div
                            className="h-10 w-full rounded"
                            style={{
                                backgroundColor: token.value,
                            }}
                        />
                        <span className="block font-medium text-xs text-center text-fg-default">{token.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Palette = () => {
    const [cssVars, setCssVars] = useState<TokenGroups>({});
    const [themeMode] = useThemeMode();

    useEffect(() => {
        if (themeMode === 'dark') {
            setCssVars(groupTokens(darkTokens));
            return;
        }

        setCssVars(groupTokens(lightTokens));
    }, [themeMode]);

    return (
        <section className="bg-bg-page text-fg-default space-y-4">
            {Object.entries(cssVars).map(([key, entry]) => (
                <ColorList key={key} title={key} tokens={entry} />
            ))}
        </section>
    );
};

export const Tokens = () => {
    return <Palette />;
};

export default meta;
