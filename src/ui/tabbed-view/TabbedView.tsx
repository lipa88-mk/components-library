import type { FC, Key, PropsWithChildren, ReactElement } from 'react';
import React, { useEffect, useMemo, useState } from 'react';
import { classes, noop } from '../../utils';
import { Tooltip } from '../tooltip';
import type { TabbedViewProps, TabProps, Tab } from './models';
import { TabbedViewWrapper } from './TabbedViewWrapper';
import { TabbedViewItem } from './TabbedViewItem';

const getTabId = (tab: TabProps) => ('id' in tab ? tab.id : tab.title);

export const TabbedView: FC<PropsWithChildren<TabbedViewProps>> & Submodules = ({
    children = [],
    size = 'sm',
    iconPosition = 'left',
    iconOnly = false,
    activeTab,
    onSelect = noop,
    overflowVisible = false,
    showPadding = true,
    showBrowserScroll = false,
    mode = 'horizontal',
    tooltipPosition = mode === 'horizontal' ? 'top' : 'right',
    fullWidth = false,
    className,
    showChildren = true,
}) => {
    const tabs: Tab[] = useMemo(
        () =>
            React.Children.map<TabProps, ReactElement<TabProps>>(children, (child, index) => ({
                ...child.props,
                key: child.key || child.props.title || index,
            })),
        [children]
    );

    const notAllTabsAreUniqueValue = useMemo(() => notAllTabsAreUnique(tabs), [tabs]);

    if (notAllTabsAreUniqueValue) {
        // eslint-disable-next-line no-console
        console.error(
            `You've provided children with same titles but haven't provided different keys for them. Use key prop for TabbedView.Tab components.`
        );
    }

    const [selected, setSelected] = useState<string | number | Key>(() => {
        const selectedItem = tabs.find(it => it.active) ?? tabs[0];
        return selectedItem.key ?? getTabId(selectedItem);
    });

    useEffect(() => {
        if (activeTab) setSelected(activeTab);
    }, [activeTab]);

    return (
        <div className={classes('flex h-full max-w-full', mode === 'horizontal' ? 'flex-col' : 'flex-row', className)}>
            <TabbedViewWrapper showBrowserScroll={showBrowserScroll} mode={mode}>
                {tabs.map((tab, index) => {
                    const uniqueKey = tab.key ?? getTabId(tab);
                    const tooltipText = tab.tooltipText;
                    const tabItemProps: React.ComponentProps<typeof TabbedViewItem> = {
                        tab,
                        id: uniqueKey,
                        isSelected: uniqueKey === selected,
                        iconOnly,
                        fullWidth,
                        mode,
                        iconPosition,
                        size,
                        onSelect: () => {
                            setSelected(uniqueKey);
                            onSelect(uniqueKey, index);
                        },
                    };

                    if (tooltipText) {
                        return (
                            <Tooltip
                                title={tooltipText}
                                showArrow
                                key={uniqueKey}
                                placement={tooltipPosition}
                                className={fullWidth && mode === 'horizontal' ? 'w-full' : ''}
                            >
                                <TabbedViewItem {...tabItemProps} />
                            </Tooltip>
                        );
                    }

                    return (
                        <div key={uniqueKey} className={fullWidth && mode === 'horizontal' ? 'inline-flex w-full' : ''}>
                            <TabbedViewItem {...tabItemProps} />
                        </div>
                    );
                })}
            </TabbedViewWrapper>

            {showChildren && (
                <div
                    className={classes(
                        'grow flex h-full flex-col text-fg-default',
                        overflowVisible ? 'overflow-y-visible' : 'overflow-y-auto',
                        {
                            'py-2 px-1': showPadding,
                        }
                    )}
                    data-testid={'current-tab-module'}
                    role="tabpanel"
                >
                    {React.Children.map<ReactElement<TabProps> | null, ReactElement<TabProps>>(children, child =>
                        (child.key ?? child.props.title) === selected ? child : null
                    )}
                </div>
            )}
        </div>
    );
};

type Submodules = {
    Tab: typeof Tab;
};

const Tab: FC<PropsWithChildren<TabProps>> = ({ children }) => {
    return <div className={'grow h-full flex flex-col'}>{children}</div>;
};

TabbedView.Tab = React.memo(Tab);

function notAllTabsAreUnique(tabs: Array<TabProps & Partial<{ key: React.Key }>>) {
    const titleToTabsMap = tabs.reduce(
        (acc, currentTab) => {
            const id = getTabId(currentTab);
            if (id in acc) {
                acc[id].push(currentTab);
            } else {
                acc[id] = [currentTab];
            }
            return acc;
        },
        {} as Record<string, Array<TabProps & Partial<{ key: React.Key }>>>
    );

    const tabsWithSameTitles = Object.entries(titleToTabsMap).filter(([, tabs]) => tabs.length > 1);

    return tabsWithSameTitles.some(([, tabs]) => tabs.length !== new Set(tabs.map(tab => tab.key)).size);
}
