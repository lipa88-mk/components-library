import type { FC, PropsWithChildren } from 'react';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { classes } from '../../utils';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';

export interface Props {
    className?: string;
}

const Slider: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
    const scrollableNav = useRef<HTMLDivElement>(null);
    const [scrollableNext, setScrollableNext] = useState(false);
    const [scrollablePrev, setScrollablePrev] = useState(false);

    const container = scrollableNav.current;

    useEffect(() => {
        const container = scrollableNav.current;
        if (!container) return;
        if (container.scrollWidth > container.offsetWidth) setScrollableNext(true);

        const observer = new ResizeObserver(entries => {
            const firstEntry = entries[0];
            if (!firstEntry || !container) return;
            const { contentRect } = firstEntry;
            if (container.scrollWidth > Math.round(contentRect.width)) setScrollableNext(true);
            if (container.scrollLeft + contentRect.width >= container.scrollWidth) setScrollableNext(false);
            if (container.scrollLeft - scrollAmount(contentRect.width) > 0) setScrollablePrev(true);
        });
        observer.observe(container);
        return () => observer.disconnect();
    }, [scrollableNav.current]);

    useEffect(() => {
        const container = scrollableNav.current;
        if (!container) return;
        if (container.scrollWidth > Math.round(container.offsetWidth)) {
            setScrollableNext(true);
        } else setScrollableNext(false);
        if (container.scrollWidth <= container.offsetWidth) setScrollablePrev(false);
    }, [scrollableNav.current]);

    const slideNextHandler = () => {
        if (!container) return;
        container.scroll({
            left: container.scrollLeft + scrollAmount(container.offsetWidth),
            behavior: 'smooth',
        });

        setScrollableNext(
            container.scrollWidth - container.offsetWidth >= container.scrollLeft + scrollAmount(container.offsetWidth)
        );
        setScrollablePrev(true);
    };

    const slidePrevHandler = () => {
        if (!container) return;
        container.scroll({
            left: container.scrollLeft - scrollAmount(container.offsetWidth),
            behavior: 'smooth',
        });

        setScrollablePrev(container.scrollLeft - scrollAmount(container.offsetWidth) > 0);
        setScrollableNext(true);
    };

    return (
        <>
            <div className={classes('w-full relative')} data-testid={'header-navigation-bar'}>
                <Transition
                    as={Fragment}
                    show={scrollablePrev}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-x-1"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-1"
                >
                    <div className="absolute left-0 top-0 h-full">
                        <button
                            className={classes(
                                'h-full flex items-center justify-start bg-bg-surface1 relative z-20',
                                'text-accent-default hover:text-accent-hover focus:text-accent-default'
                            )}
                            type="button"
                            onClick={slidePrevHandler}
                        >
                            <ChevronLeftIcon className=" w-6 h-6 " />
                            <span className="sr-only">prev</span>
                        </button>
                        <span className="absolute z-10 left-full top-0 h-full w-4 pointer-events-none bg-gradient-to-r from-border-muted to-transparent"></span>
                    </div>
                </Transition>

                <Transition
                    as={Fragment}
                    show={scrollableNext}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-x-1"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-1"
                >
                    <div className="absolute right-0 top-0 h-full">
                        <button
                            className={classes(
                                'h-full flex items-center justify-end  bg-bg-surface1 relative z-20',
                                'text-accent-default hover:text-accent-hover focus:text-accent-default'
                            )}
                            type="button"
                            onClick={slideNextHandler}
                        >
                            <ChevronLeftIcon className=" w-6 h-6 rotate-180 " />
                            <span className="sr-only">next</span>
                        </button>
                        <span className="absolute z-10 right-full top-0 h-full w-4 pointer-events-none bg-gradient-to-l from-border-muted to-transparent"></span>
                    </div>
                </Transition>

                <nav
                    ref={scrollableNav}
                    className={classes('order-2 grow flex overflow-hidden max-w-full', props.className)}
                >
                    {children}
                </nav>
            </div>
        </>
    );
};

export default Slider;

function scrollAmount(width) {
    return width / 2;
}
