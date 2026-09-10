import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { JsonForms } from '@jsonforms/react';
import { renderers, cells } from '../../config';
import { ControlElement, JsonFormsProps, VerticalLayout } from '@jsonforms/core';
import { TextareaControlOptions } from '../TextAreaControl';
import { MultiSelectEnumControlOptions } from '../MultiSelectEnumControl';
import { SelectEnumControlOptions } from '../SelectEnumControl';
import { CheckboxControlOptions } from '../CheckboxControl';
import { CheckboxListControlOptions } from '../CheckboxListControl';
import { RadioControlOptions } from '../RadioControl';

type Props = Pick<JsonFormsProps, 'schema' | 'uischema'> & { data?: any };

const RenderJsonForms: React.FC<Props> = ({ schema, uischema, data }) => {
    const [dataInt, setDataInt] = useState(data || {});

    return (
        <JsonForms
            schema={schema}
            uischema={uischema}
            data={dataInt}
            renderers={renderers}
            cells={cells}
            onChange={({ data }) => setDataInt(data)}
        />
    );
};

const meta: Meta<typeof RenderJsonForms> = {
    title: 'JSONForms/Controls',
    component: RenderJsonForms,
};

export default meta;

export const CheckboxList: StoryFn<CheckboxListControlOptions> = options => (
    <RenderJsonForms
        schema={{
            type: 'object',
            properties: {
                checkboxList1: {
                    type: 'array',
                    uniqueItems: true,
                    items: {
                        type: 'string',
                        enum: ['One', 'Two', 'Three'],
                    },
                },
            },
        }}
        uischema={
            {
                type: 'VerticalLayout',
                elements: [
                    {
                        type: 'Control',
                        scope: '#/properties/checkboxList1',
                        label: 'This is checkboxList',
                        options: {
                            format: 'checkbox',
                            layout: 'vertical',
                            ...options,
                        },
                    } as ControlElement,
                ],
            } as VerticalLayout
        }
    />
);

CheckboxList.argTypes = {
    layout: {
        control: 'inline-radio',
        table: {
            defaultValue: {
                summary: 'vertical',
            },
        },
        options: ['vertical', 'horizontal'],
        description: 'Specifies the layout of the component.',
    },
    format: {
        control: false,
        table: {
            defaultValue: {
                summary: 'checkbox',
            },
        },
        description: "Format of rendered control: `'checkbox'`",
    },
};

CheckboxList.args = {
    format: 'checkbox',
    layout: 'vertical',
};

export const Radio: StoryFn<RadioControlOptions> = options => (
    <RenderJsonForms
        schema={{
            type: 'object',
            properties: {
                radioGroup1: {
                    type: 'string',
                    enum: ['One', 'Two', 'Three'],
                },
            },
        }}
        uischema={
            {
                type: 'VerticalLayout',
                elements: [
                    {
                        type: 'Control',
                        scope: '#/properties/radioGroup1',
                        label: 'This is radio group',
                        options: {
                            format: 'radio',
                            layout: 'vertical',
                            ...options,
                        },
                    } as ControlElement,
                ],
            } as VerticalLayout
        }
    />
);

Radio.argTypes = {
    layout: {
        control: 'inline-radio',
        table: {
            defaultValue: {
                summary: 'vertical',
            },
        },
        options: ['vertical', 'horizontal'],
        description: 'Specifies the layout of the component.',
    },
    format: {
        control: false,
        table: {
            defaultValue: {
                summary: 'radio',
            },
        },
        description: "Format of rendered control: `'radio'`",
    },
};

Radio.args = {
    format: 'radio',
    layout: 'vertical',
};

export const Textarea: StoryFn<TextareaControlOptions> = options => (
    <RenderJsonForms
        schema={{
            type: 'object',
            properties: {
                comments: {
                    type: 'string',
                },
            },
        }}
        uischema={
            {
                type: 'VerticalLayout',
                elements: [
                    {
                        type: 'Control',
                        scope: '#/properties/comments',
                        options: {
                            multi: true,
                            ...options,
                        },
                    } as ControlElement,
                ],
            } as VerticalLayout
        }
    />
);

Textarea.argTypes = {
    alignment: {
        control: 'inline-radio',
        options: ['left', 'right', 'center'],
        description: 'Specifies the horizontal alignment of the text within the textarea.',
    },
    autoFocus: {
        control: 'boolean',
        description: 'If true, the textarea will automatically focus when the page loads.',
    },
    rows: {
        control: 'number',
        description: 'The number of visible text lines in the textarea.',
    },
    resizable: {
        control: 'boolean',
        table: {
            defaultValue: {
                summary: 'true',
            },
        },
        description: 'If true, the textarea can be resized by the user.',
    },
    placeholder: {
        description: 'The placeholder text displayed when the textarea is empty.',
    },
};

Textarea.args = {
    alignment: 'left',
    autoFocus: true,
    rows: 5,
    resizable: true,
    placeholder: '',
};

