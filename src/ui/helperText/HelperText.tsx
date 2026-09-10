import React from 'react';
import { classes } from '../../utils';

export type Props = React.HTMLAttributes<HTMLDivElement>;

export const HelperText: React.FC<Props> = ({ className, ...props }) => (
    <div data-testid="helper-text" {...props} className={classes(className, 'text-xs font-normal text-fg-default')} />
);
