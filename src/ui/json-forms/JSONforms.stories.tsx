import type { FC } from 'react';
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { JsonForms } from '@jsonforms/react';
import { cells, renderers } from './config';

const JSONForms: FC<any> = ({ schema, uischema, initialData }) => {
    const [data, setData] = useState(initialData);

    return (
        <JsonForms
            schema={schema}
            uischema={uischema}
            data={data}
            renderers={renderers}
            cells={cells}
            onChange={({ data }) => setData(data)}
        />
    );
};

// STORYBOOK
const meta: Meta<typeof JSONForms> = {
    title: 'JSONForms/JSONForms',
    component: JSONForms,
};
export default meta;
type Story = StoryObj<typeof JSONForms>;

export const Default: Story = {
    args: {
        schema: {
            type: 'object',
            properties: {
                string: {
                    type: 'string',
                },
                boolean: {
                    type: 'boolean',
                },
                number: {
                    type: 'number',
                },
                integer: {
                    type: 'integer',
                },
                date: {
                    type: 'string',
                    format: 'date',
                },
                time: {
                    type: 'string',
                    format: 'time',
                },
                dateTime: {
                    type: 'string',
                    format: 'date-time',
                },
                enumSelect: {
                    type: 'string',
                    enum: ['One', 'Two', 'Three'],
                },
                radioGroup1: {
                    type: 'string',
                    enum: ['One', 'Two', 'Three'],
                },
                radioGroup2: {
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
                enumMultiSelect: {
                    type: 'array',
                    uniqueItems: true,
                    items: {
                        type: 'string',
                        enum: [
                            'One',
                            'Two',
                            'Three',
                            'Lorem, ipsum dolor',
                            'Eligendi, quis. Quia',
                            'Blanditiis, voluptates magni',
                            'Cupiditate, impedit id',
                            'Toztam, corrupti! Obcaecati',
                            'Ipzsum, quas facere',
                            'Mozestiae, consequatur amet',
                            'Digznissimos, ad. Dolores',
                            'Coznsectetur, delectus ad',
                            'Ezx, fugit distinctio',
                            'Earzum, suscipit dignissimos',
                            'Voluzptas, quae voluptate',
                            'Sazepe, impedit quasi',
                            'Solzuta, minus totam',
                            'Eos, ezsse repellendus',
                            'Accuszamus, distinctio ab',
                            'Aq, blanditiis odio',
                            'Loqrem, ipsum dolor',
                            'Eligenqdi, quis. Quia',
                            'Blandiqtiis, voluptates magni',
                            'Cupiditqate, impedit id',
                            'Totam, cqorrupti! Obcaecati',
                            'Ipsum, qquas facere',
                            'Molestiqae, consequatur amet',
                            'Dignissimqos, ad. Dolores',
                            'Consectetqur, delectus ad',
                            'Ex, fugit dqstinctio',
                            'Earum, suscqipit dignissimos',
                            'Voluptas, qquae voluptate',
                            'Saepe, impqedit quasi',
                            'Soluta, miqnus totam',
                            'Eos, esse reqpellendus',
                            'Accusamus, dqistinctio ab',
                            'A, blandithiis odio',
                            'Lohrem, ipsum dolor',
                            'Eligenhdi, quis. Quia',
                            'Blandithiis, voluptates magni',
                            'Cupidithate, impedit id',
                            'Totam, chorrupti! Obcaecati',
                            'Ipsum, qhuas facere',
                            'Molestihae, consequatur amet',
                            'Dignissihmos, ad. Dolores',
                            'Consecthetur, delectus ad',
                            'Ex, fughit distinctio',
                            'Earum, suhscipit dignissimos',
                            'Voluptas, qhuae voluptate',
                            'Saepe, imphedit quasi',
                            'Soluta, mihnus totam',
                            'Eos, eshse repellendus',
                            'Accusahmus, distinctio ab',
                            'A, blhanditiis odio',
                            'Lorgem, ipsum dolor',
                            'Eligegndi, quis. Quia',
                            'Blanditgiis, voluptates magni',
                            'Cupiditgate, impedit id',
                            'Totam, cogrrupti! Obcaecati',
                            'Ipsum, qugas facere',
                            'Molestigae, consequatur amet',
                            'Dignissgimos, ad. Dolores',
                            'Consectgetur, delectus ad',
                            'Ex, fugit dgistinctio',
                            'Earum, suscgipit dignissimos',
                            'Voluptas, qguae voluptate',
                            'Saepe, impegdit quasi',
                            'Soluta, mingus totam',
                            'Eos, esse regpellendus',
                            'Accusamus, digstinctio ab',
                            'A, blanditigis odio',
                            'Lorem, ipsufm dolor',
                            'Eligendi, qufis. Quia',
                            'Blanditiis, volufptates magni',
                            'Cupiditate, impefdit id',
                            'Totam, corrupti! Obfcaecati',
                            'Ipsum, quas facefre',
                            'Molestiae, consefquatur amet',
                            'Dignissimos, ad. Doflores',
                            'Consectetur, delfectus ad',
                            'Ex, fugit difstinctio',
                            'Earum, suscifpit dignissimos',
                            'Voluptas, qufae voluptate',
                            'Saepe, impfedit quasi',
                            'Soluta, mifnus totam',
                            'Eos, esfse repellendus',
                            'Accusamfus, distinctio ab',
                            'A, blanditdiis odio',
                            'Lorem, ipsudm dolor',
                            'Eligendi, quids. Quia',
                            'Blanditiis, vodluptates magni',
                            'Cupiditate, imdpedit id',
                            'Totam, corrudpti! Obcaecati',
                            'Ipsum, quas fadcere',
                            'Molestiae, condsequatur amet',
                            'Dignissimos, add. Dolores',
                            'Consectetur, deldectus ad',
                            'Ex, fugit didstinctio',
                            'Earum, suscdipit dignissimos',
                            'Voluptas, qduae voluptate',
                            'Saepe, impdedit quasi',
                            'Soluta, midnus totam',
                            'Eos, esdse repellendus',
                            'Accudsamus, distinctio ab',
                            'A, blsanditiis odio',
                            'Losrem, ipsum dolor',
                            'Elsigendi, quis. Quia',
                            'Blasnditiis, voluptates magni',
                            'Cupsiditate, impedit id',
                            'Tostam, corrupti! Obcaecati',
                            'Ipssum, quas facere',
                            'Molesstiae, consequatur amet',
                            'Dignisssimos, ad. Dolores',
                            'Consecstetur, delectus ad',
                            'Ex, fugsit distinctio',
                            'Earsum, suscipit dignissimos',
                            'Volupstas, quae voluptate',
                            'Saepe, imspedit quasi',
                            'Soluta, misnus totam',
                            'Eos, essse repellendus',
                            'Accusasmus, distinctio ab',
                            'A, blaanditiis odio',
                            'Loarem, ipsum dolor',
                            'Eliagendi, quis. Quia',
                            'Blaanditiis, voluptates magni',
                            'Cupaiditate, impedit id',
                            'Toatam, corrupti! Obcaecati',
                            'Ipasum, quas facere',
                            'Molaaestiae, consequatur amet',
                            'Dignaissimos, ad. Dolores',
                            'Consaectetur, delectus ad',
                            'Eax, fugit distinctio',
                            'Eaarum, suscipit dignissimos',
                            'Volauptas, quae voluptate',
                            'Saeape, impedit quasi',
                            'Soluata, minus totam',
                            'Eos, esse repellendus',
                            'Accusamus, distinctio ab',
                            'A, blanduitiis odio',
                            'Lorem, ipsuum dolor',
                            'Eligendi, quuis. Quia',
                            'Blandiutiis, voluptates magni',
                            'Cupidiutate, impedit id',
                            'Totam, corruupti! Obcaecati',
                            'Ipsum, uquas facere',
                            'Molestiae, consequatuur amet',
                            'Dignissimos, ad. Doluores',
                            'Consectetur, delectuus ad',
                            'Ex, fugit dustinctio',
                            'Earum, susciupit dignissimos',
                            'Voluptas, quuae voluptate',
                            'Saepe, impuedit quasi',
                            'Soluta, miunus totam',
                            'Eos, esuse repellendus',
                            'Accusuamus, distinctio ab',
                            'A, blandiytiis odio',
                            'Lorem, ipsyum dolor',
                            'Eligendi, qyuis. Quia',
                            'Blanditiis, volyuptates magni',
                            'Cupiditate, impyedit id',
                            'Totam, corrupti! Obycaecati',
                            'Ipsum, quas facyere',
                            'Molestiae, consequyatur amet',
                            'Dignissimos, ad. Doylores',
                            'Consectetur, delyectus ad',
                            'Ex, fugit distincytio',
                            'Earum, suscipit diygnissimos',
                            'Voluptas, quae volyuptate',
                            'Saepe, impedit quyasi',
                            'Soluta, minus totyam',
                            'Eos, esse repyellendus',
                            'Accusamus, disytinctio ab',
                            'A, blandityiis odio',
                            'Lorem, ipstum dolor',
                            'Eligendi, qtuis. Quia',
                            'Blanditiis, volutptates magni',
                            'Cupiditate, imptedit id',
                            'Totam, cortrupti! Obcaecati',
                            'Ipsum, qtuas facere',
                            'Molesttiae, consequatur amet',
                            'Dignisstimos, ad. Dolores',
                            'Consectettur, delectus ad',
                            'Ex, fugit ditstinctio',
                            'Earum, susctipit dignissimos',
                            'Voluptas, qtuae voluptate',
                            'Saepe, itmpedit quasi',
                            'Soluta, tminus totam',
                            'Eos, esste repellendus',
                            'Accusamust, distinctio ab',
                            'A, blandittiis odio',
                            'Lorrem, ipsum dolor',
                            'Elirgendi, quis. Quia',
                            'Blranditiis, voluptates magni',
                            'Curpiditate, impedit id',
                            'Torrtam, corrupti! Obcaecati',
                            'Ipsrum, quas facere',
                            'Molrestiae, consequatur amet',
                            'Dignrissimos, ad. Dolores',
                            'Cornsectetur, delectus ad',
                            'Erx, fugit distinctio',
                            'Earrum, suscipit dignissimos',
                            'Vorluptas, quae voluptate',
                            'Sarepe, impedit quasi',
                            'Soeluta, minus totam',
                            'Eoes, esse repellendus',
                            'Accuesamus, distinctio ab',
                            'A, blandeitiis odio',
                            'Lorem, ipsum doleor',
                            'Eligendi, quise. Quia',
                            'Blanditiis, volueptates magni',
                            'Cupiditate, impeedit id',
                            'Totam, corrupti! Oebcaecati',
                            'Ipsum, quas faceere',
                            'Molestiae, conseequatur amet',
                            'Dignissimos, ad.e Dolores',
                            'Consectetur, deelectus ad',
                            'Ex, fugit diestinctio',
                            'Earum, susciepit dignissimos',
                            'Voluptas, queae voluptate',
                            'Saepe, impedeit quasi',
                            'Soluta, mineus totam',
                            'Eos, esse reepellendus',
                            'Accusamus, diestinctio ab',
                            'A, blanditiies odio',
                        ],
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
                            {
                                const: 'four',
                                title: 'Four',
                            },
                        ],
                    },
                },
                checkboxList1: {
                    type: 'array',
                    uniqueItems: true,
                    items: {
                        type: 'string',
                        enum: ['One', 'Two', 'Three'],
                    },
                },
                checkboxList2: {
                    type: 'array',
                    uniqueItems: true,
                    items: {
                        type: 'string',
                        enum: ['One', 'Two', 'Three'],
                    },
                },
            },
        },
        uischema: {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/string',
                    label: 'This is string',
                    options: {
                        sizing: 'sm',
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/boolean',
                    label: 'This is boolean',
                },
                {
                    type: 'Group',
                    label: 'Numeric renderers:',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/number',
                                    label: 'This is number',
                                    options: {
                                        sizing: 'sm',
                                    },
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/integer',
                                    label: 'This is integer',
                                    options: {
                                        sizing: 'sm',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'Group',
                    label: 'Date and time renderers:',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/date',
                                    label: 'This is date',
                                    options: {
                                        sizing: 'sm',
                                    },
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/time',
                                    label: 'This is time',
                                    options: {
                                        sizing: 'sm',
                                    },
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/dateTime',
                                    label: 'This is dateTime',
                                    options: {
                                        sizing: 'sm',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'Group',
                    label: 'Select renderers:',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/enumSelect',
                                    label: 'This is enum select',
                                    options: {
                                        placeholder: 'Search',
                                        sizing: 'sm',
                                    },
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/oneOfSelect',
                                    label: 'This is oneOf select',
                                    options: {
                                        placeholder: 'Search',
                                        sizing: 'sm',
                                    },
                                },
                            ],
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/radioGroup1',
                                    label: 'This is vertical Radio Group:',
                                    options: {
                                        format: 'radio',
                                        layout: 'vertical',
                                    },
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/radioGroup2',
                                    label: 'This is horizontal Radio Group:',
                                    options: {
                                        format: 'radio',
                                        layout: 'horizontal',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'Group',
                    label: 'MutliSelect renderers:',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/enumMultiSelect',
                                    label: 'This is enum multiselect',
                                    options: {
                                        placeholder: 'Search',
                                        sizing: 'sm',
                                    },
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/oneOfMultiSelect',
                                    label: 'This is oneOf multiselect',
                                    options: {
                                        placeholder: 'Search',
                                        sizing: 'sm',
                                    },
                                },
                            ],
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/checkboxList1',
                                    label: 'This is vertical checkboxList',
                                    options: {
                                        format: 'checkbox',
                                        layout: 'vertical',
                                    },
                                },

                                {
                                    type: 'Control',
                                    scope: '#/properties/checkboxList2',
                                    label: 'This is horizontal checkboxList',
                                    options: {
                                        format: 'checkbox',
                                        layout: 'horizontal',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        initialData: {
            string: 'This is a string',
            boolean: true,
            number: 50.4,
            integer: 10,
            date: '2020-06-25',
            time: '23:08:51',
            dateTime: '2020-06-25T23:08:42+02:00',
            enumSelect: 'Two',
            oneOfSelect: 'two',
            enumMultiSelect: ['Two', 'Three'],
            oneOfMultiSelect: ['two', 'three'],
        },
    },
};

export const WithErrors: Story = {
    args: {
        schema: {
            type: 'object',
            properties: {
                string: {
                    type: 'string',
                    minLength: 20,
                },
                boolean: {
                    type: 'boolean',
                },
                number: {
                    type: 'number',
                    minimum: 100.1,
                },
                integer: {
                    type: 'integer',
                    maximum: 9,
                },
                date: {
                    type: 'string',
                    format: 'date',
                },
                time: {
                    type: 'string',
                    format: 'time',
                },
                dateTime: {
                    type: 'string',
                    format: 'date-time',
                },
                enumSelect: {
                    type: 'string',
                    enum: ['One', 'Two', 'Three'],
                },
                radioGroup: {
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
                            {
                                const: 'four',
                                title: 'Four',
                            },
                        ],
                    },
                },
                checkboxList: {
                    type: 'array',
                    uniqueItems: true,
                    items: {
                        type: 'string',
                        enum: ['One', 'Two', 'Three'],
                    },
                },
            },
            required: [
                'boolean',
                'string',
                'number',
                'integer',
                'date',
                'time',
                'dateTime',
                'enumSelect',
                'oneOfSelect',
                'enumMultiSelect',
                'oneOfMultiSelect',
                'radioGroup',
                'checkboxList',
            ],
        },
        uischema: {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/string',
                    label: 'This is string',
                },
                {
                    type: 'Control',
                    scope: '#/properties/boolean',
                    label: 'This is boolean',
                },
                {
                    type: 'Group',
                    label: 'Numeric renderers:',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/number',
                                    label: 'This is number',
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/integer',
                                    label: 'This is integer',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'Group',
                    label: 'Date and time renderers:',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/date',
                                    label: 'This is date',
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/time',
                                    label: 'This is time',
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/dateTime',
                                    label: 'This is dateTime',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'Group',
                    label: 'Select renderers:',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/enumSelect',
                                    label: 'This is enum select',
                                    options: {
                                        placeholder: 'Search',
                                    },
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/oneOfSelect',
                                    label: 'This is oneOf select',
                                    options: {
                                        placeholder: 'Search',
                                    },
                                },
                            ],
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/radioGroup',
                                    label: 'This is  Radio Group:',
                                    options: {
                                        format: 'radio',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'Group',
                    label: 'MutliSelect renderers:',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/enumMultiSelect',
                                    label: 'This is enum multiselect',
                                    options: {
                                        placeholder: 'Search',
                                    },
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/oneOfMultiSelect',
                                    label: 'This is oneOf multiselect',
                                    options: {
                                        placeholder: 'Search',
                                    },
                                },
                            ],
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/checkboxList',
                                    label: 'This is checkboxList',
                                    options: {
                                        format: 'checkbox',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        initialData: {
            string: undefined,
            boolean: undefined,
            number: undefined,
            integer: undefined,
            date: undefined,
            time: undefined,
            dateTime: undefined,
            enumSelect: undefined,
            oneOfSelect: undefined,
            enumMultiSelect: undefined,
            oneOfMultiSelect: undefined,
            radioGroup: undefined,
            checkboxList: undefined,
        },
    },
};

