import React, { FC } from 'react';

export type AvatarSize = 'small' | 'medium' | 'large';

interface ProfilePictureProps {
  name: string;
  src: string;
  size: AvatarSize;
  onClick: () => void;
}

export const ProfilePicture: FC<ProfilePictureProps> = ({ name, src, size, onClick }) => {
  return (
    <div
      className={`cursor-pointer 
    rounded-full 
    object-cover overflow-hidden
    ${
      size === 'small'
        ? 'h-10 w-10'
        : size === 'medium'
        ? 'h-16 w-16 outline outline-8 outline-slate-100'
        : 'h-40 w-40 outline outline-8 outline-slate-100'
    }
    `}
    >
      <img src={src} alt={name} onClick={onClick} className="hover:scale-125 duration-700 ease-in-out" />
    </div>
  );
};
