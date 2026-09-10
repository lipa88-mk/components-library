import type { FC } from 'react';
import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    XCircleIcon,
} from '@heroicons/react/20/solid';
import { classes } from '../../utils';
import Button from '../button/Button';

type AlertsTheme = 'info' | 'warning' | 'danger' | 'success';

const themeColors = {
    info: {
        Icon: InformationCircleIcon,
        bgColor: 'bg-info-container-default',
        iconColor: 'text-info-default',
        titleColor: 'text-info-active',
        textColor: 'text-info-hover',
    },
    warning: {
        Icon: ExclamationTriangleIcon,
        bgColor: 'bg-warning-container-default',
        iconColor: 'text-warning-default',
        titleColor: 'text-warning-active',
        textColor: 'text-warning-hover',
    },
    danger: {
        Icon: XCircleIcon,
        bgColor: 'bg-danger-container-default',
        iconColor: 'text-danger-default',
        titleColor: 'text-danger-active',
        textColor: 'text-danger-hover',
    },
    success: {
        Icon: CheckCircleIcon,
        bgColor: 'bg-success-container-default',
        iconColor: 'text-success-default',
        titleColor: 'text-success-active',
        textColor: 'text-success-hover',
    },
};

export interface AlertsProps {
    title?: string;
    message?: string;
    list?: string[];
    theme?: AlertsTheme;
    linkTo?: string;
    actionButtonText?: string;
    onActionClick?: React.MouseEventHandler<HTMLButtonElement>;
    // ToDo: add prop with array of btn's event and text
    show: boolean;
}

const Alert: FC<AlertsProps> = ({
    title,
    message,
    list,
    theme = 'info',
    linkTo,
    show,
    onActionClick,
    actionButtonText = 'View',
}) => {
    const { Icon, bgColor } = themeColors[theme];

    return (
        <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className={classes(`rounded-md p-4`, bgColor)}>
                <div className="flex gap-3">
                    <div className="shrink-0">
                        <Icon className={classes(`h-5 w-5`, themeColors[theme].iconColor)} aria-hidden="true" />
                    </div>
                    <div className={classes('grow ', linkTo ? 'flex gap-2 flex-col sm:flex-row sm:gap-3' : '')}>
                        <div className="grid grid-cols-1 gap-2">
                            {title && (
                                <h3 className={classes('text-sm font-medium', themeColors[theme].titleColor)}>
                                    {title}
                                </h3>
                            )}
                            {message && (
                                <div
                                    id={'components-notifications-message'}
                                    className={classes('text-sm', themeColors[theme].textColor)}
                                >
                                    <p>{message}</p>
                                </div>
                            )}
                            {list && (
                                <div
                                    id={'components-notifications-list'}
                                    className={classes('text-sm', themeColors[theme].textColor)}
                                >
                                    <ul role="list" className="list-disc pl-5 space-y-1">
                                        {list.map(item => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {onActionClick && (
                                <div className="flex -ml-2 gap-2 flex-wrap" id={'components-notifications-actions'}>
                                    <Button.Ghost
                                        size="sm"
                                        coloring={theme === 'info' ? 'default' : theme}
                                        className="bg-transparent"
                                        onClick={onActionClick}
                                    >
                                        {actionButtonText}
                                    </Button.Ghost>
                                </div>
                            )}
                        </div>

                        {linkTo && (
                            <span className="shrink-0" id="components-notifications-link">
                                <a
                                    href={linkTo}
                                    className={classes(
                                        `whitespace-nowrap font-medium transition-opacity hover:opacity-90`,
                                        themeColors[theme].textColor
                                    )}
                                >
                                    Details
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default Alert;