export const GroupWithoutLabels: Story = {
    args: {
        schema: {
            type: 'object',
            title: 'XL',
            properties: {
                name_0: {
                    type: 'string',
                },
                name_1: {
                    type: 'string',
                },
                name_2: {
                    type: 'string',
                },
                name_3: {
                    type: 'string',
                },
                name_4: {
                    type: 'string',
                },
                name_5: {
                    type: 'string',
                },
                name_6: {
                    type: 'string',
                },
                limit_0: {
                    type: 'number',
                    minimum: 0,
                },
                limit_1: {
                    type: 'number',
                    minimum: 0,
                },
                limit_2: {
                    type: 'number',
                    minimum: 0,
                },
                limit_3: {
                    type: 'number',
                    minimum: 0,
                },
                limit_4: {
                    type: 'number',
                    minimum: 0,
                },
                limit_5: {
                    type: 'number',
                    minimum: 0,
                },
                limit_6: {
                    type: 'number',
                    minimum: 0,
                },
                deductible_0: {
                    type: 'number',
                    minimum: 0,
                },
                deductible_1: {
                    type: 'number',
                    minimum: 0,
                },
                deductible_2: {
                    type: 'number',
                    minimum: 0,
                },
                deductible_3: {
                    type: 'number',
                    minimum: 0,
                },
                deductible_4: {
                    type: 'number',
                    minimum: 0,
                },
                deductible_5: {
                    type: 'number',
                    minimum: 0,
                },
                deductible_6: {
                    type: 'number',
                    minimum: 0,
                },
                aad_0: {
                    type: 'number',
                    minimum: 0,
                },
                aad_1: {
                    type: 'number',
                    minimum: 0,
                },
                aad_2: {
                    type: 'number',
                    minimum: 0,
                },
                aad_3: {
                    type: 'number',
                    minimum: 0,
                },
                aad_4: {
                    type: 'number',
                    minimum: 0,
                },
                aad_5: {
                    type: 'number',
                    minimum: 0,
                },
                aad_6: {
                    type: 'number',
                    minimum: 0,
                },
                aal_0: {
                    type: 'number',
                    minimum: 0,
                },
                aal_1: {
                    type: 'number',
                    minimum: 0,
                },
                aal_2: {
                    type: 'number',
                    minimum: 0,
                },
                aal_3: {
                    type: 'number',
                    minimum: 0,
                },
                aal_4: {
                    type: 'number',
                    minimum: 0,
                },
                aal_5: {
                    type: 'number',
                    minimum: 0,
                },
                aal_6: {
                    type: 'number',
                    minimum: 0,
                },
            },
        },
        uischema: {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Label',
                            text: 'Name',
                            options: {
                                alignment: 'right',
                            },
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/name_0',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/name_1',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/name_2',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/name_3',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/name_4',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/name_5',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/name_6',
                            label: false,
                        },
                    ],
                },
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Label',
                            text: 'Limit',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/limit_0',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/limit_1',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/limit_2',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/limit_3',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/limit_4',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/limit_5',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/limit_6',
                            label: false,
                        },
                    ],
                },
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Label',
                            text: 'Deductible',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/deductible_0',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/deductible_1',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/deductible_2',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/deductible_3',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/deductible_4',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/deductible_5',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/deductible_6',
                            label: false,
                        },
                    ],
                },
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Label',
                            text: 'AAD',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aad_0',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aad_1',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aad_2',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aad_3',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aad_4',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aad_5',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aad_6',
                            label: false,
                        },
                    ],
                },
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Label',
                            text: 'AAL',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aal_0',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aal_1',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aal_2',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aal_3',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aal_4',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aal_5',
                            label: false,
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/aal_6',
                            label: false,
                        },
                    ],
                },
            ],
        },
        initialData: null,
    },
};

