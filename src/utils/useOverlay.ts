import { useCallback, useState } from 'react';

export function useOverlay(defaultState = false) {
    const [open, setOpen] = useState(defaultState);

    const show = useCallback(() => setOpen(true), []);
    const hide = useCallback(() => setOpen(false), []);
    const toggle = useCallback(() => setOpen(value => !value), []);

    return { isOpen: open, show, hide, toggle };
}

export function useControlledOverlay(defaultState = []) {
    const [openIds, setOpenIds] = useState<string[]>(defaultState);

    const isOpen = useCallback(
        (id: string) => {
            return openIds.includes(id);
        },
        [openIds]
    );

    const show = useCallback((idsToShow: string | string[]) => {
        if (Array.isArray(idsToShow)) {
            setOpenIds(ids => [...ids, ...idsToShow]);
        } else {
            setOpenIds(ids => [...ids, idsToShow]);
        }
    }, []);

    const hide = useCallback((idsToHide: string | string[]) => {
        if (Array.isArray(idsToHide)) {
            setOpenIds(ids => ids.filter(openId => !idsToHide.includes(openId)));
        } else {
            setOpenIds(ids => ids.filter(openId => openId !== idsToHide));
        }
    }, []);

    const hideAll = useCallback(() => {
        setOpenIds([]);
    }, []);

    return { isOpen, openIds, show, hide, hideAll };
}
