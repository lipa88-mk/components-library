import type { RefObject } from 'react';
import { useState } from 'react';

export function useResizable(ref: RefObject<HTMLElement>) {
    const [width, setWidth] = useState(0);
    const [resizing, setResizing] = useState(false);

    const handleMouseMove = (start, initialWidth) => ev => {
        const xDelta = ev.clientX - start;
        const width = initialWidth + -1 * xDelta;

        setWidth(width);
    };

    const handleMouseDown = ev => {
        setResizing(true);

        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const start = ev.clientX;
        const initialWidth = rect.width;

        const handleMove = handleMouseMove(start, initialWidth);

        document.addEventListener('mousemove', handleMove);
        document.addEventListener(
            'mouseup',
            () => {
                document.removeEventListener('mousemove', handleMove);
                setResizing(false);
            },
            { once: true }
        );
    };

    const reset = () => {
        setWidth(0);
        setResizing(false);
    };

    return { width, resizing, handleMouseDown, reset };
}