export const TextRenderer: Story = {
    args: {
        schema: {
            type: 'object',
            properties: {
                label: {
                    type: 'string',
                },
                input: {
                    type: 'number',
                },
            },
        },
        uischema: {
            type: 'VerticalLayout',
            elements: [
                ['left', 'top'],
                ['left', 'center'],
                ['left', 'bottom'],
                ['center', 'top'],
                ['center', 'center'],
                ['center', 'bottom'],
                ['right', 'top'],
                ['right', 'center'],
                ['right', 'right'],
            ].map(([alignment, verticalAlignment]) => ({
                type: 'HorizontalLayout',
                elements: [
                    {
                        type: 'Control',
                        scope: '#/properties/label',
                        label: `Label align (${alignment} / ${verticalAlignment})`,
                        options: {
                            alignment,
                            verticalAlignment,
                            viewOnly: true,
                        },
                    },
                    {
                        type: 'Control',
                        scope: '#/properties/input',
                        label: false,
                    },
                ],
            })),
        },
        initialData: null,
    },
};

export const FieldsWithAlignment: Story = {
    args: {
        schema: {
            type: 'object',
            properties: {
                string: {
                    type: 'string',
                },
                number: {
                    type: 'number',
                },
                integer: {
                    type: 'integer',
                },
            },
        },
        uischema: {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/string',
                            label: 'This is string',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/number',
                            label: 'This is number',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/integer',
                            label: 'This is integer',
                        },
                    ],
                },
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/string',
                            label: 'This is string',
                            options: {
                                alignment: 'right',
                            },
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/number',
                            label: 'This is number',
                            options: {
                                alignment: 'right',
                            },
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/integer',
                            label: 'This is integer',
                            options: {
                                alignment: 'right',
                            },
                        },
                    ],
                },
            ],
        },
        initialData: {
            string: 'This is a string',
            number: 50.4,
            integer: 10,
        },
    },
};

