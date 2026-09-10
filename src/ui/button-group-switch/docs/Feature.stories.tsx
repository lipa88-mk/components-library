import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { ButtonGroupSwitchProps } from '../models';
import ButtonGroupSwitch from '../ButtonGroupSwitch';
import { args, argTypes } from './config';
import { Button } from '../../button';
import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { Tooltip } from '../../tooltip';

const meta: Meta<typeof ButtonGroupSwitch> = {
    title: 'Components/Buttons/ButtonGroupSwitch/Features',
    tags: ['!autodocs'],
    component: ButtonGroupSwitch,
    args,
    argTypes,
};

export default meta;

export const Primary: StoryFn<ButtonGroupSwitchProps> = props => (
    <ButtonGroupSwitch {...props}>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary active={true}>active</Button.Primary>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary coloring="success">success</Button.Primary>
        <Button.Primary disabled>disabled</Button.Primary>
    </ButtonGroupSwitch>
);
Primary.parameters = {};

export const Secondary: StoryFn<ButtonGroupSwitchProps> = props => (
    <ButtonGroupSwitch {...props}>
        <Button.Secondary>Btn</Button.Secondary>
        <Button.Secondary active={true}>active</Button.Secondary>
        <Button.Secondary>Button</Button.Secondary>
        <Button.Secondary>Button long</Button.Secondary>
        <Button.Secondary coloring="success">success</Button.Secondary>
        <Button.Secondary>Button</Button.Secondary>
        <Button.Secondary disabled>disabled</Button.Secondary>
    </ButtonGroupSwitch>
);
Secondary.parameters = {};

export const Tertiary: StoryFn<ButtonGroupSwitchProps> = props => (
    <ButtonGroupSwitch {...props}>
        <Button.Tertiary>Button</Button.Tertiary>
        <Button.Tertiary active={true}>active</Button.Tertiary>
        <Button.Tertiary>Button</Button.Tertiary>
        <Button.Tertiary>Button</Button.Tertiary>
        <Button.Tertiary coloring="success">success</Button.Tertiary>
        <Button.Tertiary>Button</Button.Tertiary>
        <Button.Tertiary disabled>disabled</Button.Tertiary>
    </ButtonGroupSwitch>
);
Tertiary.parameters = {};

export const Ghost: StoryFn<ButtonGroupSwitchProps> = props => (
    <ButtonGroupSwitch {...props}>
        <Button.Ghost>Button</Button.Ghost>
        <Button.Ghost active={true}>active</Button.Ghost>
        <Button.Ghost>Button</Button.Ghost>
        <Button.Ghost>Button</Button.Ghost>
        <Button.Ghost coloring="success">success</Button.Ghost>
        <Button.Ghost>Button</Button.Ghost>
        <Button.Ghost disabled>disabled</Button.Ghost>
    </ButtonGroupSwitch>
);
Ghost.parameters = {};

export const FullWidth: StoryFn<ButtonGroupSwitchProps> = props => (
    <ButtonGroupSwitch {...props}>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary>Button</Button.Primary>
    </ButtonGroupSwitch>
);
FullWidth.args = {
    fullWidth: true,
};
FullWidth.parameters = {
    controls: { include: ['fullWidth'] },
};

export const Orientation: StoryFn<ButtonGroupSwitchProps> = props => (
    <ButtonGroupSwitch {...props}>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary>Button</Button.Primary>
    </ButtonGroupSwitch>
);
Orientation.args = {
    orientation: 'vertical',
};
Orientation.parameters = {
    controls: { include: ['orientation'] },
};

export const Edges: StoryFn<ButtonGroupSwitchProps> = props => (
    <ButtonGroupSwitch {...props}>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary>Button</Button.Primary>
    </ButtonGroupSwitch>
);
Edges.args = {
    edges: 'rectangular',
};
Edges.parameters = {
    controls: { include: ['edges'] },
};

export const Coloring: StoryFn<ButtonGroupSwitchProps> = props => (
    <ButtonGroupSwitch {...props}>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary>Button</Button.Primary>
        <Button.Primary>Button</Button.Primary>
    </ButtonGroupSwitch>
);
Coloring.args = {
    coloring: 'warning',
};
Coloring.parameters = {
    controls: { include: ['coloring'] },
};

