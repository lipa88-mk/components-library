import React, { forwardRef } from 'react';
import type { InputAdornmentProps } from './models';
import { classes } from '../../utils';

export const Adornment = forwardRef<HTMLDivElement, InputAdornmentProps>(({ className, ...props }, ref) => (
    <div {...props} ref={ref} className={classes(className, 'absolute top-1/2 transform -translate-y-1/2')} />
));
