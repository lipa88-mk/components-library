import { usesReferences } from 'style-dictionary/utils';
import { replaceReferenceByCssVariable } from './helpers.mjs';

export const transformCssBoxShadow = (token, prefix) => {
    const tokenValue = token.original.$value;

    if (typeof tokenValue === 'string' && usesReferences(tokenValue)) {
        return replaceReferenceByCssVariable(tokenValue, prefix);
    }

    const shadow = Array.isArray(tokenValue) ? tokenValue : [tokenValue];

    const value = shadow.map(s => {
        const { x, y, blur, color, spread, type } = s;
        let result = `${type === 'innerShadow' ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}`;

        if (usesReferences(result)) {
            result = replaceReferenceByCssVariable(result, prefix);
        }
        return result;
    });

    return value.join(', ');
};
