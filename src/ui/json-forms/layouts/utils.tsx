import type { JsonSchema, Layout } from '@jsonforms/core';
import { getAjv } from '@jsonforms/core';
import isEmpty from 'lodash/isEmpty';
import { JsonFormsDispatch, useJsonForms } from '@jsonforms/react';
import type { ComponentType } from 'react';
import React from 'react';
import cn from 'classnames';
import { parseCssProperty } from '../helpers';
import type { AjvProps } from '../models';

type Options = {
    layout: Layout;
    schema: JsonSchema;
    className?: string;
    enabled: boolean;
    path: string;
};

export const renderChildren = ({ layout, schema, className, enabled, path }: Options) => {
    if (isEmpty(layout.elements)) {
        return [];
    }

    const { renderers, cells } = useJsonForms();

    return layout.elements.map((child, index) => {
        return (
            <div
                key={`${path}-${index}`}
                className={cn(className)}
                style={{ width: parseCssProperty(child.options?.width) }}
            >
                <JsonFormsDispatch
                    renderers={renderers}
                    cells={cells}
                    uischema={child}
                    schema={schema}
                    path={path}
                    enabled={enabled}
                />
            </div>
        );
    });
};

export const withAjvProps = <P extends object>(Component: ComponentType<AjvProps & P>) =>
    function WithAjvProps(props: P) {
        const ctx = useJsonForms();
        const ajv = getAjv({ jsonforms: { ...ctx } });

        return <Component {...props} ajv={ajv} />;
    };