export const MultiSelectWithoutTags: Story = {
    args: {
        schema: {
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
                            {
                                const: 'four',
                                title: 'Four',
                            },
                        ],
                    },
                },
            },
        },
        uischema: {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/enumMultiSelect',
                    label: 'enumMultiSelect',
                    options: {
                        showSelectedTags: false,
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/oneOfMultiSelect',
                    label: 'oneOfMultiSelect',
                    options: {
                        showSelectedTags: false,
                    },
                },
            ],
        },
        initialData: {
            enumMultiSelect: ['One', 'Two'],
            oneOfMultiSelect: ['one', 'two'],
        },
    },
};

export const ExpandGroups: Story = {
    args: {
        schema: {
            type: 'object',
            properties: {
                number: {
                    type: 'number',
                },
                integer: {
                    type: 'integer',
                },
                date: {
                    type: 'string',
                    format: 'date',
                },
                time: {
                    type: 'string',
                    format: 'time',
                },
                dateTime: {
                    type: 'string',
                    format: 'date-time',
                },
                enumSelect: {
                    type: 'string',
                    enum: ['One', 'Two', 'Three'],
                },
                radioGroup1: {
                    type: 'string',
                    enum: ['One', 'Two', 'Three'],
                },
                radioGroup2: {
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
                            {
                                const: 'four',
                                title: 'Four',
                            },
                        ],
                    },
                },
                checkboxList1: {
                    type: 'array',
                    uniqueItems: true,
                    items: {
                        type: 'string',
                        enum: ['One', 'Two', 'Three'],
                    },
                },
                checkboxList2: {
                    type: 'array',
                    uniqueItems: true,
                    items: {
                        type: 'string',
                        enum: ['One', 'Two', 'Three'],
                    },
                },
            },
        },
        uischema: {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'Group',
                    options: {
                        expand: true,
                        isOpen: true,
                        padding: '0',
                    },
                    label: 'Numeric renderers:',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/number',
                                    label: 'This is number',
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/integer',
                                    label: 'This is integer',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'Group',
                    options: {
                        // expand: true,
                        // isOpen: true
                    },
                    label: 'Date and time renderers:',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            options: {
                                padding: '0 8px',
                            },
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/date',
                                    label: 'This is date',
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/time',
                                    label: 'This is time',
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/dateTime',
                                    label: 'This is dateTime',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'Group',
                    options: {
                        expand: true,
                        isOpen: true,
                    },
                    label: 'Select renderers:',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/enumSelect',
                                    label: 'This is enum select',
                                    options: {
                                        placeholder: 'Search',
                                    },
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/oneOfSelect',
                                    label: 'This is oneOf select',
                                    options: {
                                        placeholder: 'Search',
                                    },
                                },
                            ],
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/radioGroup1',
                                    label: 'This is vertical Radio Group:',
                                    options: {
                                        format: 'radio',
                                        layout: 'vertical',
                                    },
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/radioGroup2',
                                    label: 'This is horizontal Radio Group:',
                                    options: {
                                        format: 'radio',
                                        layout: 'horizontal',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'Group',
                    options: {
                        expand: true,
                    },
                    label: 'MutliSelect renderers:',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/enumMultiSelect',
                                    label: 'This is enum multiselect',
                                    options: {
                                        placeholder: 'Search',
                                    },
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/oneOfMultiSelect',
                                    label: 'This is oneOf multiselect',
                                    options: {
                                        placeholder: 'Search',
                                    },
                                },
                            ],
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/checkboxList1',
                                    label: 'This is vertical checkboxList',
                                    options: {
                                        format: 'checkbox',
                                        layout: 'vertical',
                                    },
                                },

                                {
                                    type: 'Control',
                                    scope: '#/properties/checkboxList2',
                                    label: 'This is horizontal checkboxList',
                                    options: {
                                        format: 'checkbox',
                                        layout: 'horizontal',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        initialData: {
            number: 50.4,
            integer: 10,
            date: '2020-06-25',
            time: '23:08:51',
            dateTime: '2020-06-25T23:08:42+02:00',
            enumSelect: 'Two',
            oneOfSelect: 'two',
            enumMultiSelect: ['Two', 'Three'],
            oneOfMultiSelect: ['two', 'three'],
        },
    },
};

