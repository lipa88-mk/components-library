import React from 'react';
import { Checkbox } from '../../checkbox';
import { isBooleanControl, rankWith } from '@jsonforms/core';
import { jsonFormsControl } from '../jsonFormsControl';
import type { BaseControlElementOptions } from '../models';
import { isMatchDataType } from '../helpers';

export type CheckboxControlOptions = BaseControlElementOptions;

export const CheckboxControl = jsonFormsControl<unknown, CheckboxControlOptions>(props => {
    const { data, handleChange, path, label, enabled, visible, required, errors, uischema } = props;
    const checked = isMatchDataType<boolean>(data, 'boolean') ? data : false;

    if (!visible) {
        return null;
    }

    return (
        <Checkbox
            checked={checked}
            disabled={!enabled}
            required={required}
            errorMessage={errors}
            label={label}
            autoFocus={uischema.options && uischema.options.autoFocus}
            onChange={ev => handleChange(path, ev.target.checked)}
        />
    );
});

export const checkboxControlTester = rankWith(
    3, //increase rank as needed
    isBooleanControl
);
