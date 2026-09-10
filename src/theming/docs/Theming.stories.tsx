import React from 'react';
import { Meta } from '@storybook/react';
import { Button } from '../../ui/button';
import { FileImport } from '../../ui/file-import';
import ButtonGroupSwitch from '../../ui/button-group-switch/ButtonGroupSwitch';
import { Expand } from '../../ui/expand';
import { CogIcon } from '@heroicons/react/24/solid';
import { createTheme } from '../createTheme';
import { ThemeProvider } from '../ThemeProvider';

const meta: Meta = {
    title: 'Theming',
};

export const Components = () => {
    const customTheme = createTheme({
        palette: {
            accent: '#9966FF',
            neutral: '#666600',
        },
    });
    return (
        <article className="h-full w-full px-10 py-6 bg-bg-page text-fg-default">
            <section>
                <h2 className="!text-fg-default">Buttons:</h2>
                <div className="grid grid-cols-7 justify-items-start gap-4 py-4 mb-2">
                    <Button.Primary>Primary</Button.Primary>
                    <Button.Primary active>active</Button.Primary>
                    <Button.Primary coloring="neutral">neutral</Button.Primary>
                    <Button.Primary coloring="danger">danger</Button.Primary>
                    <Button.Primary coloring="warning">warning</Button.Primary>
                    <Button.Primary coloring="success">success</Button.Primary>
                    <Button.Primary disabled>disabled</Button.Primary>
                </div>

                <div className="grid grid-cols-7 justify-items-start gap-4 py-4 mb-2">
                    <Button.Secondary>Secondary</Button.Secondary>
                    <Button.Secondary active>active</Button.Secondary>
                    <Button.Secondary coloring="neutral">neutral</Button.Secondary>
                    <Button.Secondary coloring="danger">danger</Button.Secondary>
                    <Button.Secondary coloring="warning">warning</Button.Secondary>
                    <Button.Secondary coloring="success">success</Button.Secondary>
                    <Button.Secondary disabled>disabled</Button.Secondary>
                </div>

                <div className="grid grid-cols-7 justify-items-start gap-4 py-4 mb-2">
                    <Button.Tertiary>Tertiary</Button.Tertiary>
                    <Button.Tertiary active>active</Button.Tertiary>
                    <Button.Tertiary coloring="neutral">neutral</Button.Tertiary>
                    <Button.Tertiary coloring="danger">danger</Button.Tertiary>
                    <Button.Tertiary coloring="warning">warning</Button.Tertiary>
                    <Button.Tertiary coloring="success">success</Button.Tertiary>
                    <Button.Tertiary disabled>disabled</Button.Tertiary>
                </div>

                <div className="grid grid-cols-7 justify-items-start gap-4 py-4 mb-2">
                    <Button.Ghost>Ghost</Button.Ghost>
                    <Button.Ghost active>active</Button.Ghost>
                    <Button.Ghost coloring="neutral">neutral</Button.Ghost>
                    <Button.Ghost coloring="danger">danger</Button.Ghost>
                    <Button.Ghost coloring="warning">warning</Button.Ghost>
                    <Button.Ghost coloring="success">success</Button.Ghost>
                    <Button.Ghost disabled>disabled</Button.Ghost>
                </div>

                <div className="flex gap-4 py-4 mb-2">
                    <Button.Import>Import</Button.Import>
                    <ThemeProvider theme={customTheme}>
                        <Button.Import>custom</Button.Import>
                    </ThemeProvider>
                    <Button.Import disabled>disabled</Button.Import>
                </div>
            </section>

            <section>
                <h2 className="!text-fg-default">File Import</h2>
                <div className="flex gap-4 py-4 mb-2">
                    <FileImport>FileImport</FileImport>
                    <ThemeProvider theme={customTheme}>
                        <FileImport>custom</FileImport>
                    </ThemeProvider>
                    <FileImport active>active</FileImport>
                    <FileImport disabled>disabled</FileImport>
                </div>
            </section>

            <section>
                <h2 className="!text-fg-default">ButtonGroupSwitch</h2>
                <div className="flex gap-4 py-4 mb-2">
                    <ButtonGroupSwitch>
                        <Button.Primary>Primary</Button.Primary>
                        <Button.Primary active>active</Button.Primary>
                        <Button.Primary disabled>disabled</Button.Primary>
                        <Button.Primary>Primary</Button.Primary>
                    </ButtonGroupSwitch>

                    <ThemeProvider theme={customTheme}>
                        <ButtonGroupSwitch>
                            <Button.Primary>Primary custom</Button.Primary>
                            <Button.Primary active>active</Button.Primary>
                            <Button.Primary disabled>disabled</Button.Primary>
                            <Button.Primary>Primary custom</Button.Primary>
                        </ButtonGroupSwitch>
                    </ThemeProvider>
                </div>
                <div className="flex gap-4 py-4 mb-2">
                    <ButtonGroupSwitch>
                        <Button.Secondary>Secondary</Button.Secondary>
                        <Button.Secondary active>active</Button.Secondary>
                        <Button.Secondary disabled>disabled</Button.Secondary>
                        <Button.Secondary>Secondary</Button.Secondary>
                    </ButtonGroupSwitch>

                    <ThemeProvider theme={customTheme}>
                        <ButtonGroupSwitch>
                            <Button.Secondary>Secondary custom</Button.Secondary>
                            <Button.Secondary active>active</Button.Secondary>
                            <Button.Secondary disabled>disabled</Button.Secondary>
                            <Button.Secondary>Secondary custom</Button.Secondary>
                        </ButtonGroupSwitch>
                    </ThemeProvider>
                </div>

                <div className="flex gap-4 py-4 mb-2">
                    <ButtonGroupSwitch>
                        <Button.Tertiary>Tertiary</Button.Tertiary>
                        <Button.Tertiary active>active</Button.Tertiary>
                        <Button.Tertiary disabled>disabled</Button.Tertiary>
                        <Button.Tertiary>Tertiary</Button.Tertiary>
                    </ButtonGroupSwitch>

                    <ThemeProvider theme={customTheme}>
                        <ButtonGroupSwitch>
                            <Button.Tertiary>Tertiary</Button.Tertiary>
                            <Button.Tertiary active>active</Button.Tertiary>
                            <Button.Tertiary disabled>disabled</Button.Tertiary>
                            <Button.Tertiary>Tertiary</Button.Tertiary>
                        </ButtonGroupSwitch>
                    </ThemeProvider>
                </div>
            </section>

            <section>
                <h2 className="!text-fg-default mb-6">Expand</h2>

                <Expand expanded title={'Click this title'} TitleIcon={CogIcon}>
                    <div className="pl-4 text-sm flex flex-col gap-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nostrum magnam accusantium
                            sit aspernatur? Iure minima, et natus deleniti architecto iste, voluptates nostrum molestiae
                            nam sunt dolor aspernatur ipsam repellendus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nostrum magnam accusantium
                            sit aspernatur? Iure minima, et natus deleniti architecto iste, voluptates nostrum molestiae
                            nam sunt dolor aspernatur ipsam repellendus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nostrum magnam accusantium
                            sit aspernatur? Iure minima, et natus deleniti architecto iste, voluptates nostrum molestiae
                            nam sunt dolor aspernatur ipsam repellendus.
                        </p>
                    </div>
                </Expand>

                <div className="mt-6">
                    <ThemeProvider theme={customTheme}>
                        <Expand expanded title={'Click this title'} TitleIcon={CogIcon}>
                            <div className="pl-4 text-sm flex flex-col gap-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nostrum magnam
                                    accusantium sit aspernatur? Iure minima, et natus deleniti architecto iste,
                                    voluptates nostrum molestiae nam sunt dolor aspernatur ipsam repellendus.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nostrum magnam
                                    accusantium sit aspernatur? Iure minima, et natus deleniti architecto iste,
                                    voluptates nostrum molestiae nam sunt dolor aspernatur ipsam repellendus.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nostrum magnam
                                    accusantium sit aspernatur? Iure minima, et natus deleniti architecto iste,
                                    voluptates nostrum molestiae nam sunt dolor aspernatur ipsam repellendus.
                                </p>
                            </div>
                        </Expand>
                    </ThemeProvider>
                </div>
            </section>
        </article>
    );
};

export default meta;
