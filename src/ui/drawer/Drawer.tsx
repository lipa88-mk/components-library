import { Transition, TransitionChild } from '@headlessui/react';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import React, { Fragment, useRef, useState } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { classes, noop, useResizable } from '../../utils';
import Button from '../button/Button';
import { FloatingFocusManager, useFloating } from '@floating-ui/react';

const MIN_DRAWER_SIZE = 50;
type DrawerSize = 'sm' | 'md' | 'lg';

export interface Props {
    open: boolean;
    header?: ReactNode;
    size?: DrawerSize;
    actions?: ReactNode;
    onClose?: () => void;
    overlay?: boolean;
    draggable?: boolean;
    positionTopClassName?: string;
    initialFocusRef?: React.MutableRefObject<HTMLElement | null>;
    childrenWrapClassName?: string;
}

const Drawer: FC<PropsWithChildren<Props>> = ({
    open,
    header,
    size: initialSize = 'md',
    onClose = noop,
    actions,
    children,
    overlay,
    draggable,
    positionTopClassName = 'top-0',
    childrenWrapClassName,
    initialFocusRef,
}) => {
    const { context } = useFloating();
    const [size, setSize] = useState<DrawerSize>(initialSize);
    const ref = useRef<HTMLDivElement>(null);
    const { width, resizing, reset, handleMouseDown } = useResizable(ref);

    const headerSection =
        typeof header === 'string' ? <h3 className="text-lg font-medium text-fg-default">{header}</h3> : header;

    const handleToggleFullScreen = () => {
        reset();

        if (size === initialSize) {
            const calcSize = size === 'lg' ? 'md' : 'lg';
            setSize(calcSize);
        } else {
            setSize(initialSize);
        }
    };

    if (!resizing && width < MIN_DRAWER_SIZE && width !== 0) setTimeout(() => onClose());

    return (
        <Transition show={open} as={Fragment}>
            <div className="fixed top-0 right-0 bottom-0 z-10">
                <FloatingFocusManager context={context} initialFocus={initialFocusRef}>
                    <div className="absolute inset-0 overflow-hidden">
                        {overlay && <div className="fixed top-0 left-0 w-full h-full bg-bg-surface5 opacity-30" />}

                        <div className={classes('fixed bottom-0 right-0 pl-0 max-w-full flex', positionTopClassName)}>
                            <TransitionChild
                                as={Fragment}
                                data-testid={'add-document-side-bar'}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div
                                    className={classes('w-screen', {
                                        'max-w-[100vw]': size === 'lg' && !width,
                                        'max-w-[50vw]': size === 'md' && !width,
                                        'max-w-sm': size === 'sm' && !width,
                                    })}
                                    style={{ width: width || undefined }}
                                >
                                    <div className={'h-full flex'} ref={ref}>
                                        {draggable && <Resizer resizing={resizing} onMouseDown={handleMouseDown} />}
                                        <div className="h-full w-full divide-y divide-border-default flex flex-col flex-1 bg-bg-page shadow-xl">
                                            <div
                                                className="min-h-0 flex-1 flex flex-col py-3 overflow-y-auto"
                                                data-testid={'node-menu-sidebar'}
                                            >
                                                <SidebarHeader
                                                    section={headerSection}
                                                    onToggleFullScreen={handleToggleFullScreen}
                                                    onClose={onClose}
                                                    size={size}
                                                    width={width}
                                                />
                                                <div
                                                    className={classes(
                                                        'mt-0 text-fg-default relative flex-1 px-4 sm:px-6 h-screen overflow-hidden',
                                                        childrenWrapClassName
                                                    )}
                                                >
                                                    {children}
                                                </div>
                                            </div>

                                            {actions && (
                                                <div className="shrink-0 px-4 py-4 flex justify-end">{actions}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </TransitionChild>
                        </div>
                    </div>
                </FloatingFocusManager>
            </div>
        </Transition>
    );
};

export default Drawer;

interface HeaderProps {
    section?: ReactNode;
    onToggleFullScreen: () => void;
    onClose?: () => void;
    size?: DrawerSize;
    width?: number;
}

const SidebarHeader: FC<HeaderProps> = ({ section, onToggleFullScreen, onClose, size, width }) => (
    <div className="px-4 sm:px-6" data-testid={'sidebar-header'}>
        <div className="flex items-center justify-between">
            <div className="grow">{section ?? null}</div>
            <div className="ml-3 h-7 flex items-center gap-1">
                <Button.Ghost
                    size="sm"
                    coloring="neutral"
                    data-testid={'expand-button'}
                    id={size === 'lg' && !width ? 'drawer-arrow-right-icon' : 'drawer-arrow-left-icon'}
                    className={'ml-auto'}
                    type="button"
                    Icon={size === 'lg' && !width ? ArrowRightCircleIcon : ArrowLeftCircleIcon}
                    onClick={onToggleFullScreen}
                />

                <Button.Ghost
                    type="button"
                    size="sm"
                    coloring="neutral"
                    data-testid={'close-button'}
                    onClick={onClose}
                    Icon={XMarkIcon}
                >
                    <span className="sr-only">Close panel</span>
                </Button.Ghost>
            </div>
        </div>
    </div>
);

const Resizer = ({ resizing, onMouseDown }) => (
    <div
        onMouseDown={onMouseDown}
        className={classes(
            'h-full flex-none w-2 border-r border-border-muted hover:border-r-2',
            resizing ? 'cursor-grabbing' : 'cursor-grab'
        )}
    />
);
