import type { FC } from 'react';
import React from 'react';
import { Avatar } from '../avatar';
import type { AvatarSize } from '../avatar';

export type Props = {
    userName?: string;
    userDescription?: string;
    userAvatarUrl?: string;
    userAvatarSize?: AvatarSize;
};

export const UserInfo: FC<Props> = ({ userName, userDescription, userAvatarUrl = '', userAvatarSize = 'md' }) => (
    <figure className="w-full flex gap-3 px-4 py-3">
        <Avatar userName={userName} userAvatarUrl={userAvatarUrl} size={userAvatarSize} />
        <figcaption className="flex flex-col justify-center grow">
            {userName && <p className="text-sm font-normal text-fg-default">{userName}</p>}
            {userDescription && <p className="font-normal text-xs text-fg-soft">{userDescription}</p>}
        </figcaption>
    </figure>
);

export default UserInfo;
