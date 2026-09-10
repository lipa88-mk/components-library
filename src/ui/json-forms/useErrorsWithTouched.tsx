import type { FC } from 'react';
import React, { useCallback, useState } from 'react';

export const useErrorsWithTouched = (errors: string, required?: boolean | undefined) => {
    const [touched, setTouched] = useState(false);
    const errorsWithTouched = touched ? errors : '';
    const isRequiredWithTouched = required && !!errorsWithTouched.length;
    const TouchedWrapper: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> =
        useCallback(
            ({ children, ...wrapperProps }) => (
                <div {...wrapperProps} onBlur={() => setTouched(true)}>
                    {children}
                </div>
            ),
            []
        );
    return { errorsWithTouched, TouchedWrapper, isRequiredWithTouched, isTouched: touched };
};
