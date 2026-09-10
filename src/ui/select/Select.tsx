import React, { useEffect, useRef, useState } from 'react';
import { isEqual } from 'lodash';
import { classes, cloneChildren, noop, useControlledState } from '../../utils';
import {
    autoUpdate,
    flip,
    FloatingFocusManager,
    FloatingList,
    hide,
    offset,
    shift,
    size,
    useClick,
    useDismiss,
    useFloating,
    useFocus,
    useInteractions,
    useListItem,
    useListNavigation,
    useTransitionStyles,
    type UseTransitionStylesProps,
} from '@floating-ui/react';
import defaultComponents from './components';
import { Portal } from '../portal';
import type { SelectProps, SelectComponents, SelectItemProps, DefaultMetaType, InternalItemProps } from './models';
import { HelperText } from '../helperText';
import { ErrorNotification, WarningNotification } from '../input/Input';

const transitionOpts: UseTransitionStylesProps = {
    duration: 150,
    initial: ({ side }) => ({
        opacity: 0,
        transform: side === 'top' || side === 'bottom' ? 'scaleY(0.95)' : 'scaleX(0.95)',
    }),
};

const Root = <T = unknown, M extends DefaultMetaType = DefaultMetaType>({
    id,
    value: propValue,
    defaultValue,
    disabled = false,
    searchable = true,
    children,
    placeholder = 'Select...',
    ariaLabel,
    readLabel,
    isValid = true,
    sizing = 'md',
    helperText,
    errorMessage,
    open: propOpen,
    defaultOpen,
    meta,
    isLoading = false,
    components: propComponents,
    onChange = noop,
    onBlur,
    onChangeOpen,
    filterOption,
    placement = 'bottom-start',
    offset: propOffset,
}: SelectProps<T, M>) => {
    const [open, setOpen] = useControlledState<boolean>({
        value: propOpen,
        defaultValue: defaultOpen,
        onChange: onChangeOpen,
    });

    const [value = null, setValue] = useControlledState<T | null>({
        value: propValue,
        defaultValue,
        onChange,
    });

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const [isWarning, setIsWarning] = useState(false);
    const warningMessage = isWarning
        ? `Selected value is not present in the options list (deprecated). Please select a valid value.`
        : undefined;

    const menuBodyRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const listRef = useRef<(HTMLLIElement | null)[]>([]);

    const isItemValid = isValid && !errorMessage;

    const { refs, floatingStyles, context, middlewareData, elements, update } = useFloating({
        open,
        whileElementsMounted: autoUpdate,
        placement,
        strategy: 'absolute',
        middleware: [
            offset(
                typeof propOffset !== 'undefined'
                    ? propOffset
                    : ({ rects }) => ({
                          mainAxis: -rects.reference.height,
                      })
            ),
            hide(),
            flip({
                fallbackAxisSideDirection: 'start',
                crossAxis: false,
            }),
            shift(),
            size({
                apply({ rects, elements, availableHeight }) {
                    Object.assign(elements.floating.style, {
                        width: `${rects.reference.width}px`,
                    });

                    if (menuBodyRef.current) {
                        menuBodyRef.current.style.setProperty('max-height', `${availableHeight}px`);
                    }
                },
            }),
        ],
        onOpenChange: setOpen,
    });

    useEffect(() => {
        if (open && elements.reference && elements.floating) {
            return autoUpdate(elements.reference, elements.floating, update);
        }
    }, [value]);

    const listNav = useListNavigation(context, {
        activeIndex,
        listRef,
        onNavigate: setActiveIndex,
    });
    const { isMounted, styles: transitionStyles } = useTransitionStyles(context, transitionOpts);
    const { getFloatingProps, getReferenceProps } = useInteractions([
        useFocus(context),
        useDismiss(context),
        useClick(context),
        listNav,
    ]);

    const isVisible: InternalItemProps<T>['isVisible'] = (item, label) => {
        if (filterOption) {
            return filterOption(item, inputValue);
        }
        return label.toLowerCase().includes(inputValue.toLowerCase());
    };

    const handleSelect: InternalItemProps<T>['onSelect'] = value => {
        setInputValue('');
        setValue(value);
        setOpen(false);
    };

    const handleDelete = () => {
        setInputValue('');
        setValue(null);

        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };

    const isSelected: InternalItemProps<T>['isSelected'] = itemValue => isEqual(itemValue, value);
    const isValueDeprecated = !React.Children.toArray(children).some(
        child => React.isValidElement(child) && isSelected(child.props.value)
    );

    useEffect(() => {
        if (isValueDeprecated && value) {
            setIsWarning(true);
        } else {
            setIsWarning(false);
        }
    }, [value, isValueDeprecated]);

    const activeLabel: string | null = (() => {
        if (!value) {
            return null;
        }

        if (readLabel) {
            return readLabel(value);
        }

        const childrenArr = Array.isArray(children) ? children : [children];
        const index = childrenArr.findIndex(child => isSelected(child.props.value));

        if (index === -1) {
            return String(value);
        }

        return childrenArr[index].props.children;
    })();

    if (!isValid && !errorMessage) {
        // eslint-disable-next-line no-console
        console.error(
            `You provided isValid as false. Please provide errorMessage for user to see the error description.`
        );
    }

    const iconStyles = classes(
        {
            'px-[10px]': sizing === 'md',
            'px-[6px]': sizing === 'sm',
        },
        {
            'py-[10px]': sizing === 'md',
            'py-[6px]': sizing === 'sm',
        }
    );

    const components = {
        ...defaultComponents,
        ...propComponents,
    } as SelectComponents<T, M>;

    return (
        <div role={'combobox_wrapper'} aria-label={ariaLabel + '_combobox_wrapper'}>
            <div className="group relative">
                <components.Reference
                    {...getReferenceProps()}
                    ref={refs.setReference}
                    id={id}
                    value={value}
                    meta={meta}
                    role="combobox"
                    tabIndex={disabled ? -1 : 0}
                    size={sizing}
                    error={!isItemValid}
                    disabled={disabled}
                    isLoading={isLoading}
                    data-testid={'picker-filter'}
                    onBlur={onBlur}
                >
                    {isLoading ? (
                        <components.Placeholder value={value} meta={meta}>
                            Loading...
                        </components.Placeholder>
                    ) : value ? (
                        <components.ValueContainer
                            value={value}
                            size={sizing}
                            meta={meta}
                            disabled={disabled}
                            data-testid="value-container"
                        >
                            {activeLabel}
                        </components.ValueContainer>
                    ) : (
                        <components.Placeholder value={value} meta={meta}>
                            {placeholder}
                        </components.Placeholder>
                    )}

                    {isLoading ? (
                        <components.LoadingIndicator value={value} meta={meta} size={sizing} />
                    ) : (
                        <components.DropdownIndicator
                            value={value}
                            meta={meta}
                            open={open}
                            disabled={disabled}
                            size={sizing}
                            data-testid={'picker-button'}
                        />
                    )}

                    {!isItemValid && (
                        <div className={'top-0 right-7 absolute'}>
                            <ErrorNotification
                                errorText={errorMessage || 'Some error occured.'}
                                className={iconStyles}
                            />
                        </div>
                    )}
                    {isWarning && warningMessage && (
                        <div className={'top-0 right-7 absolute'}>
                            <WarningNotification warningText={warningMessage} className={iconStyles} />
                        </div>
                    )}
                </components.Reference>

                {isMounted && (
                    <Portal>
                        <FloatingFocusManager context={context} initialFocus={searchInputRef} returnFocus={false}>
                            <components.Menu
                                {...getFloatingProps()}
                                ref={refs.setFloating}
                                value={value}
                                meta={meta}
                                style={{
                                    ...floatingStyles,
                                    visibility: middlewareData.hide?.referenceHidden ? 'hidden' : 'visible',
                                }}
                                data-testid="select-menu"
                            >
                                <components.MenuBody
                                    ref={menuBodyRef}
                                    value={value}
                                    meta={meta}
                                    style={transitionStyles}
                                >
                                    <components.Header value={value} meta={meta}>
                                        <components.Control
                                            value={value}
                                            meta={meta}
                                            error={errorMessage}
                                            warning={warningMessage}
                                            isValid={isItemValid}
                                        >
                                            {value && (
                                                <components.Tag
                                                    value={value}
                                                    meta={meta}
                                                    disabled={disabled}
                                                    onDelete={handleDelete}
                                                    isWarning={isWarning || !!warningMessage}
                                                >
                                                    {activeLabel}
                                                </components.Tag>
                                            )}

                                            {!searchable && !value && (
                                                <components.Placeholder value={value} meta={meta}>
                                                    {placeholder}
                                                </components.Placeholder>
                                            )}

                                            {searchable && (
                                                <components.InputSearch
                                                    ref={searchInputRef}
                                                    meta={meta}
                                                    value={inputValue}
                                                    data-testid="input-search"
                                                    onChange={e => setInputValue(e.target.value)}
                                                />
                                            )}
                                        </components.Control>
                                    </components.Header>

                                    <FloatingList elementsRef={listRef}>
                                        <components.MenuList value={value} meta={meta}>
                                            {cloneChildren<InternalItemProps<T, M>>(children, {
                                                activeIndex,
                                                Component: components.Option,
                                                readLabel,
                                                meta,
                                                isVisible,
                                                isSelected,
                                                onSelect: handleSelect,
                                            })}
                                        </components.MenuList>
                                    </FloatingList>
                                </components.MenuBody>
                            </components.Menu>
                        </FloatingFocusManager>
                    </Portal>
                )}
            </div>

            {helperText && <HelperText className="mt-1">{helperText}</HelperText>}
        </div>
    );
};

