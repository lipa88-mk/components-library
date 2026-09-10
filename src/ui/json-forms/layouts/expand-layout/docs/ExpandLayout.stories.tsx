import { ExpandLayoutRenderer } from '..';
import type { Meta, StoryFn } from '@storybook/react';
import { JsonForms } from '@jsonforms/react';
import React, { useState } from 'react';
import { JsonFormsInitStateProps, JsonFormsReactProps } from '@jsonforms/react';
import { ControlElement, JsonSchema, GroupLayout } from '@jsonforms/core';
import { renderers, cells } from '../../../config';
import Labelify from '../../../../labelify/Labelify';
import Input from '../../../../input/Input';

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

const meta: Meta<typeof ExpandLayoutRenderer> = {
    title: 'JSONForms/Layouts/ExpandLayout',
    component: ExpandLayoutRenderer,
    args: {
        schema,
    },
    parameters: {
        controls: {
            include: [],
        },
    },
};

export default meta;

export const FieldWidth: StoryFn<JsonFormsInitStateProps & JsonFormsReactProps> = ({ schema, uischema }) => {
    const [data, setData] = useState({
        name: 'Contract #1',
        country: 'Germany',
        currency: 'EUR',
    });

    return (
        <JsonForms
            schema={schema}
            uischema={
                {
                    type: 'Group',
                    label: 'Expand Title',
                    options: {
                        expand: true,
                        isOpen: true,
                    },
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/name',
                            title: 'Contract name',
                            options: {
                                width: 300,
                            },
                        } as ControlElement,
                        {
                            type: 'Control',
                            scope: '#/properties/country',
                            title: 'Country',
                            options: {
                                width: '75%',
                            },
                        } as ControlElement,
                        {
                            type: 'Control',
                            scope: '#/properties/currency',
                            title: 'Currency',
                            options: {
                                width: '15rem',
                            },
                        } as ControlElement,
                    ],
                } as GroupLayout
            }
            renderers={renderers}
            cells={cells}
            data={data}
            onChange={({ data }) => setData(data)}
        />
    );
};

export const RowGap: StoryFn<JsonFormsInitStateProps & JsonFormsReactProps> = ({ schema, uischema }) => {
    const [options, setOptions] = useState({
        rowGap: '20',
        expand: true,
        isOpen: true,
    });
    const [data, setData] = useState({
        name: 'Contract #1',
        country: 'Germany',
        currency: 'EUR',
    });

    return (
        <>
            <div className="mb-6 pb-6 border-b border-slate-300">
                <Labelify label="rowGap">
                    <Input
                        type="number"
                        className="max-w-20"
                        value={options.rowGap}
                        onChange={e =>
                            setOptions(prevState => ({
                                ...prevState,
                                rowGap: e.target.value,
                            }))
                        }
                    />
                </Labelify>
            </div>

            <JsonForms
                schema={schema}
                uischema={
                    {
                        type: 'Group',
                        label: 'Group title',
                        options,
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
                    } as GroupLayout
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
        expand: true,
        isOpen: true,
    });
    const [data, setData] = useState({
        name: 'Contract #1',
        country: 'Germany',
        currency: 'EUR',
    });

    return (
        <>
            <div className="mb-6 pb-6 border-b border-slate-300">
                <Labelify label="padding">
                    <Input
                        className="max-w-40"
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
                        type: 'Group',
                        label: 'Group title',
                        options,
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
                    } as GroupLayout
                }
                renderers={renderers}
                cells={cells}
                data={data}
                onChange={({ data }) => setData(data)}
            />
        </>
    );
};
