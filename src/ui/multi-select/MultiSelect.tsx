import React, { useEffect, useRef, useState } from 'react';
import { classes, cloneChildren, emptyArr, noop, useControlledState } from '../../utils';
import { CheckIcon } from '@heroicons/react/20/solid';
import { BackspaceIcon } from '@heroicons/react/24/outline';
import {
    useFloating,
    useInteractions,
    useFocus,
    size,
    autoUpdate,
    offset,
    flip,
    hide,
    type UseTransitionStylesProps,
    useDismiss,
    useClick,
    FloatingList,
    useListNavigation,
    useListItem,
    FloatingFocusManager,
    useTransitionStyles,
    shift,
} from '@floating-ui/react';
import defaultComponents from './components';
import type {
    MultiSelectProps,
    DefaultMetaType,
    InternalItemProps,
    MultiSelectItemProps,
    MultiSelectComponents,
} from './models';
import { Portal } from '../portal';
import { HelperText } from '../helperText';
import { ErrorNotification, WarningNotification } from '../input/Input';

const transitionOpts: UseTransitionStylesProps = {
    duration: 150,
    initial: ({ side }) => ({
        opacity: 0,
        transform: side === 'top' || side === 'bottom' ? 'scaleY(0.95)' : 'scaleX(0.95)',
    }),
};

