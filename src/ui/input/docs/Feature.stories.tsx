import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { Props as InputProps } from '../Input';
import Input from '../Input';
import { args, argTypes } from './config';
import { Labelify } from '../../labelify';
import { CakeIcon } from '@heroicons/react/24/outline';
import { Button } from '../../button';
import { Popover } from '../../popover';

const meta: Meta<typeof Input> = {
    title: 'Form Elements/Input/Features',
    tags: ['!autodocs'],
    component: Input,
    args,
    argTypes,
};

export default meta;

export const Coloring: StoryFn<InputProps> = props => <Input {...props} />;
Coloring.args = {
    value: 'some value',
};
Coloring.parameters = {
    controls: {
        include: ['coloring'],
    },
};

export const Sizing: StoryFn<InputProps> = props => <Input {...props} />;
Sizing.args = {
    value: 'some value',
};
Sizing.parameters = {
    controls: {
        include: ['sizing'],
    },
};

export const Placeholder: StoryFn<InputProps> = props => <Input {...props} />;
Placeholder.args = {
    placeholder: 'placeholder text',
};
Placeholder.parameters = {
    controls: {
        include: ['placeholder'],
        sort: 'alpha',
    },
};

export const Disabled: StoryFn<InputProps> = props => <Input {...props} />;
Disabled.args = {
    value: 'Some text',
    disabled: true,
};
Disabled.parameters = {
    controls: {
        include: ['disabled', 'value'],
    },
};

export const WithLabel: StoryFn<InputProps> = props => (
    <Labelify label="Some label. Also check Labelify component">
        <Input {...props} />
    </Labelify>
);
WithLabel.args = {
    value: 'some text',
};
WithLabel.parameters = {
    controls: {
        include: [],
    },
};

export const HelperText: StoryFn<InputProps> = props => <Input {...props} />;
HelperText.args = {
    value: 'some text',
    helperText: 'Need details?',
};
HelperText.parameters = {
    controls: {
        include: ['helperText'],
        sort: 'alpha',
    },
};

export const WithIcon: StoryFn<InputProps> = props => <Input {...props} />;
WithIcon.args = {
    value: 'some long text to check how icon looks on the right',
    Icon: CakeIcon,
};
WithIcon.parameters = {
    controls: {
        include: ['iconPosition'],
        sort: 'alpha',
    },
};

export const Required: StoryFn<InputProps> = props => <Input {...props} />;
Required.args = {
    value: '',
    placeholder: '',
    required: true,
};
Required.parameters = {
    controls: {
        include: ['required', 'placeholder'],
        sort: 'alpha',
    },
};

export const InternalValidation: StoryFn<InputProps> = props => <Input {...props} />;
InternalValidation.args = {
    value: 25,
    type: 'number',
    min: 1,
    max: 5,
    helperText: 'The number must be between 1 and 5.',
};
InternalValidation.parameters = {
    controls: {
        include: ['enableInternalValidation'],
        sort: 'alpha',
    },
};

export const ErrorMessage: StoryFn<InputProps> = props => <Input {...props} />;
ErrorMessage.args = {
    value: 25,
    type: 'number',
    min: 1,
    max: 35,
    helperText: 'The number must be between 1 and 35.',
    errorMessage: 'Some error occured 😭',
};
ErrorMessage.parameters = {
    controls: {
        include: ['errorMessage', 'enableInternalValidation'],
        sort: 'alpha',
    },
};

export const Text: StoryFn<InputProps> = props => <Input {...props} />;
Text.args = {
    value: 'Some text',
    type: 'text',
};
Text.parameters = {
    controls: {
        include: ['value', 'type'],
    },
};

export const Number: StoryFn<InputProps> = props => <Input {...props} />;
Number.args = {
    value: 54,
    type: 'number',
};
Number.parameters = {
    controls: {
        include: ['value', 'type', 'integerArrowButtons'],
    },
};

export const Search: StoryFn<InputProps> = props => <Input {...props} />;
Search.args = {
    value: 'searching for something',
    type: 'search',
};
Search.parameters = {
    controls: {
        include: ['value', 'type'],
        sort: 'alpha',
    },
};

export const Email: StoryFn<InputProps> = props => <Input {...props} />;
Email.args = {
    value: 'some@email.com',
    type: 'email',
};
Email.parameters = {
    controls: {
        include: ['value', 'type'],
        sort: 'alpha',
    },
};

export const Password: StoryFn<InputProps> = props => <Input {...props} />;
Password.args = {
    value: 'somePassWorD1',
    type: 'password',
};
Password.parameters = {
    controls: {
        include: ['value', 'type'],
        sort: 'alpha',
    },
};

export const PhoneNumber: StoryFn<InputProps> = props => <Input {...props} />;
PhoneNumber.args = {
    value: '123-456-7890',
    type: 'tel',
    pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
};
PhoneNumber.parameters = {
    controls: {
        include: ['value', 'type', 'pattern'],
        sort: 'alpha',
    },
};

export const Url: StoryFn<InputProps> = props => <Input {...props} />;
Url.args = {
    value: 'https://example.com/',
    type: 'url',
    pattern: 'https://.*',
};
Url.parameters = {
    controls: {
        include: ['value', 'type', 'pattern'],
        sort: 'alpha',
    },
};

