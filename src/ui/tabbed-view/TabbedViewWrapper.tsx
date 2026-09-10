import React, { forwardRef } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { Slider } from '../slider';
import type { TabsMode } from './models';
import { classes } from '../../utils';

type TabsWrapProps = {
    showBrowserScroll: boolean;
    mode: TabsMode;
};

type TabbedViewWrapperNavProps = React.ComponentProps<'nav'> & {
    mode: TabsMode;
};

const TabbedViewWrapperNav = forwardRef<HTMLElement, TabbedViewWrapperNavProps>(
    ({ children, mode, className, style, ...props }, ref) => {
        return (
            <nav
                ref={ref}
                role="tablist"
                aria-orientation={mode}
                className={classes(
                    mode === 'horizontal' && 'flex shrink-0 overflow-x-auto border-b border-border-soft -mb-px',
                    mode === 'vertical' &&
                        'flex flex-col shrink-0 overflow-y-auto overflow-x-hidden max-w-[300px] border-r border-border-sof',
                    className
                )}
                style={{ scrollbarWidth: 'thin', ...style }}
                {...props}
            >
                {children}
            </nav>
        );
    }
);

export const TabbedViewWrapper: FC<PropsWithChildren<TabsWrapProps>> = ({ showBrowserScroll, mode, children }) => {
    if (mode === 'horizontal') {
        return showBrowserScroll ? (
            <TabbedViewWrapperNav mode={mode}>{children}</TabbedViewWrapperNav>
        ) : (
            <Slider className={'border-b border-border-soft -mb-px'}>{children}</Slider>
        );
    }

    return <TabbedViewWrapperNav mode={mode}>{children}</TabbedViewWrapperNav>;
};