const Root = <M extends DefaultMetaType = DefaultMetaType>({
    id,
    value: propValue,
    defaultValue,
    open: propOpen,
    components: propComponents,
    meta,
    defaultOpen,
    placeholder = 'Select...',
    onChange = noop,
    onBlur = noop,
    searchable = false,
    children,
    disabled = false,
    ariaLabel,
    isValid = true,
    isLoading = false,
    sizing = 'md',
    helperText,
    errorMessage,
    onChangeOpen,
    filterOption,
    placement = 'bottom-start',
    offset: propOffset,
}: MultiSelectProps<M>) => {
    const [value = emptyArr, setValue] = useControlledState<string[]>({
        value: propValue,
        defaultValue,
        onChange,
    });
    const [open, setOpen] = useControlledState<boolean>({
        value: propOpen,
        defaultValue: defaultOpen,
        onChange: onChangeOpen,
    });

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState<string>('');

    const isWarning = value
        ? value.some(
              val =>
                  !React.Children.toArray(children).some(
                      child => React.isValidElement(child) && child.props.value === val
                  )
          )
        : false;

    const items = React.Children.map(children, child => child?.props.value);
    const selectedAllItems = value.length === items.length;

    const deprecatedValues = value.filter(element => {
        return !items.includes(element);
    });

    const warningMessage = isWarning
        ? `Selected value is not present in the options list (deprecated). Please select a valid value.`
        : undefined;

    const childrenArray = React.Children.toArray(children);
    const firstChild = childrenArray[0] as React.ReactElement<MultiSelectItemProps> | undefined;

    const clonedDeprecatedItems = deprecatedValues.map((item, index) => {
        if (firstChild && React.isValidElement<MultiSelectItemProps>(firstChild)) {
            return React.cloneElement(firstChild, {
                key: `deprecated-item-${index}`,
                value: item,
                children: item,
                isDeprecated: true,
            });
        }
        return null;
    });

    const newChildren = [...clonedDeprecatedItems, ...childrenArray] as React.ReactElement<
        MultiSelectItemProps,
        string | React.JSXElementConstructor<any>
    >[];

    const ref = useRef<HTMLDivElement>(null);
    const menuBodyRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const listRef = useRef<(HTMLLIElement | null)[]>([]);
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

    const isVisible: InternalItemProps['isVisible'] = (value, label) => {
        if (filterOption) {
            return filterOption(value, label, inputValue);
        }

        return label.toLowerCase().includes(inputValue.toLowerCase());
    };
    const isSelected: InternalItemProps['isSelected'] = itemValue => value.includes(itemValue);

    const handleUnselect: InternalItemProps['onUnselect'] = itemValue => {
        setValue(value.filter(el => el !== itemValue));
    };

    const handleDeleteTag = (itemValue: string) => {
        setValue(value.filter(el => el !== itemValue));

        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };

    const handleSelect: InternalItemProps['onSelect'] = itemValue => {
        setInputValue('');
        setValue([...value, itemValue]);
    };

    const isItemValid = isValid && !errorMessage;

    if (!isValid && !errorMessage) {
        // eslint-disable-next-line no-console
        console.error(
            `You provided isValid as false. Please provide errorMessage for user to see the error description.`
        );
    }

    const components = {
        ...defaultComponents,
        ...propComponents,
    } as MultiSelectComponents<M>;

    const isDisabled = isLoading || disabled;

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

    return (
        <div
            ref={ref}
            id={id}
            data-testid={'dropdown-multiple-picker'}
            role={'combobox_wrapper'}
            aria-label={ariaLabel + '_combobox_wrapper'}
        >
            <div className="relative">
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
                    ) : value.length > 0 ? (
                        <components.Tags value={value} meta={meta} disabled={isDisabled} data-testid="selected-label">
                            {newChildren
                                .filter(child => isSelected(child.props.value))
                                .map(child => (
                                    <components.Tag
                                        key={child.props.value}
                                        value={child.props.value}
                                        disabled={disabled}
                                        meta={meta}
                                        isWarning={child.props.isDeprecated === true}
                                    >
                                        {child.props.children}
                                    </components.Tag>
                                ))}
                        </components.Tags>
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
                        <FloatingFocusManager context={context} initialFocus={searchInputRef}>
                            <components.Menu
                                {...getFloatingProps()}
                                ref={refs.setFloating}
                                value={value}
                                meta={meta}
                                style={{
                                    ...floatingStyles,
                                    visibility: middlewareData.hide?.referenceHidden ? 'hidden' : 'visible',
                                }}
                                data-testid="multiselect-menu"
                            >
                                <components.MenuBody
                                    ref={menuBodyRef}
                                    value={value}
                                    meta={meta}
                                    style={transitionStyles}
                                >
                                    <components.Header value={value} searchable={searchable} meta={meta}>
                                        <components.Control
                                            value={value}
                                            meta={meta}
                                            error={errorMessage}
                                            isValid={isItemValid}
                                            warning={warningMessage}
                                        >
                                            <components.RenderControlTags
                                                value={value}
                                                meta={meta}
                                                items={newChildren}
                                                disabled={disabled}
                                                isSelected={isSelected}
                                                onDelete={handleDeleteTag}
                                            />

                                            {!searchable && !(Array.isArray(value) && value.length > 0) && (
                                                <components.Placeholder value={value} meta={meta}>
                                                    {placeholder}
                                                </components.Placeholder>
                                            )}

                                            {searchable && (
                                                <components.InputSearch
                                                    ref={searchInputRef}
                                                    value={inputValue}
                                                    onChange={e => setInputValue(e.target.value)}
                                                />
                                            )}
                                        </components.Control>
                                    </components.Header>

                                    <FloatingList elementsRef={listRef}>
                                        <components.MenuList value={value} meta={meta} data-testid={'combobox-list'}>
                                            {cloneChildren<InternalItemProps<M>>(children, {
                                                Component: components.Option,
                                                activeIndex,
                                                meta,
                                                isVisible,
                                                isSelected,
                                                onUnselect: handleUnselect,
                                                onSelect: handleSelect,
                                            })}
                                        </components.MenuList>
                                    </FloatingList>

                                    <components.Footer options={items} meta={meta} onChange={setValue}>
                                        {selectedAllItems ? (
                                            <components.FooterAction
                                                meta={meta}
                                                onMouseDown={e => e.preventDefault()}
                                                onClick={() => setValue([])}
                                            >
                                                <BackspaceIcon className="w-4 h-4" />
                                                Clear all
                                            </components.FooterAction>
                                        ) : (
                                            <components.FooterAction
                                                meta={meta}
                                                onMouseDown={e => e.preventDefault()}
                                                onClick={() => setValue(items)}
                                            >
                                                <CheckIcon className="w-4 h-4" />
                                                Select all
                                            </components.FooterAction>
                                        )}
                                    </components.Footer>
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

const Item: React.FC<MultiSelectItemProps & InternalItemProps> = ({
    Component,
    value,
    children,
    activeIndex,
    meta,
    isVisible = () => true,
    isSelected = () => false,
    onUnselect,
    onSelect,
}) => {
    const { ref, index } = useListItem();
    const isActive = activeIndex === index;
    const selected = isSelected(value);

    const handleKeyDown: React.KeyboardEventHandler<HTMLLIElement> = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (selected) {
                onUnselect(value);
            } else {
                onSelect(value);
            }
        }
    };

    if (!isVisible(value, children)) {
        return null;
    }

    return (
        <Component
            ref={ref}
            value={value}
            tabIndex={isActive ? 0 : -1}
            data-testid={'combobox-list-item'}
            role="option"
            aria-selected={selected}
            isSelected={selected}
            meta={meta}
            onMouseDown={e => e.preventDefault()}
            onKeyDown={handleKeyDown}
            onClick={() => (selected ? onUnselect(value) : onSelect(value))}
        >
            {children}
        </Component>
    );
};

export const MultiSelect = Object.assign(Root, {
    Item: (props: MultiSelectItemProps) => <Item {...(props as Parameters<typeof Item>[0])} />,
    ...defaultComponents,
});