const Item = <T = unknown,>({
    Component,
    value,
    isVisible,
    isSelected,
    children,
    meta,
    activeIndex,
    readLabel,
    onSelect,
    isDisabled = false,
}: SelectItemProps<T> & InternalItemProps<T>) => {
    const { ref, index } = useListItem();
    const isActive = activeIndex === index;
    const selected = isSelected(value);

    const handleKeyDown: React.KeyboardEventHandler<HTMLLIElement> = e => {
        if (e.key === 'Enter') {
            e.preventDefault();

            if (!selected) {
                onSelect(value);
                return;
            }

            onSelect(null);
        }
    };

    if (!isVisible(value, children)) {
        return null;
    }

    return (
        <Component
            ref={ref}
            tabIndex={isActive ? 0 : -1}
            value={value}
            isSelected={selected}
            isDisabled={isDisabled}
            meta={meta}
            data-testid={'type-list-element'}
            onMouseDown={e => e.preventDefault()}
            onKeyDown={handleKeyDown}
            onClick={() => (selected ? onSelect(null) : onSelect(value))}
        >
            {readLabel ? readLabel(value) : children}
        </Component>
    );
};

export const Select = Object.assign(Root, {
    ...defaultComponents,
    Item: <T = unknown,>(props: SelectItemProps<T>) => <Item {...(props as unknown as Parameters<typeof Item>[0])} />,
});