export const IconOnly: StoryFn<ButtonGroupSwitchProps> = props => (
    <div className="grid grid-rows-4 gap-10">
        <ButtonGroupSwitch {...props}>
            <Button.Primary Icon={EnvelopeIcon}></Button.Primary>
            <Button.Primary active={true} Icon={EnvelopeIcon}></Button.Primary>
            <Button.Primary Icon={EnvelopeIcon}></Button.Primary>
            <Button.Primary Icon={EnvelopeIcon}></Button.Primary>
            <Button.Primary Icon={EnvelopeIcon}></Button.Primary>
        </ButtonGroupSwitch>

        <ButtonGroupSwitch {...props}>
            <Button.Secondary Icon={EnvelopeIcon}></Button.Secondary>
            <Button.Secondary active={true} Icon={EnvelopeIcon}></Button.Secondary>
            <Button.Secondary Icon={EnvelopeIcon}></Button.Secondary>
            <Button.Secondary Icon={EnvelopeIcon}></Button.Secondary>
            <Button.Secondary Icon={EnvelopeIcon}></Button.Secondary>
        </ButtonGroupSwitch>

        <ButtonGroupSwitch {...props}>
            <Button.Tertiary Icon={EnvelopeIcon}></Button.Tertiary>
            <Button.Tertiary active={true} Icon={EnvelopeIcon}></Button.Tertiary>
            <Button.Tertiary Icon={EnvelopeIcon}></Button.Tertiary>
            <Button.Tertiary Icon={EnvelopeIcon}></Button.Tertiary>
            <Button.Tertiary Icon={EnvelopeIcon}></Button.Tertiary>
        </ButtonGroupSwitch>

        <ButtonGroupSwitch {...props}>
            <Button.Ghost Icon={EnvelopeIcon}></Button.Ghost>
            <Button.Ghost active={true} Icon={EnvelopeIcon}></Button.Ghost>
            <Button.Ghost Icon={EnvelopeIcon}></Button.Ghost>
            <Button.Ghost Icon={EnvelopeIcon}></Button.Ghost>
            <Button.Ghost Icon={EnvelopeIcon}></Button.Ghost>
        </ButtonGroupSwitch>
    </div>
);
IconOnly.parameters = {};

export const WithInnerAlignment: StoryFn<ButtonGroupSwitchProps> = props => (
    <div className="flex flex-col items-start gap-10">
        <ButtonGroupSwitch {...props}>
            <Button.Primary innerAlignment="left" Icon={EnvelopeIcon}>
                innerAlignment: left
            </Button.Primary>
            <Button.Primary innerAlignment="left" active={true} Icon={EnvelopeIcon}>
                innerAlignment: left
            </Button.Primary>
            <Button.Primary innerAlignment="left" Icon={EnvelopeIcon}>
                innerAlignment: left
            </Button.Primary>
            <Button.Primary innerAlignment="left" Icon={EnvelopeIcon}>
                innerAlignment: left
            </Button.Primary>
            <Button.Primary innerAlignment="left" Icon={EnvelopeIcon}>
                innerAlignment: left
            </Button.Primary>
        </ButtonGroupSwitch>

        <ButtonGroupSwitch {...props}>
            <Button.Secondary Icon={EnvelopeIcon}>innerAlignment: center</Button.Secondary>
            <Button.Secondary active={true} Icon={EnvelopeIcon}>
                innerAlignment: center
            </Button.Secondary>
            <Button.Secondary Icon={EnvelopeIcon}>innerAlignment: center</Button.Secondary>
            <Button.Secondary Icon={EnvelopeIcon}>innerAlignment: center</Button.Secondary>
            <Button.Secondary Icon={EnvelopeIcon}>innerAlignment: center</Button.Secondary>
        </ButtonGroupSwitch>

        <ButtonGroupSwitch {...props}>
            <Button.Tertiary innerAlignment="right" Icon={EnvelopeIcon}>
                innerAlignment: right
            </Button.Tertiary>
            <Button.Tertiary innerAlignment="right" active={true} Icon={EnvelopeIcon}>
                innerAlignment: right
            </Button.Tertiary>
            <Button.Tertiary innerAlignment="right" Icon={EnvelopeIcon}>
                innerAlignment: right
            </Button.Tertiary>
            <Button.Tertiary innerAlignment="right" Icon={EnvelopeIcon}>
                innerAlignment: right
            </Button.Tertiary>
            <Button.Tertiary innerAlignment="right" Icon={EnvelopeIcon}>
                innerAlignment: right
            </Button.Tertiary>
        </ButtonGroupSwitch>
    </div>
);
WithInnerAlignment.parameters = {
    controls: {
        include: ['fullWidth', 'orientation'],
    },
};
WithInnerAlignment.args = {
    fullWidth: true,
};

export const WithIconPosition: StoryFn<ButtonGroupSwitchProps> = props => (
    <div className="flex flex-col items-start gap-10">
        <ButtonGroupSwitch {...props}>
            <Button.Primary iconPosition="top" Icon={EnvelopeIcon}>
                Button
            </Button.Primary>
            <Button.Primary iconPosition="top" active={true} Icon={EnvelopeIcon}>
                Button
            </Button.Primary>
            <Button.Primary iconPosition="top" Icon={EnvelopeIcon}>
                Button
            </Button.Primary>
        </ButtonGroupSwitch>

        <ButtonGroupSwitch {...props}>
            <Button.Secondary iconPosition="bottom" Icon={EnvelopeIcon}>
                Button
            </Button.Secondary>
            <Button.Secondary iconPosition="bottom" active={true} Icon={EnvelopeIcon}>
                Button
            </Button.Secondary>
            <Button.Secondary iconPosition="bottom" Icon={EnvelopeIcon}>
                Button
            </Button.Secondary>
        </ButtonGroupSwitch>

        <ButtonGroupSwitch {...props}>
            <Button.Tertiary iconPosition="left" Icon={EnvelopeIcon}>
                Button
            </Button.Tertiary>
            <Button.Tertiary iconPosition="left" active={true} Icon={EnvelopeIcon}>
                Button
            </Button.Tertiary>
            <Button.Tertiary iconPosition="left" Icon={EnvelopeIcon}>
                Button
            </Button.Tertiary>
        </ButtonGroupSwitch>

        <ButtonGroupSwitch {...props}>
            <Button.Ghost iconPosition="right" Icon={EnvelopeIcon}>
                Button
            </Button.Ghost>
            <Button.Ghost iconPosition="right" active={true} Icon={EnvelopeIcon}>
                Button
            </Button.Ghost>
            <Button.Ghost iconPosition="right" Icon={EnvelopeIcon}>
                Button
            </Button.Ghost>
        </ButtonGroupSwitch>
    </div>
);
WithIconPosition.parameters = {};

