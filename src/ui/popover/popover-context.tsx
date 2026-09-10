import { createContext, useContext } from 'react';
import type { TPopoverContext } from './models';
import { noop } from '../../utils';

export const PopoverContext = createContext<TPopoverContext>({
    open: false,
    offset: 0,
    placement: 'bottom',
    activeIndex: null,
    onChangeActiveIndex: noop,
    onChangeOpen: noop,
});

export const usePopoverContext = () => useContext<TPopoverContext>(PopoverContext);
