import type React from 'react';

export type TagsProps = React.HTMLAttributes<HTMLDivElement>;

export type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
    onDelete?: () => void;
    type?: 'default' | 'warning';
};

export type TagsItemProps = TagProps;
