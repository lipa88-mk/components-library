import React, { useState } from 'react';
import { ControlElement, JsonFormsProps, VerticalLayout } from '@jsonforms/core';
import { JsonForms } from '@jsonforms/react';
import { Meta, StoryFn } from '@storybook/react';
import { cells, renderers } from '../../config';

type Props = Pick<JsonFormsProps, 'schema' | 'uischema'>;

const RenderJsonForms: React.FC<Props> = ({ schema, uischema }) => {
    const [data, setData] = useState();

    return (
        <div className="space-y-4">
            <JsonForms
                schema={schema}
                uischema={uischema}
                data={data}
                renderers={renderers}
                cells={cells}
                onChange={({ data }) => {
                    setData(data);
                }}
            />

            <pre>{JSON.stringify(data)}</pre>
        </div>
    );
};

const meta: Meta<typeof RenderJsonForms> = {
    title: 'JSONForms/OnChangeStrategy',
};

export default meta;

export const Blur: StoryFn = () => (
    <RenderJsonForms
        schema={{
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    minLength: 3,
                    description: 'Please enter your name',
                },
                age: {
                    type: 'integer',
                },
                income: {
                    type: 'number',
                },
                nationality: {
                    type: 'array',
                    uniqueItems: true,
                    items: {
                        type: 'string',
                        enum: ['DE', 'IT', 'JP', 'US', 'RU', 'Other'],
                    },
                },
                job: {
                    type: 'array',
                    uniqueItems: true,
                    items: {
                        type: 'string',
                        oneOf: [
                            { const: 'fe', title: 'FE' },
                            { const: 'be', title: 'BE' },
                            { const: 'ceo', title: 'CEO' },
                        ],
                    },
                },
            },
            required: ['nationality', 'age'],
        }}
        uischema={
            {
                type: 'VerticalLayout',
                elements: [
                    {
                        type: 'Control',
                        scope: '#/properties/name',
                        options: {
                            onChangeStrategy: 'blur',
                        },
                    } as ControlElement,
                    {
                        type: 'Control',
                        scope: '#/properties/age',
                        options: {
                            onChangeStrategy: 'blur',
                        },
                    },
                    {
                        type: 'Control',
                        scope: '#/properties/income',
                        options: {
                            onChangeStrategy: 'blur',
                        },
                    },
                    {
                        type: 'Control',
                        scope: '#/properties/nationality',
                        options: {
                            onChangeStrategy: 'blur',
                        },
                    },
                    {
                        type: 'Control',
                        scope: '#/properties/job',
                        options: {
                            onChangeStrategy: 'blur',
                        },
                    },
                ],
            } as VerticalLayout
        }
    />
);
