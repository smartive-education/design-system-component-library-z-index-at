import React, { FC } from 'react';

interface ProfilePictureProps {
  name: string;
  src: string;
  hasOutline?: boolean;
  onClick: () => void;
}

export const ProfilePicture: FC<ProfilePictureProps> = ({ name, src, hasOutline, onClick }) => {
  return (
    <div
      className={`h-16 w-16 cursor-pointer 
    rounded-full 
    object-cover overflow-hidden
    ${hasOutline ? 'outline outline-8 outline-slate-100' : ''}
    `}
    >
      <img src={src} alt={name} onClick={onClick} className="hover:scale-125 duration-700 ease-in-out" />
    </div>
  );
};
