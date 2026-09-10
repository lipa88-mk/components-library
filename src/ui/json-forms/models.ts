import type { ControlElement, ControlProps, JsonSchema, TesterContext, UISchemaElement } from '@jsonforms/core';
import type Ajv from 'ajv';
import type React from 'react';

export type OneOfOption = {
    /**
     * Text used as label on the option
     */
    title: string;

    /**
     * const is valid keyword on json-schema spec https://json-schema.org/understanding-json-schema/reference/const#light-scheme-icon
     *
     */
    const: unknown;
};

export interface BaseControlElementOptions {
    autoFocus?: boolean;
}

export interface ControlWithPlaceholderElementOptions extends BaseControlElementOptions {
    placeholder?: string;
}

export interface ControlWithFormatElementOptions extends BaseControlElementOptions {
    format?: string;
}

export type HorizontalAlignment = 'left' | 'center' | 'right';
export type VerticalAlignment = 'top' | 'center' | 'bottom';

export interface ControlWithTextAlignmentElementOptions extends BaseControlElementOptions {
    alignment?: HorizontalAlignment;
}

export interface LabelProps {
    text?: string;
}

export interface ControlWithLayoutElementOptions extends BaseControlElementOptions {
    layout?: 'vertical' | 'horizontal';
}

export interface InputControlElementOptions extends ControlWithPlaceholderElementOptions {
    maxLength?: number;
    inputSize?: number;
    sizing?: 'sm' | 'md';
    arrowButtons?: boolean;
    onChangeStrategy?: 'input' | 'blur';
    debounceMs?: number;
}

export type JSONFormsControlProps<TData, TOptions extends object, TConfig extends object = object> = Omit<
    ControlProps,
    'uischema' | 'config' | 'data' | 'handleChange'
> & {
    data: TData;
    config?: TConfig;
    uischema: Omit<ControlElement, 'options'> & {
        options?: TOptions;
    };
    handleChange(path: string, value: TData): void;
};

export type JSONFormsTester<TOptions extends object = object, TConfig extends object = object> = (
    uischema: Omit<UISchemaElement, 'options'> & {
        options?: Partial<TOptions>;
    },
    schema: JsonSchema,
    context: Omit<TesterContext, 'config'> & { config: TConfig }
) => boolean;

export interface AjvProps {
    ajv: Ajv;
}

export type UseJsonFormFieldDebounceValue = string | number | undefined;

export type UseJsonFormFieldDebouncedChangeOptions = {
    handleChange: (path: string, value: UseJsonFormFieldDebounceValue) => void;
    defaultValue?: UseJsonFormFieldDebounceValue;
    data: UseJsonFormFieldDebounceValue;
    path: string;
    eventToValue: (ev: React.ChangeEvent<HTMLInputElement>) => UseJsonFormFieldDebounceValue;
    timeout?: number;
    dataToInputValue?: (
        value: UseJsonFormFieldDebounceValue,
        inputValue: UseJsonFormFieldDebounceValue
    ) => UseJsonFormFieldDebounceValue;
};
