import cn, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

export const classes = (...args: ArgumentArray) => twMerge(cn(args));
