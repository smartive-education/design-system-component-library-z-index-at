import React, { FC, useCallback } from 'react';
import { IconColor, ProfilePictureProps } from '../../models';
import { Icon } from '../Icon';

export const ProfilePicture: FC<ProfilePictureProps> = ({ name, src = '', size, edit = false, onClick, onEdit }) => {
  const getClasses = useCallback((size: string) => {
    if (size === 'small') {
      return {
        size: 'h-10 w-10',
        div: 'h-10',
      };
    }
    if (size === 'medium') {
      return {
        size: 'h-16 w-16',
        div: 'outline outline-8 outline-slate-100 h-16',
      };
    }
    return {
      size: 'h-40 w-40',
      div: 'outline outline-8 outline-slate-100 h-40',
    };
  }, []);

  return (
    <div className={`relative ${getClasses(size).size}`}>
      <div className={`cursor-pointer rounded-full object-cover overflow-hidden bg-violet-100 ${getClasses(size).div}`}>
        {src && (
          <img src={src} alt={name} onClick={onClick} className="hover:scale-125 duration-700 ease-in-out h-full" />
        )}
      </div>
      {edit && size === 'large' && (
        <div className="absolute bottom-0 cursor-pointer right-0 bg-slate-600 p-4 rounded-full" onClick={onEdit}>
          <Icon id="edit" size={16} color={IconColor.White} />
        </div>
      )}
    </div>
  );
};
