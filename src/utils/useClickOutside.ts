import { useEffect } from 'react';

export const useClickOutside = (ref, callback, enable = true) => {
    useEffect(() => {
        if (enable) {
            const handleClick = e => {
                if (!ref.current) return;
                if (ref.current?.contains(e.target)) return;

                callback(e);
            };
            document.addEventListener('click', handleClick);

            return () => document.removeEventListener('click', handleClick);
        }
    }, [enable]);
};
