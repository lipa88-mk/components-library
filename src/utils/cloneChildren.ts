import type { ReactNode } from 'react';
import React from 'react';

export function cloneChildren<P extends (Partial<unknown> & React.Attributes) | undefined>(children, props: P) {
    return React.Children.map<ReactNode, ReactNode>(children, child => {
        if (!React.isValidElement(child)) return null;

        return React.cloneElement(child, props);
    });
}
