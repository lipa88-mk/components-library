import React from 'react';
import { RadioGroup } from '../../radio-group';
import { FieldWrapper } from './utils';
import { and, or, isEnumControl, isOneOfEnumControl, optionIs, rankWith } from '@jsonforms/core';
import { jsonFormsControl } from '../jsonFormsControl';
import type { ControlWithFormatElementOptions, ControlWithLayoutElementOptions } from '../models';
import { Alert } from '../../alerts';
import { isMatchDataType } from '../helpers';

export type RadioControlOptions = ControlWithFormatElementOptions & ControlWithLayoutElementOptions;

export const RadioControl = jsonFormsControl<unknown, RadioControlOptions>(props => {
    const { data, id, enabled, visible, schema, uischema, required, errors, label, path, handleChange } = props;

    if (!visible) {
        return null;
    }

    const items =
        'oneOf' in schema
            ? schema.oneOf?.map(el => {
                  return { label: el.title, value: el.const };
              })
            : schema.enum?.map(el => {
                  return { label: el, value: el };
              }) || [{ label: '' }];

    const value = isMatchDataType<string>(data, 'string') ? data : '';
    const layoutStyles = uischema.options?.layout === 'horizontal' ? 'flex flex-wrap gap-4' : 'mt-2 space-y-2';

    return (
        <FieldWrapper required={required} label={label} disabled={!enabled} id={id}>
            {errors && <Alert theme="danger" message={errors} show={true} />}
            <RadioGroup
                className={layoutStyles}
                disabled={!enabled}
                items={items}
                value={value}
                onChange={ev => handleChange(path, ev)}
            />
        </FieldWrapper>
    );
});

export const radioControlTester = rankWith(6, and(optionIs('format', 'radio'), or(isEnumControl, isOneOfEnumControl)));
// rank increased to replace wider selectEnumControlTester
