import type { FC } from 'react';
import React from 'react';
import { classes, noop } from '../../utils';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { Avatar } from '../avatar';
import { Popover } from '../popover';

export interface HeaderProps {
    SectionsMenu?: FC;
    profileMenuFooter?: React.ReactNode;
    Logo: FC;
    onLogout?: () => void;
    userName?: string;
}

const Header: FC<HeaderProps> = ({ SectionsMenu, Logo, onLogout = noop, userName, profileMenuFooter }) => {
    return (
        <header className={classes('flex flex-col w-full bg-bg-page max-w-[100vw]')} data-testid={'header'}>
            <section className={'flex gap-2 border-b border-border-soft py-1 px-4 w-full h-12'}>
                {SectionsMenu && (
                    <div className={'flex items-center mr-1'}>
                        <SectionsMenu />
                    </div>
                )}
                <div className={'flex flex-1 gap-5 items-center min-w-fit'}>
                    <Logo />
                    <div id="header__area" className={'left flex'} data-testid={'breadcrumbs-element'}></div>
                </div>

                <div className={'flex items-center justify-center shrink-1 ml-10 min-w-0'}>
                    <div id="header__area" className={'center flex w-full'} />
                </div>

                <div className={'flex flex-1 items-center justify-end ml-10 min-w-fit'}>
                    <div id="header__area" className={'right flex'} />
                </div>

                <div className="flex items-center">
                    <Popover placement="bottom-end">
                        <button data-testid="open-user-menu-button" className="py-0.5">
                            <Avatar userName={userName} size="sm" />
                        </button>
                        <Popover.Content className="divide-y divide-border-soft">
                            <Popover.List>
                                {userName && (
                                    <li
                                        data-testid={'user-name'}
                                        className="cursor-default py-2 px-3 text-base font-semibold text-fg-default"
                                    >
                                        {userName}
                                    </li>
                                )}
                                <Popover.Item
                                    data-testid="logout-button"
                                    className="flex items-center gap-2"
                                    onSelect={onLogout}
                                >
                                    <ArrowRightStartOnRectangleIcon className="w-4 h-4" />
                                    Log out
                                </Popover.Item>
                                {profileMenuFooter && (
                                    <Popover.Item data-testid="profile-menu-footer" disabled>
                                        {profileMenuFooter}
                                    </Popover.Item>
                                )}
                            </Popover.List>
                        </Popover.Content>
                    </Popover>
                </div>
            </section>

            <section id="header__area" className={'bottom w-full flex flex-wrap'} />
        </header>
    );
};

export default Header;
