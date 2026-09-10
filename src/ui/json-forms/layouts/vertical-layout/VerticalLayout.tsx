import type { FC } from 'react';
import React from 'react';
import { renderChildren } from '../utils';
import { JsonFormsLayout } from '../JsonFormsLayout';
import type { RendererProps, UISchemaElement, VerticalLayout } from '@jsonforms/core';
import { rankWith, uiTypeIs } from '@jsonforms/core';
import { parseCssProperty } from '../../helpers';

function getLayoutStyles(uischema: UISchemaElement): React.CSSProperties {
    const options = uischema.options;

    if (!options) {
        return {};
    }

    return {
        rowGap: parseCssProperty(options.rowGap),
        padding: parseCssProperty(options.padding),
    };
}

const VerticalLayoutRendererComponent: FC<RendererProps> = ({ schema, uischema, enabled, visible, path }) => {
    const verticalLayout = uischema as VerticalLayout;

    return (
        <JsonFormsLayout
            visible={visible}
            data-testid="jsonforms-vertical-layout"
            className="grid grid-flow-row gap-6"
            style={getLayoutStyles(uischema)}
        >
            {renderChildren({
                layout: verticalLayout,
                schema,
                enabled,
                path,
                className: 'vertical-layout-item',
            })}
        </JsonFormsLayout>
    );
};

export const VerticalLayoutRenderer: FC<RendererProps> = props => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, ...otherProps } = props;
    // We don't hand over data to the layout renderer to avoid rerendering it with every data change
    return <VerticalLayoutRendererComponent {...otherProps} />;
};

export const verticalLayoutTester = rankWith(2, uiTypeIs('VerticalLayout'));