export const CondensedFields: Story = {
    args: {
        schema: {
            type: 'object',
            properties: {
                string: {
                    type: 'string',
                },

                number: {
                    type: 'number',
                },
                integer: {
                    type: 'integer',
                },
                date: {
                    type: 'string',
                    format: 'date',
                },
                time: {
                    type: 'string',
                    format: 'time',
                },
                dateTime: {
                    type: 'string',
                    format: 'date-time',
                },
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
                            {
                                const: 'four',
                                title: 'Four',
                            },
                        ],
                    },
                },
            },
        },
        uischema: {
            type: 'VerticalLayout',
            options: {
                rowGap: 10,
            },
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/string',
                    label: 'This is string',
                    options: {
                        sizing: 'sm',
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/number',
                    label: 'This is number',
                    options: {
                        sizing: 'sm',
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/integer',
                    label: 'This is integer',
                    options: {
                        sizing: 'sm',
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/date',
                    label: 'This is date',
                    options: {
                        sizing: 'sm',
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/time',
                    label: 'This is time',
                    options: {
                        sizing: 'sm',
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/dateTime',
                    label: 'This is dateTime',
                    options: {
                        sizing: 'sm',
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/enumSelect',
                    label: 'This is enum select',
                    options: {
                        placeholder: 'Search',
                        sizing: 'sm',
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/oneOfSelect',
                    label: 'This is oneOf select',
                    options: {
                        placeholder: 'Search',
                        sizing: 'sm',
                    },
                },

                {
                    type: 'Control',
                    scope: '#/properties/enumMultiSelect',
                    label: 'This is enum multiselect',
                    options: {
                        placeholder: 'Search',
                        sizing: 'sm',
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/oneOfMultiSelect',
                    label: 'This is oneOf multiselect',
                    options: {
                        placeholder: 'Search',
                        sizing: 'sm',
                    },
                },
            ],
        },
        initialData: {
            string: 'This is a string',
            boolean: true,
            number: 50.4,
            integer: 10,
            date: '2020-06-25',
            time: '23:08:51',
            dateTime: '2020-06-25T23:08:42+02:00',
            enumSelect: 'Two',
            oneOfSelect: 'two',
            enumMultiSelect: ['Two', 'Three'],
            oneOfMultiSelect: ['two', 'three'],
        },
    },
};

export const Rules: Story = {
    args: {
        schema: {
            type: 'object',
            properties: {
                boolean: {
                    type: 'boolean',
                },
                number: {
                    type: 'number',
                },
                integer: {
                    type: 'integer',
                },
                date: {
                    type: 'string',
                    format: 'date',
                },

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
        },
        uischema: {
            type: 'VerticalLayout',
            options: {
                rowGap: 10,
            },
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/boolean',
                    label: 'Disables number fields if checked',
                },
                {
                    type: 'Control',
                    scope: '#/properties/number',
                    label: 'This is number',
                    options: {
                        sizing: 'sm',
                    },
                    rule: {
                        effect: 'DISABLE',
                        condition: {
                            scope: '#/properties/boolean',
                            schema: { const: true },
                        },
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/integer',
                    label: 'Hides date field if = 11',
                    options: {
                        sizing: 'sm',
                    },
                    rule: {
                        effect: 'DISABLE',
                        condition: {
                            scope: '#/properties/boolean',
                            schema: { const: true },
                        },
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/date',
                    label: 'Date is hidden if integer = 11',
                    options: {
                        sizing: 'sm',
                    },
                    rule: {
                        effect: 'HIDE',
                        condition: {
                            scope: '#/properties/integer',
                            schema: { const: 11 },
                        },
                    },
                },

                {
                    type: 'Control',
                    scope: '#/properties/enumSelect',
                    label: 'Next control is visible if first option selected',
                    options: {
                        placeholder: 'Search',
                        sizing: 'sm',
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/oneOfSelect',
                    label: 'HERE I AM! :)',
                    options: {
                        placeholder: 'Search',
                        sizing: 'sm',
                    },
                    rule: {
                        effect: 'SHOW',
                        condition: {
                            scope: '#/properties/enumSelect',
                            schema: { enum: ['One'] },
                        },
                    },
                },
            ],
        },
        initialData: {
            boolean: true,
            number: 50.4,
            integer: 10,
            date: '2020-06-25',
            enumSelect: 'Two',
            oneOfSelect: 'two',
        },
    },
};