export const FormLayout: StoryFn<InputProps> = args => (
    <form className="flex flex-col gap-6">
        <Input {...args} placeholder="can be used withought Label but with meaningfull placeholder" />
        <Input {...args} value="Some string passed" />
        <hr />
        <h2 className="text-fg-default">Error handling</h2>
        <div className="grid grid-cols-3 gap-4">
            <Input required {...args} type="number" min={1} max={25} value={250} helperText={'number: min 0, max 25'} />
        </div>

        <div className="grid grid-cols-3 gap-4">
            <Input {...args} errorMessage="Some error occured 😭" value="Field with error" />
            <Input
                {...args}
                helperText={'Helper text'}
                errorMessage="Some error occured 😭"
                value="Field with error and helperText"
            />
            <Input {...args} disabled errorMessage="Some error occured 😭" value="Disabled field with error" />
        </div>

        <div className="grid grid-cols-3 gap-4">
            <Input
                {...args}
                Icon={CakeIcon}
                iconPosition="left"
                errorMessage="Some error occured 😭"
                value="Icon on the left"
            />
            <Input
                {...args}
                Icon={CakeIcon}
                iconPosition="right"
                helperText={'Helper text'}
                errorMessage="Some error occured 😭"
                value="Icon on the right"
            />
        </div>

        <hr />
        <h2 className="text-fg-default">Plaseholder and helperText</h2>
        <div className="grid grid-cols-2 gap-4">
            <Labelify label="Empty field with placeholder">
                <Input {...args} placeholder="Placeholder is optional" />
            </Labelify>
            <Labelify label="Field withought placeholder">
                <Input {...args} placeholder="" value={''} />
            </Labelify>
        </div>

        <div className="grid grid-cols-3 gap-4">
            <Labelify label="Field withought helper text">
                <Input {...args} value={'Some value'} />
            </Labelify>
            <Labelify label="Field with helper text">
                <Input {...args} value="Some value" helperText="Some helper Text" />
            </Labelify>
            <Labelify label="Field withought helper text">
                <Input
                    {...args}
                    value={'Some value'}
                    helperText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam ea omnis quibusdam possimus mollitia, sit doloremque maxime deserunt harum! Libero quam eaque magnam itaque nam animi, quod amet consectetur! "
                />
            </Labelify>
        </div>

        <div className="grid grid-cols-3 gap-4">
            <Input {...args} value="Some value" helperText="" />
            <Input {...args} value="Some value" helperText="Some helper Text " />
            <Input
                {...args}
                value="Some value"
                helperText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam ea omnis quibusdam possimus mollitia, sit doloremque maxime deserunt harum! Libero quam eaque magnam itaque nam animi, quod amet consectetur! "
            />
        </div>

        <hr />
        <h2 className="text-fg-default">Disabled fields</h2>
        <div className="grid grid-cols-3 gap-4">
            <Labelify label="Disabled empty field">
                <Input {...args} value={''} disabled />
            </Labelify>
            <Labelify label="Disabled field">
                <Input {...args} value={'Some string'} disabled />
            </Labelify>
            <Labelify label="Disabled label and field" disabled>
                <Input {...args} value={'Some string'} disabled />
            </Labelify>
        </div>

        <hr />
        <h2 className="text-fg-default">Icons handling</h2>
        <div className="grid grid-cols-3 gap-4">
            <Labelify label="With icon on the left">
                <Input {...args} Icon={CakeIcon} value="some long text to check how icon looks on the sides" />
            </Labelify>
            <Labelify label="With icon on the right">
                <Input
                    {...args}
                    Icon={CakeIcon}
                    iconPosition="right"
                    value="some long text to check how icon looks on the sides"
                />
            </Labelify>
            <Labelify label="With icon on the right">
                <Input
                    {...args}
                    disabled
                    Icon={CakeIcon}
                    iconPosition="right"
                    value="some long text to check how icon looks on the sides"
                />
            </Labelify>
        </div>

        <div className="grid grid-cols-4 gap-4">
            <Labelify label="With icon and search type">
                <Input {...args} type="search" value="meaning of life" Icon={CakeIcon} iconPosition="right" />
            </Labelify>
            <Labelify label="With icon and number type">
                <Input {...args} type="number" value={42} Icon={CakeIcon} iconPosition="right" />
            </Labelify>
            <Labelify label="With icon and email type">
                <Input {...args} type="email" value="somw@email.com" Icon={CakeIcon} iconPosition="right" />
            </Labelify>
            <Labelify label="With icon and Url type">
                <Input {...args} type="url" value="https://example.com/" Icon={CakeIcon} iconPosition="right" />
            </Labelify>
        </div>
    </form>
);

FormLayout.parameters = {
    controls: {
        exclude: [
            'value',
            'onChange',
            'disabled',
            'type',
            'iconPosition',
            'helperText',
            'required',
            'errorMessage',
            'placeholder',
        ],
        sort: 'alpha',
    },
};

export const RenderStartAdornment: StoryFn<InputProps> = props => <Input {...props} />;
RenderStartAdornment.args = {
    renderStartAdornment: (props, ref) => (
        <Input.Adornment {...props} ref={ref}>
            <Popover>
                <Button.Primary size="xs">Click me!</Button.Primary>
                <Popover.Content>
                    {({ onChangeOpen }) => (
                        <Popover.List>
                            <Popover.Item onClick={() => onChangeOpen(false)}>GitHub</Popover.Item>
                            <Popover.Item onClick={() => onChangeOpen(false)}>GitLab</Popover.Item>
                            <Popover.Item onClick={() => onChangeOpen(false)}>BitBucket</Popover.Item>
                        </Popover.List>
                    )}
                </Popover.Content>
            </Popover>
        </Input.Adornment>
    ),
};
