import kebabCase from 'lodash/kebabCase.js';

export const replaceReferenceByCssVariable = (value, prefix) =>
    value.replace(/\{([a-zA-Z0-9.-]+)}/g, (match, p1) => {
        return `var(--${kebabCase(`${prefix}-${p1}`)})`;
    });

export const isBaseColor = token => token.$type === 'color' && token.attributes.category === 'base';
