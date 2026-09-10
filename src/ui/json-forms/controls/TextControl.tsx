import React from 'react';
import { jsonFormsControl } from '../jsonFormsControl';
import type { HorizontalAlignment, VerticalAlignment } from '../models';
import { and, isStringControl, optionIs, rankWith } from '@jsonforms/core';
import { getHorizontalAlignmentClassName, getVerticalAlignmentClassName } from './utils';
import { classes } from '../../../utils';

interface TextControlProps {
    alignment: HorizontalAlignment;
    verticalAlignment: VerticalAlignment;
}

export const TextControl = jsonFormsControl<unknown, TextControlProps>(props => {
    const { uischema, label } = props;
    const { alignment, verticalAlignment } = uischema.options || {};

    return (
        <div className={classes('flex h-full w-full', getVerticalAlignmentClassName(verticalAlignment))}>
            <div
                className={classes(
                    'font-inter w-full text-sm text-fg-default',
                    getHorizontalAlignmentClassName(alignment)
                )}
            >
                {label}
            </div>
        </div>
    );
});

export const textControlTester = rankWith(3, and(isStringControl, optionIs('viewOnly', true)));