export const WithTooltip: StoryFn<ButtonGroupSwitchProps> = props => (
    <div className="grid grid-rows-4 gap-10">
        <ButtonGroupSwitch {...props}>
            <Tooltip
                title={'Some description qwe 0'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Primary {...props} className={className} ref={ref}>
                        Button 0
                    </Button.Primary>
                )}
            />
            <Tooltip
                title={'Some description qwe'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Primary {...props} coloring={'success'} className={className} ref={ref}>
                        Button 1
                    </Button.Primary>
                )}
            />
            <Tooltip
                title={'Some description qwasde'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Primary {...props} className={className} ref={ref}>
                        Button 2
                    </Button.Primary>
                )}
            />
            <Tooltip
                title={'Some description rty'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Primary {...props} className={className} ref={ref}>
                        Button 3
                    </Button.Primary>
                )}
            />
            <Tooltip
                title={'Some description fgh'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Primary {...props} className={className} ref={ref}>
                        Button 4
                    </Button.Primary>
                )}
            />
        </ButtonGroupSwitch>

        <ButtonGroupSwitch {...props}>
            <Tooltip
                title={'Some description qwe 0'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Secondary {...props} className={className} ref={ref}>
                        Button 0
                    </Button.Secondary>
                )}
            />
            <Tooltip
                title={'Some description qwe'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Secondary {...props} coloring={'success'} className={className} ref={ref}>
                        Button 1
                    </Button.Secondary>
                )}
            />
            <Tooltip
                title={'Some description qwasde'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Secondary {...props} className={className} ref={ref}>
                        Button 2
                    </Button.Secondary>
                )}
            />
            <Tooltip
                title={'Some description rty'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Secondary {...props} className={className} ref={ref}>
                        Button 3
                    </Button.Secondary>
                )}
            />
            <Tooltip
                title={'Some description fgh'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Secondary {...props} className={className} ref={ref}>
                        Button 4
                    </Button.Secondary>
                )}
            />
        </ButtonGroupSwitch>

        <ButtonGroupSwitch {...props}>
            <Tooltip
                title={'Some description qwe 0'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Tertiary {...props} className={className} ref={ref}>
                        Button 0
                    </Button.Tertiary>
                )}
            />
            <Tooltip
                title={'Some description qwe'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Tertiary {...props} coloring={'success'} className={className} ref={ref}>
                        Button 1
                    </Button.Tertiary>
                )}
            />
            <Tooltip
                title={'Some description qwasde'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Tertiary {...props} className={className} ref={ref}>
                        Button 2
                    </Button.Tertiary>
                )}
            />
            <Tooltip
                title={'Some description rty'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Tertiary {...props} className={className} ref={ref}>
                        Button 3
                    </Button.Tertiary>
                )}
            />
            <Tooltip
                title={'Some description fgh'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Tertiary {...props} className={className} ref={ref}>
                        Button 4
                    </Button.Tertiary>
                )}
            />
        </ButtonGroupSwitch>

        <ButtonGroupSwitch {...props}>
            <Tooltip
                title={'Some description qwe 0'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Ghost {...props} className={className} ref={ref}>
                        Button 0
                    </Button.Ghost>
                )}
            />
            <Tooltip
                title={'Some description qwe'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Ghost {...props} coloring={'success'} className={className} ref={ref}>
                        Button 1
                    </Button.Ghost>
                )}
            />
            <Tooltip
                title={'Some description qwasde'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Ghost {...props} className={className} ref={ref}>
                        Button 2
                    </Button.Ghost>
                )}
            />
            <Tooltip
                title={'Some description rty'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Ghost {...props} className={className} ref={ref}>
                        Button 3
                    </Button.Ghost>
                )}
            />
            <Tooltip
                title={'Some description fgh'}
                placement="bottom"
                showArrow
                renderReferenceElement={({ ref, className, ...props }) => (
                    <Button.Ghost {...props} className={className} ref={ref}>
                        Button 4
                    </Button.Ghost>
                )}
            />
        </ButtonGroupSwitch>
    </div>
);
WithTooltip.parameters = {
    controls: { exclude: ['level'] },
};
