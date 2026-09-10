import type React from 'react';
import type { Placement, OffsetOptions, FlipOptions } from '@floating-ui/react';

export type PopoverProps = {
    open?: boolean;
    placement?: Placement;
    fallbackAxisSideDirection?: FlipOptions['fallbackAxisSideDirection'];
    offset?: OffsetOptions;
    defaultOpen?: boolean;
    children: [React.ReactElement, React.ReactElement];
    onChangeOpen?: (state: boolean) => void;
};

export type TPopoverContext = {
    open: boolean;
    offset: OffsetOptions;
    placement: Placement;
    listElementsRef?: React.MutableRefObject<(HTMLLIElement | null)[]>;
    activeIndex: number | null;
    onChangeActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
    onChangeOpen: (state: boolean) => void;
};

export type PopoverContentProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
    children?: React.ReactNode | ((props: TPopoverContext) => React.ReactNode);
};

export type PopoverListProps = React.HTMLAttributes<HTMLUListElement>;

export type PopoverItemProps = Omit<React.HTMLAttributes<HTMLLIElement>, 'role' | 'tabIndex'> & {
    disabled?: boolean;
    onSelect?: () => void;
};
