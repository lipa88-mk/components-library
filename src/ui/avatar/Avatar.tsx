import type { FC } from 'react';
import React from 'react';
import { classes } from '../../utils';
import { UserIcon } from '@heroicons/react/24/solid';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'x11l';

const sizes: Record<AvatarSize, string> = {
    xs: 'w-6 h-6 text-xs font-medium', // 24
    sm: 'w-8 h-8 text-sm font-medium', // 32
    md: 'w-9 h-9 text-sm font-medium', // 36
    lg: 'w-10 h-10 text-base font-medium', // 40
    xl: 'w-12 h-12 text-lg font-medium', // 48
    xxl: 'w-14 h-14 text-xl font-normal', // 56
    xxxl: 'w-16 h-16 text-2xl font-normal', // 64
    x11l: 'w-32 h-32 text-4xl font-normal', // 128
};

export type Props = {
    userName?: string;
    userAvatarUrl?: string;
    size?: AvatarSize;
    dataTestId?: string;
};

export const Avatar: FC<Props> = ({ userName, userAvatarUrl, size = 'md', dataTestId = 'avatar' }) => (
    <div
        className={classes(
            sizes[size],
            'shrink-0 flex justify-center items-center overflow-hidden rounded-full relative',
            userName ? 'bg-neutral-soft' : 'bg-bg-surface3'
        )}
        data-testid={dataTestId}
    >
        {!userAvatarUrl && !userName && <UserIcon title="User placeholder" className="mt-3 w-full fill-bg-surface5" />}

        {userAvatarUrl && <img src={userAvatarUrl} alt={userName || 'User'} className="h-full w-full block" />}

        {userName && !userAvatarUrl && (
            <span className="text-white">
                {userName
                    ?.split(' ')
                    .map(str => str[0])
                    .join('')}
                <span className="sr-only">{userName}</span>
            </span>
        )}
    </div>
);

export default Avatar;
