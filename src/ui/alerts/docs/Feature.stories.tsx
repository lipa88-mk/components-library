import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { AlertsProps } from '../Alerts';
import Alerts from '../Alerts';
import { args, argTypes, LongTextString, shortTextString, textList } from './config';

const meta: Meta<typeof Alerts> = {
    title: 'Components/Alerts/Features',
    tags: ['!autodocs'],
    component: Alerts,
    args,
    argTypes,
};

export default meta;

export const Theme: StoryFn<AlertsProps> = props => <Alerts {...props} />;
Theme.parameters = {
    controls: { include: ['theme'] },
};

export const InContent: StoryFn<AlertsProps> = props => <Alerts {...props} />;
InContent.parameters = {
    controls: { include: ['title', 'message', 'show'] },
};
InContent.decorators = [
    Story => (
        <div className="max-w-5xl mx-auto text-fg-default">
            <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto, numquam explicabo reiciendis ducimus
                sit molestias suscipit voluptatem dolorum quia expedita ea recusandae nihil impedit commodi deserunt
                iste. Explicabo, eligendi?
            </p>
            <Story />
            <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto, numquam explicabo reiciendis ducimus
                sit molestias suscipit voluptatem dolorum quia expedita ea recusandae nihil impedit commodi deserunt
                iste. Explicabo, eligendi?
            </p>
        </div>
    ),
];

export const AsOverlay: StoryFn<AlertsProps> = props => <Alerts {...props} />;
AsOverlay.decorators = [
    Story => (
        <div className="max-w-5xl mx-auto text-fg-default">
            <div className="w-96 bg-bg-page shadow-lg fixed top-3 right-3 z-10 ">
                <Story />
            </div>
            <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto, numquam explicabo reiciendis ducimus
                sit molestias suscipit voluptatem dolorum quia expedita ea recusandae nihil impedit commodi deserunt
                iste. Explicabo, eligendi?
            </p>
            <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione nostrum expedita nobis rerum
                ducimus molestiae, corporis ea quidem quaerat commodi suscipit id optio eius molestias a nisi nesciunt
                atque?
            </p>
            <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto, numquam explicabo reiciendis ducimus
                sit molestias suscipit voluptatem dolorum quia expedita ea recusandae nihil impedit commodi deserunt
                iste. Explicabo, eligendi?
            </p>
            <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione nostrum expedita nobis rerum
                ducimus molestiae, corporis ea quidem quaerat commodi suscipit id optio eius molestias a nisi nesciunt
                atque?
            </p>
            <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto, numquam explicabo reiciendis ducimus
                sit molestias suscipit voluptatem dolorum quia expedita ea recusandae nihil impedit commodi deserunt
                iste. Explicabo, eligendi?
            </p>
            <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione nostrum expedita nobis rerum
                ducimus molestiae, corporis ea quidem quaerat commodi suscipit id optio eius molestias a nisi nesciunt
                atque?
            </p>
            <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto, numquam explicabo reiciendis ducimus
                sit molestias suscipit voluptatem dolorum quia expedita ea recusandae nihil impedit commodi deserunt
                iste. Explicabo, eligendi?
            </p>
            <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione nostrum expedita nobis rerum
                ducimus molestiae, corporis ea quidem quaerat commodi suscipit id optio eius molestias a nisi nesciunt
                atque?
            </p>
        </div>
    ),
];
AsOverlay.parameters = {
    controls: { include: ['title', 'message', 'show'] },
};

export const WithList: StoryFn<AlertsProps> = props => <Alerts {...props} />;
WithList.args = {
    title: shortTextString,
    message: '',
    list: textList,
    linkTo: '',
};
WithList.parameters = {
    controls: { include: ['title', 'list'] },
};

export const WithLink: StoryFn<AlertsProps> = props => <Alerts {...props} />;
WithLink.args = {
    title: '',
    message: LongTextString,
    list: [],
    linkTo: 'https://storybook.js.org/',
};
WithLink.parameters = {
    controls: { include: ['message', 'linkTo'] },
};

export const WithActions: StoryFn<AlertsProps> = props => <Alerts {...props} />;
WithActions.args = {
    title: shortTextString,
    message: LongTextString,
    list: [],
    linkTo: '',
    onActionClick: () => console.log('Action'),
};
WithActions.parameters = {
    controls: { include: ['title', 'message'] },
};
