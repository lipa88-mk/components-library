import type { FC, ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface HeaderPortalProps {
    position?: 'left' | 'right' | 'center' | 'bottom';
    children: ReactNode;
    className?: string;
    prepend?: boolean;
}

const HeaderPortal: FC<HeaderPortalProps> = ({ position = 'left', className, prepend = false, children }) => {
    const el = useRef<HTMLDivElement>(document.createElement('div'));

    useEffect(() => {
        const parent = document.querySelector<HTMLDivElement>(`#header__area.${position}`);

        if (prepend) parent?.prepend(el.current);
        else parent?.appendChild(el.current);

        if (className) {
            className.split(' ').forEach(c => el.current.classList.add(c));
        }

        return () => {
            parent?.removeChild(el.current);
        };
    }, []);

    return ReactDOM.createPortal(children, el.current);
};

export default HeaderPortal;
