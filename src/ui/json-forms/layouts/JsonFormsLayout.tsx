import React from 'react';
import type { FC } from 'react';
import { classes } from '../../../utils';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
    visible: boolean;
};

export const JsonFormsLayout: FC<React.PropsWithChildren<Props>> = ({ className, children, visible, ...props }) => {
    return (
        <div
            {...props}
            className={classes(className)}
            hidden={visible === undefined || visible === null ? false : !visible}
        >
            {children}
        </div>
    );
};
