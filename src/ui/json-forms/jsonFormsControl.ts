import type { ComponentType } from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import type { JSONFormsControlProps } from './models';
import type { ControlProps } from '@jsonforms/core';

/**
 * The purpose of this wrapper is to provide strong typing support to JSONForms
 */
export const jsonFormsControl = <TData, TOptions extends object>(
    Component: ComponentType<JSONFormsControlProps<TData, TOptions>>
) => withJsonFormsControlProps(Component as ComponentType<ControlProps>);
