import React, { FC, useCallback } from 'react';
import { IconColor, ProfilePictureProps } from '../../models';
import { Icon } from '../Icon';

export const ProfilePicture: FC<ProfilePictureProps> = ({ name, src = '', size, edit = false, onClick, onEdit }) => {
  const getContainerSize = useCallback((size: string) => {
    if (size === 'small') {
      return 'h-10 max-w-[2.5rem]';
    }
    if (size === 'medium') {
      return 'outline outline-8 outline-slate-100 h-16 max-w-[4rem]';
    }
    return 'outline outline-8 outline-slate-100 h-40 max-w-[10rem]';
  }, []);

  return (
    <div className={`relative cursor-pointer rounded-full ${getContainerSize(size)}`}>
      <div className={`rounded-full overflow-hidden bg-violet-100 ${getContainerSize(size)}`}>
        {src && (
          <img
            src={src}
            alt={name}
            onClick={onClick}
            className="h-full w-full hover:scale-125 duration-700 ease-in-out object-cover"
          />
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
