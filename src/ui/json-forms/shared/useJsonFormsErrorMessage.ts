import { useJsonForms } from '@jsonforms/react';
import { errorAt, validate, formatErrorMessage, defaultErrorTranslator, defaultTranslator } from '@jsonforms/core';
import cloneDeep from 'lodash/cloneDeep';
import set from 'lodash/set';

type Options = {
    defaultError: string;
    valueToValidate: unknown;
    path: string;
    onChangeStrategy?: 'input' | 'blur';
};

export const useJsonFormsErrorMessage = ({
    defaultError,
    valueToValidate,
    path,
    onChangeStrategy = 'input',
}: Options) => {
    const ctx = useJsonForms();

    if (!ctx.core) {
        throw new Error('Control should be rendered within JsonForms context');
    }

    const { validator, data, schema, uischema, validationMode } = ctx.core;

    if (validationMode === 'NoValidation' || validationMode === 'ValidateAndHide') {
        return null;
    }

    if (onChangeStrategy === 'input') {
        return defaultError;
    }

    // When the strategy is 'blur', we need to validate the field immediately.
    // This might be managed by validationStrategy configuration parameter in the future.
    if (onChangeStrategy === 'blur' && validator) {
        const newData = cloneDeep(data);
        set(newData, path, valueToValidate);

        const errors = validate(validator, newData);
        const fieldErrors = errorAt(path, schema)({ errors, data: newData, schema, uischema });

        return formatErrorMessage(fieldErrors.map(error => defaultErrorTranslator(error, defaultTranslator, uischema)));
    }

    return null;
};
