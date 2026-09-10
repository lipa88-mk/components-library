import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { ComponentType, FC, RefAttributes, SVGProps } from 'react';
import React from 'react';
import { classes, useOverlay } from '../../utils';

type ExpandSize = 'sm' | 'md' | 'lg';
type IconPosition = 'left' | 'right';

export type ExpandProps = {
    title: string;
    TitleIcon?: ComponentType<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
    titleIconPosition?: IconPosition;
    children: React.ReactNode;
    expanded?: boolean;
    size?: ExpandSize;
};

const Expand: FC<ExpandProps> = ({ title, children, expanded, size = 'md', TitleIcon, titleIconPosition = 'left' }) => {
    const { isOpen, toggle } = useOverlay(expanded);

    return (
        <section className="mb-0" data-testid={`expand-section`}>
            <h2 className="sr-only">{title}</h2>
            <button
                type={'button'}
                onClick={toggle}
                data-testid={'expand-button'}
                className={classes(
                    'w-full inline-flex items-center justify-between gap-2 border-b border-border-soft ',
                    isOpen ? ' bg-bg-surface2' : 'bg-transparent',
                    'font-semobold text-sm text-fg-default px-3',
                    { ' py-2 ': size === 'sm' },
                    { ' py-2.5 ': size === 'md' },
                    { ' py-3 ': size === 'lg' },
                    'cursor-pointer hover:bg-bg-surface3 focus:outline-hidden focus:ring-2 focus:ring-accent-soft transition duration-200'
                )}
            >
                <span
                    className={classes(
                        'flex items-center gap-2',
                        titleIconPosition === 'left' ? ' flex-row ' : ' flex-row-reverse'
                    )}
                >
                    {TitleIcon ? <TitleIcon className="w-4 h-4 text-fg-soft" /> : null}
                    <span>{title}</span>
                </span>

                <ChevronDownIcon
                    className={classes(
                        'w-5 h-5 text-fg-default transition-transform ',
                        isOpen ? 'rotate-180' : 'rotate-0'
                    )}
                />
            </button>

            {isOpen && <div className="pt-2 text-fg-default">{children}</div>}
        </section>
    );
};

export default Expand;
