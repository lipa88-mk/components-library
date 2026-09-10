import { usesReferences } from 'style-dictionary/utils';
import { replaceReferenceByCssVariable } from './helpers.mjs';

const transformDarkenOrLightenModifier = (token, prefix) => {
    const modifier = token.original.$extensions['studio.tokens'].modify;
    let tokenValue = token.original.$value;
    let modifierValue = modifier.value;

    const colorMap = {
        lighten: 'white',
        darken: 'black',
    };

    if (usesReferences(modifierValue)) {
        modifierValue = replaceReferenceByCssVariable(modifierValue, prefix);
    }

    if (usesReferences(tokenValue)) {
        tokenValue = replaceReferenceByCssVariable(tokenValue, prefix);
    }

    return `color-mix(in ${modifier.space}, ${tokenValue}, ${colorMap[modifier.type]} calc(${modifierValue} * 100%))`;
};

const transformAlphaModifier = (token, prefix) => {
    const modifier = token.original.$extensions['studio.tokens'].modify;
    let tokenValue = token.original.$value;
    let modifierValue = modifier.value;

    if (usesReferences(tokenValue)) {
        tokenValue = replaceReferenceByCssVariable(tokenValue, prefix);
    }

    if (usesReferences(modifierValue)) {
        modifierValue = replaceReferenceByCssVariable(modifierValue, prefix);
    }

    return `color-mix(in ${modifier.space}, ${tokenValue}, transparent calc(${1 - modifierValue} * 100%))`;
};

export const transformCssColor = (token, prefix) => {
    const modifier = token.original.$extensions?.['studio.tokens']?.modify;
    const tokenValue = token.original.$value;

    if (modifier?.value) {
        switch (modifier.type) {
            case 'lighten':
                return transformDarkenOrLightenModifier(token, prefix);
            case 'darken':
                return transformDarkenOrLightenModifier(token, prefix);
            case 'alpha':
                return transformAlphaModifier(token, prefix);
            default:
                throw new Error(`The ${modifier.type} modifier does not supported`);
        }
    }

    if (usesReferences(tokenValue)) {
        return replaceReferenceByCssVariable(tokenValue, prefix);
    }

    return tokenValue;
};
