import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { FloatingPortal } from '@floating-ui/react';
import { createPortal } from 'react-dom';
import { ThemeProvider, useTheme } from '../../theming';

const ROOT_ID = 'components-library-portal';

interface PortalProviderProps {
    zIndex: number;
}

const PortalProvider: FC<PortalProviderProps> = ({ zIndex }) =>
    createPortal(<div id={ROOT_ID} style={{ zIndex }} className="fixed h-0 w-0" />, document.body);

export const Portal: FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();

    return (
        <FloatingPortal id={ROOT_ID}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </FloatingPortal>
    );
};

export default PortalProvider;
