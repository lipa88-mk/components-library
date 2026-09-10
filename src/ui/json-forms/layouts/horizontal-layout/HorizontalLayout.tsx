import type { FC } from 'react';
import React from 'react';
import { renderChildren } from '../utils';
import { JsonFormsLayout } from '../JsonFormsLayout';
import type { HorizontalLayout, RendererProps, UISchemaElement } from '@jsonforms/core';
import { rankWith, uiTypeIs } from '@jsonforms/core';
import { parseCssProperty } from '../../helpers';

function getLayoutStyles(uischema: UISchemaElement): React.CSSProperties {
    const options = uischema.options;

    if (!options) {
        return {};
    }

    return {
        gridTemplateColumns: parseCssProperty(options.gridTemplateColumns),
        columnGap: parseCssProperty(options.columnGap),
        padding: parseCssProperty(options.padding),
    };
}

const HorizontalLayoutRendererComponent: FC<RendererProps> = ({ schema, uischema, enabled, visible, path }) => {
    const horizontalLayout = uischema as HorizontalLayout;

    return (
        <JsonFormsLayout
            visible={visible}
            data-testid="jsonforms-horizontal-layout"
            className="grid grid-flow-col auto-cols-fr gap-6"
            style={getLayoutStyles(uischema)}
        >
            {renderChildren({
                layout: horizontalLayout,
                schema,
                enabled,
                path,
            })}
        </JsonFormsLayout>
    );
};

export const HorizontalLayoutRenderer: FC<RendererProps> = props => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, ...otherProps } = props;
    // We don't hand over data to the layout renderer to avoid rerendering it with every data change
    return <HorizontalLayoutRendererComponent {...otherProps} />;
};

export const horizontalLayoutTester = rankWith(2, uiTypeIs('HorizontalLayout'));
