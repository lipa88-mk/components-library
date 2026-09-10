import type { FC } from 'react';
import React from 'react';
import { renderChildren } from '../utils';
import { JsonFormsLayout } from '../JsonFormsLayout';
import type { RendererProps, UISchemaElement, GroupLayout } from '@jsonforms/core';
import { and, optionIs, rankWith, uiTypeIs } from '@jsonforms/core';
import { parseCssProperty } from '../../helpers';
import { isLabelable } from '@jsonforms/core';
import { Expand } from '../../../expand';

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

const ExpandLayoutRendererComponent: FC<RendererProps> = ({ schema, uischema, enabled, visible, path }) => {
    const groupLayout = uischema as GroupLayout;
    const hasLabel = isLabelable(uischema);
    const label = hasLabel ? uischema.label : null;
    const expanded = uischema.options?.isOpen || false;

    return (
        <JsonFormsLayout visible={visible} data-testid="jsonforms-expand-layout">
            <div className="bg-bg-surface2">
                <Expand title={label || 'Expand'} size="md" expanded={expanded}>
                    <div className="pb-3 px-2 grid grid-flow-row gap-6" style={getLayoutStyles(uischema)}>
                        {renderChildren({
                            layout: groupLayout,
                            schema,
                            enabled,
                            path,
                            className: 'group-layout-item',
                        })}
                    </div>
                </Expand>
            </div>
        </JsonFormsLayout>
    );
};

export const ExpandLayoutRenderer: FC<RendererProps> = props => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, ...otherProps } = props;
    // We don't hand over data to the layout renderer to avoid rerendering it with every data change
    return <ExpandLayoutRendererComponent {...otherProps} />;
};

export const expandLayoutTester = rankWith(3, and(uiTypeIs('Group'), optionIs('expand', true)));
