import type { FC, ReactNode } from 'react';
import React, { Fragment } from 'react';
import { Dialog, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { classes } from '../../utils';
import Button from '../button/Button';

export interface ModalProps {
    title?: ReactNode;
    open: boolean;
    initialFocus?: React.MutableRefObject<HTMLElement | null> | undefined;
    onClose?: () => void;
    size?: 'small' | 'medium' | 'default' | 'large' | 'xl-large' | 'full';
    closeOnClickOutside?: boolean;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({
    title,
    open,
    initialFocus,
    onClose = () => null,
    closeOnClickOutside,
    children,
    size = 'default',
}) => (
    <Transition show={open} as={Fragment}>
        <Dialog
            as={'div'}
            onClose={onClose}
            className={'fixed inset-0 z-20 overflow-y-auto bg-neutral-container-active outline-0'}
            static
            data-testid={'modal'}
            initialFocus={initialFocus}
        >
            <div className={'min-h-screen px-4 text-center'}>
                <TransitionChild
                    as={Fragment}
                    enter={'ease-linear duration-300'}
                    enterFrom={'opacity-0'}
                    enterTo={'opacity-100'}
                    leave={'ease-linear duration-150'}
                    leaveFrom={'opacity-100'}
                    leaveTo={'opacity-50'}
                >
                    <div
                        className={'fixed inset-0'}
                        onClick={() => {
                            if (closeOnClickOutside) {
                                onClose();
                            }
                        }}
                    />
                </TransitionChild>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <TransitionChild
                    as={Fragment}
                    enter={'ease-linear duration-200'}
                    enterFrom={'opacity-0 transform translate-y-6'}
                    enterTo={'opacity-100 transform translate-y-0'}
                    leave={'ease-linear duration-150'}
                    leaveFrom={'opacity-100 transform translate-y-0'}
                    leaveTo={'opacity-0 transform translate-y-4'}
                >
                    <div
                        className={classes(
                            'relative inline-block w-full p-6 my-8 text-left align-middle transition-all transform bg-bg-page shadow-xl rounded-2xl',
                            {
                                'max-w-md': size === 'small',
                                'max-w-2xl': size === 'default' || size === 'medium',
                                'max-w-4xl': size === 'large',
                                'max-w-7xl': size === 'xl-large',
                            }
                        )}
                    >
                        <header className={'h-8'}>
                            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10">
                                <Button.Ghost
                                    onClick={onClose}
                                    type="button"
                                    size="sm"
                                    coloring="neutral"
                                    data-testid={'close-button'}
                                    Icon={XMarkIcon}
                                >
                                    <span className="sr-only">Close</span>
                                </Button.Ghost>
                            </div>
                            <DialogTitle as={'h3'} className={'text-lg font-medium leading-6 text-fg-default'}>
                                {title}
                            </DialogTitle>
                        </header>

                        <div className="text-fg-default">{children}</div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </Transition>
);

export default Modal;
