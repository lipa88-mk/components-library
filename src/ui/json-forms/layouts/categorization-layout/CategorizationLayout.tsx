import React, { useMemo, useState } from 'react';
import type { Categorization, Category, StatePropsOfLayout, Tester, UISchemaElement } from '@jsonforms/core';
import { isVisible } from '@jsonforms/core';
import { and, rankWith, uiTypeIs } from '@jsonforms/core';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import { renderChildren, withAjvProps } from '../utils';
import type { AjvProps } from '../../models';
import { TabbedView } from '../../../tabbed-view';
import { JsonFormsLayout } from '../JsonFormsLayout';
import { parseCssProperty } from '../../helpers';

function getLayoutStyles(uischema: UISchemaElement): React.CSSProperties {
    const options = uischema.options;

    if (!options) {
        return {};
    }

    return {
        rowGap: parseCssProperty(options.rowGap),
    };
}

export interface CategorizationLayoutRendererProps extends StatePropsOfLayout, AjvProps {
    selected?: number;
    ownState?: boolean;
    data?: unknown;
    onChange?(selected: number, prevSelected: number): void;
}

const CategorizationLayoutComponent = ({
    data,
    path,
    schema,
    uischema,
    enabled,
    visible,
    selected,
    onChange,
    ajv,
}: CategorizationLayoutRendererProps) => {
    const categorization = uischema as Categorization;

    const [previousCategorization, setPreviousCategorization] = useState<Categorization>(uischema as Categorization);
    const [activeCategory, setActiveCategory] = useState<number>(selected ?? 0);

    const safeCategory = activeCategory >= categorization.elements.length ? 0 : activeCategory;

    const categories = useMemo(() => {
        return categorization.elements.filter((category: Category | Categorization) =>
            // Because the third argument in the "isVisible" function has such signature. See the function's implementation.
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            isVisible(category, data, undefined, ajv)
        );
    }, [categorization, data, ajv]);

    const tabLabels = useMemo(() => categories.map(el => el.label), [categories]);
    const activeTab = useMemo<string>(() => tabLabels[safeCategory], [safeCategory, tabLabels]);

    const onCategorySelected = (categoryIndex: number) => {
        if (onChange) {
            onChange(categoryIndex, safeCategory);
        }
        setActiveCategory(categoryIndex);
    };

    if (categorization !== previousCategorization) {
        setActiveCategory(0);
        setPreviousCategorization(categorization);
    }

    return (
        <JsonFormsLayout visible={visible} data-testid="jsonforms-categorization-layout">
            <TabbedView activeTab={activeTab} onSelect={(_, index) => onCategorySelected(index)}>
                {categories.map((_, index) => (
                    <TabbedView.Tab key={tabLabels[index]} title={tabLabels[index]} />
                ))}
            </TabbedView>
            <div className="grid grid-flow-row gap-4" style={getLayoutStyles(uischema)}>
                {renderChildren({
                    layout: categories[safeCategory],
                    schema,
                    enabled,
                    path,
                })}
            </div>
        </JsonFormsLayout>
    );
};

export const CategorizationLayoutRenderer = withAjvProps(withJsonFormsLayoutProps(CategorizationLayoutComponent));

const isSingleLevelCategorization: Tester = and(uiTypeIs('Categorization'), (uischema: UISchemaElement): boolean => {
    const categorization = uischema as Categorization;
    return categorization.elements && categorization.elements.reduce((acc, e) => acc && e.type === 'Category', true);
});

export const categorizationLayoutTester = rankWith(2, isSingleLevelCategorization);
