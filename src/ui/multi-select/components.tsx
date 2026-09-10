import React, { forwardRef, useRef } from 'react';
import { classes } from '../../utils';
import { useMergeRefs } from '@floating-ui/react';
import type {
    MultiSelectTagsProps,
    MultiSelectTagProps,
    MultiSelectFooterProps,
    MultiSelectFooterActionProps,
    MultiSelectComponents,
    MultiSelectControlProps,
    MultiSelectInputSearchProps,
    MultiSelectHeaderProps,
    MultiSelectOptionProps,
    MultiSelectMenuListProps,
    MultiSelectMenuProps,
    MultiSelectMenuBodyProps,
    MultiSelectDropdownIndicatorProps,
    MultiSelectLoadingIndicatorProps,
    MultiSelectReferenceProps,
    MultiSelectPlaceholderProps,
    MultiSelectRenderControlTagsProps,
} from './models';
import { useHiddenTagsObserver } from './useHiddenTagsObserver';
import { Tags as TagsComponent } from '../tags';
import { Select } from '../select';

const Tags = forwardRef<HTMLDivElement, MultiSelectTagsProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ value, children, disabled, meta, className, ...props }, ref) => {
        const rootRef = useRef<HTMLDivElement | null>(null);
        const hintRef = useRef<HTMLSpanElement | null>(null);
        const mergedRootRef = useMergeRefs([rootRef, ref]);
        const hiddenItemsLength = useHiddenTagsObserver({ rootRef, hintRef, value });

        return (
            <TagsComponent
                {...props}
                ref={mergedRootRef}
                className={classes('max-w-full flex-nowrap overflow-hidden flex-grow', className)}
            >
                {children}
                <span
                    ref={hintRef}
                    className={classes(
                        'flex shrink-0 items-center gap-1 truncate rounded-sm px-1 text-sm border',
                        disabled ? 'bg-bg-surface3  text-fg-default border-transparent' : 'border-border-soft'
                    )}
                    aria-hidden={!hiddenItemsLength}
                    data-hint-tag={true}
                    style={{
                        visibility: hiddenItemsLength ? 'visible' : 'hidden',
                    }}
                >
                    +{hiddenItemsLength}
                </span>
            </TagsComponent>
        );
    }
);

const RenderControlTags: React.FC<MultiSelectRenderControlTagsProps> = ({
    value,
    items,
    isSelected,
    disabled,
    meta,
    onDelete,
}) => {
    return (
        <>
            {items
                .filter(child => isSelected(child.props.value))
                .map(child => (
                    <Select.Tag
                        key={child.props.value}
                        value={value}
                        meta={meta}
                        disabled={disabled}
                        isWarning={!!child.props.isDeprecated}
                        data-testid="selected-label"
                        onMouseDown={e => e.preventDefault()}
                        onDelete={() => onDelete(child.props.value)}
                    >
                        {child.props.children}
                    </Select.Tag>
                ))}
        </>
    );
};

const Footer = forwardRef<HTMLDivElement, MultiSelectFooterProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ onChange, options, className, meta, ...props }, ref) => (
        <div {...props} ref={ref} className={classes('py-1 border-t border-border-soft', className)} />
    )
);

const FooterAction = forwardRef<HTMLButtonElement, MultiSelectFooterActionProps>(
    ({ type = 'button', ...props }, ref) => (
        <button
            {...props}
            ref={ref}
            type={type}
            className="w-full flex items-center gap-2 justify-start py-2.5 px-4 text-sm font-normal text-fg-default hover:bg-bg-surface2"
        />
    )
);

const Tag = forwardRef<HTMLSpanElement, MultiSelectTagProps>((props, ref) => <Select.Tag {...props} ref={ref} />);

const Control = forwardRef<HTMLDivElement, MultiSelectControlProps>((props, ref) => (
    <Select.Control {...props} ref={ref} />
));

const InputSearch = forwardRef<HTMLInputElement, MultiSelectInputSearchProps>((props, ref) => (
    <Select.InputSearch {...props} ref={ref} />
));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = forwardRef<HTMLDivElement, MultiSelectHeaderProps>(({ searchable, value, ...props }, ref) => {
    return <Select.Header {...props} ref={ref} value={value} />;
});

const Option = forwardRef<HTMLLIElement, MultiSelectOptionProps>((props, ref) => (
    <Select.Option {...props} ref={ref} />
));

const Menu = forwardRef<HTMLDivElement, MultiSelectMenuProps>((props, ref) => <Select.Menu {...props} ref={ref} />);

const MenuBody = forwardRef<HTMLDivElement, MultiSelectMenuBodyProps>((props, ref) => (
    <Select.MenuBody {...props} ref={ref} />
));

const MenuList = forwardRef<HTMLUListElement, MultiSelectMenuListProps>((props, ref) => (
    <Select.MenuList {...props} ref={ref} />
));

const DropdownIndicator = forwardRef<HTMLButtonElement, MultiSelectDropdownIndicatorProps>((props, ref) => (
    <Select.DropdownIndicator {...props} ref={ref} />
));

const LoadingIndicator = forwardRef<HTMLDivElement, MultiSelectLoadingIndicatorProps>((props, ref) => (
    <Select.LoadingIndicator {...props} ref={ref} />
));

const Reference = forwardRef<HTMLDivElement, MultiSelectReferenceProps>((props, ref) => (
    <Select.Reference {...props} ref={ref} />
));

const Placeholder = forwardRef<HTMLSpanElement, MultiSelectPlaceholderProps>((props, ref) => (
    <Select.Placeholder {...props} ref={ref} />
));

const components: MultiSelectComponents = {
    Reference,
    DropdownIndicator,
    LoadingIndicator,
    Placeholder,
    Control,
    Header,
    Menu,
    MenuBody,
    MenuList,
    Option,
    Tag,
    InputSearch,

    Tags,
    RenderControlTags,
    Footer,
    FooterAction,
};

export default components;
