import React, { FC } from 'react';

interface ProfilePictureProps {
  name: string;
  src: string;
  onClick: () => void;
}

export const ProfilePicture: FC<ProfilePictureProps> = ({
  name,
  src,
  onClick,
}) => {
  return (
    <div className="w-10 h-10 cursor-pointer">
      <img src={src} alt={name} onClick={onClick} className='rounded-full' />
    </div>
  );
};
