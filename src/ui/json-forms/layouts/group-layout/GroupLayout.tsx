import type { FC } from 'react';
import React from 'react';
import { renderChildren } from '../utils';
import { JsonFormsLayout } from '../JsonFormsLayout';
import type { RendererProps, UISchemaElement, GroupLayout } from '@jsonforms/core';
import { rankWith, uiTypeIs } from '@jsonforms/core';
import { parseCssProperty } from '../../helpers';
import { isLabelable } from '@jsonforms/core';

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

const GroupLayoutRendererComponent: FC<RendererProps> = ({ schema, uischema, enabled, visible, path }) => {
    const groupLayout = uischema as GroupLayout;
    const hasLabel = isLabelable(uischema);
    const label = hasLabel ? uischema.label : null;

    return (
        <JsonFormsLayout visible={visible} data-testid="jsonforms-group-layout">
            {label && <h2 className="text-base font-medium text-fg-default pb-4">{label}</h2>}

            <div className="grid grid-flow-row gap-6" style={getLayoutStyles(uischema)}>
                {renderChildren({
                    layout: groupLayout,
                    schema,
                    enabled,
                    path,
                    className: 'group-layout-item',
                })}
            </div>
        </JsonFormsLayout>
    );
};

export const GroupLayoutRenderer: FC<RendererProps> = props => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, ...otherProps } = props;
    // We don't hand over data to the layout renderer to avoid rerendering it with every data change
    return <GroupLayoutRendererComponent {...otherProps} />;
};

export const groupLayoutTester = rankWith(2, uiTypeIs('Group'));
