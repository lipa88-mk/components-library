import type { FC, ReactNode } from 'react';
import React, { Children } from 'react';
import { classes } from '../../utils';
import type { ButtonGroupSwitchProps } from './models';
import { buttonGroupSwitchVariants } from './variants';

const ButtonGroupSwitch: FC<ButtonGroupSwitchProps> = ({
    fullWidth = false,
    edges = 'round',
    coloring = 'default',
    children,
    orientation = 'horizontal',
}) => {
    const elementsLength = Children.count(children);

    const variants = buttonGroupSwitchVariants({
        fullWidth,
        orientation,
        edges,
        coloring,
    });

    return (
        <div
            data-testid="button-group"
            className={classes(variants.container())}
            role="group"
            aria-label="Basic button group."
        >
            {Children.map<ReactNode, ReactNode>(children, child => {
                if (!React.isValidElement(child)) return null;
                if (elementsLength === 1) {
                    return React.cloneElement(child, child.props);
                }

                return React.cloneElement(child, {
                    coloring,
                    ...child.props,
                    className: classes(child.props.className, variants.button()),
                });
            })}
        </div>
    );
};

export default ButtonGroupSwitch;