export const MultiSelect: StoryFn<MultiSelectEnumControlOptions> = options => (
    <RenderJsonForms
        schema={{
            type: 'object',
            properties: {
                enumMultiSelect: {
                    type: 'array',
                    uniqueItems: true,
                    items: {
                        type: 'string',
                        enum: ['One', 'Two', 'Three'],
                    },
                },
                oneOfMultiSelect: {
                    type: 'array',
                    uniqueItems: true,
                    items: {
                        type: 'string',
                        oneOf: [
                            {
                                const: 'one',
                                title: 'One',
                            },
                            {
                                const: 'two',
                                title: 'Two',
                            },
                            {
                                const: 'three',
                                title: 'Three',
                            },
                        ],
                    },
                },
            },
        }}
        uischema={
            {
                type: 'VerticalLayout',
                elements: [
                    {
                        type: 'Control',
                        scope: '#/properties/enumMultiSelect',
                        label: 'enumMultiSelect',
                        options: {
                            ...options,
                        },
                    },
                    {
                        type: 'Control',
                        scope: '#/properties/oneOfMultiSelect',
                        label: 'oneOfMultiSelect',
                        options: {
                            ...options,
                        },
                    },
                ],
            } as unknown as VerticalLayout
        }
        data={{
            enumMultiSelect: ['four'],
            oneOfMultiSelect: ['four'],
        }}
    />
);

MultiSelect.argTypes = {
    showSelectedTags: {
        control: 'boolean',
        table: {
            defaultValue: {
                summary: 'true',
            },
        },
        description: 'Allows to show/hide selected tags when multiselect is closed and open.',
    },
    showSelectControls: {
        control: 'boolean',
        table: {
            defaultValue: {
                summary: 'true',
            },
        },
        description: 'Allows to show/hide bottom part of the dropdown when multiselect is open.',
    },
    showSelectedItems: {
        control: 'boolean',
        table: {
            defaultValue: {
                summary: 'true',
            },
        },
        description: 'Allows to show/hide selected items when multiselect is open.',
    },
    searchable: {
        control: 'boolean',
        table: {
            defaultValue: {
                summary: 'true',
            },
        },
        description: 'Allows to show/hide search in the upper part of the dropdown when multiselect is open.',
    },
    sizing: {
        control: 'inline-radio',
        options: ['sm', 'md'],
        description: 'Sets the size of the component, typically affect height, padding, and font size.',
    },
    autoFocus: {
        control: 'boolean',
        description: 'If true, the textarea will automatically focus when the page loads.',
    },
    placeholder: {
        description: 'The placeholder text displayed when the Multiselect is empty.',
    },
};

MultiSelect.args = {
    showSelectedTags: true,
    showSelectControls: true,
    showSelectedItems: true,
    searchable: true,
    sizing: 'md',
    placeholder: 'Placeholder',
    autoFocus: true,
};

export const Select: StoryFn<SelectEnumControlOptions> = options => (
    <RenderJsonForms
        schema={{
            type: 'object',
            properties: {
                enumSelect: {
                    type: 'string',
                    enum: ['One', 'Two', 'Three'],
                },
                oneOfSelect: {
                    type: 'string',
                    oneOf: [
                        {
                            const: 'one',
                            title: 'One',
                        },
                        {
                            const: 'two',
                            title: 'Two',
                        },
                        {
                            const: 'three',
                            title: 'Three',
                        },
                    ],
                },
            },
        }}
        uischema={
            {
                type: 'VerticalLayout',
                elements: [
                    {
                        type: 'Control',
                        scope: '#/properties/enumSelect',
                        label: 'enumSelect',
                        options: {
                            ...options,
                        },
                    },
                    {
                        type: 'Control',
                        scope: '#/properties/oneOfSelect',
                        label: 'oneOfSelect',
                        options: {
                            ...options,
                        },
                    },
                ],
            } as unknown as VerticalLayout
        }
        data={{
            enumSelect: 'four',
            oneOfSelect: 'four',
        }}
    />
);

Select.argTypes = {
    showSelectedTags: {
        control: 'boolean',
        table: {
            defaultValue: {
                summary: 'true',
            },
        },
        description: 'Allows to show/hide selected tag when select is open.',
    },

    searchable: {
        control: 'boolean',
        table: {
            defaultValue: {
                summary: 'true',
            },
        },
        description: 'Allows to show/hide search in the upper part of the dropdown when select is open.',
    },
    sizing: {
        control: 'inline-radio',
        options: ['sm', 'md'],
        description: 'Sets the size of the component, typically affect height, padding, and font size.',
    },
    autoFocus: {
        control: 'boolean',
        description: 'If true, the textarea will automatically focus when the page loads.',
    },
    placeholder: {
        description: 'The placeholder text displayed when the select is empty.',
    },
};

Select.args = {
    showSelectedTags: true,
    searchable: true,
    sizing: 'md',
    placeholder: 'Placeholder',
    autoFocus: true,
};
