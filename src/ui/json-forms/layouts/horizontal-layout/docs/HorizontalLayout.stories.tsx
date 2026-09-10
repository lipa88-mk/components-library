import { HorizontalLayoutRenderer } from '..';
import type { Meta, StoryFn } from '@storybook/react';
import { JsonForms } from '@jsonforms/react';
import React, { useState } from 'react';
import { JsonFormsInitStateProps, JsonFormsReactProps } from '@jsonforms/react';
import { ControlElement, HorizontalLayout, JsonSchema, UISchemaElement } from '@jsonforms/core';
import Input from '../../../../input/Input';
import Labelify from '../../../../labelify/Labelify';
import { renderers, cells } from '../../../config';

const schema: JsonSchema = {
    type: 'object',
    title: 'XL',
    properties: {
        name: {
            type: 'string',
        },
        country: {
            type: 'string',
            title: 'Country',
            enum: ['Germany', 'Belgium', 'Spain'],
        },
        currency: {
            type: 'string',
            title: 'Currency',
            enum: ['EUR', 'GBP'],
        },
    },
};

const uischema: HorizontalLayout = {
    type: 'HorizontalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/name',
            title: 'Contract name',
        } as ControlElement,
        {
            type: 'Control',
            scope: '#/properties/country',
            title: 'Country',
        } as ControlElement,
        {
            type: 'Control',
            scope: '#/properties/currency',
            title: 'Currency',
        } as ControlElement,
    ],
};

const meta: Meta<typeof HorizontalLayoutRenderer> = {
    title: 'JSONForms/Layouts/HorizontalLayout',
    component: HorizontalLayoutRenderer,
    args: {
        schema,
        uischema,
    },
    parameters: {
        controls: {
            include: [],
        },
    },
};

export default meta;

export const UISchema: StoryFn<JsonFormsInitStateProps & JsonFormsReactProps> = ({ schema, uischema }) => {
    const [options, setOptions] = useState({
        gridTemplateColumns: '300px 300px 100px',
        columnGap: '30',
    });

    const [data, setData] = useState({
        name: 'Contract #1',
        country: 'Germany',
        currency: 'EUR',
    });

    return (
        <>
            <div className="grid grid-cols-[240px,100px] gap-6 mb-6 pb-6 border-b border-slate-300">
                <Labelify label="gridTemplateColumns">
                    <Input
                        value={options.gridTemplateColumns}
                        onChange={e =>
                            setOptions(prevState => ({
                                ...prevState,
                                gridTemplateColumns: e.target.value,
                            }))
                        }
                    />
                </Labelify>
                <Labelify label="columnGap">
                    <Input
                        type="number"
                        value={options.columnGap}
                        onChange={e =>
                            setOptions(prevState => ({
                                ...prevState,
                                columnGap: e.target.value,
                            }))
                        }
                    />
                </Labelify>
            </div>

            <JsonForms
                schema={schema}
                uischema={
                    {
                        ...uischema,
                        options: {
                            ...uischema?.options,
                            ...options,
                        },
                    } as UISchemaElement
                }
                renderers={renderers}
                cells={cells}
                data={data}
                onChange={({ data }) => setData(data)}
            />
        </>
    );
};

export const Padding: StoryFn<JsonFormsInitStateProps & JsonFormsReactProps> = ({ schema, uischema }) => {
    const [options, setOptions] = useState({
        padding: '0 10px 20px 30px',
    });

    const [data, setData] = useState({
        name: 'Contract #1',
        country: 'Germany',
        currency: 'EUR',
    });

    return (
        <>
            <div className="grid grid-cols-[240px,100px] gap-6 mb-6 pb-6 border-b border-slate-300">
                <Labelify label="padding">
                    <Input
                        value={options.padding}
                        onChange={e =>
                            setOptions(prevState => ({
                                ...prevState,
                                padding: e.target.value,
                            }))
                        }
                    />
                </Labelify>
            </div>

            <JsonForms
                schema={schema}
                uischema={
                    {
                        ...uischema,
                        options: {
                            ...uischema?.options,
                            ...options,
                        },
                    } as UISchemaElement
                }
                renderers={renderers}
                cells={cells}
                data={data}
                onChange={({ data }) => setData(data)}
            />
        </>
    );
};
