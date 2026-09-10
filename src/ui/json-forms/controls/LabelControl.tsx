import React from 'react';
import { jsonFormsControl } from '../jsonFormsControl';
import type { HorizontalAlignment, VerticalAlignment } from '../models';
import { rankWith, uiTypeIs } from '@jsonforms/core';
import type { ControlElement } from '@jsonforms/core';
import { getHorizontalAlignmentClassName, getVerticalAlignmentClassName } from './utils';
import { classes } from '../../../utils';

interface LabelControlProps {
    alignment: HorizontalAlignment;
    verticalAlignment: VerticalAlignment;
}

type UIschema = Omit<ControlElement, 'options'> & {
    text?: string;
    options?: LabelControlProps | undefined;
};

export const LabelControl = jsonFormsControl<unknown, LabelControlProps>(props => {
    const { uischema } = props;
    const ui = uischema as UIschema;
    const { alignment, verticalAlignment } = uischema.options || { alignment: 'left', verticalAlignment: 'center' };

    return (
        <label className={classes('flex h-full w-full', getVerticalAlignmentClassName(verticalAlignment))}>
            <div
                className={classes(
                    'font-inter w-full text-base text-fg-default',
                    getHorizontalAlignmentClassName(alignment)
                )}
            >
                {ui.text}
            </div>
        </label>
    );
});

export const labelControlTester = rankWith(2, uiTypeIs('Label'));
