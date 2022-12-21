import React, { FC } from 'react';

import { Icon, IconColor } from '../Icon';

export type AvatarSize = 'small' | 'medium' | 'large';

interface ProfilePictureProps {
  name: string;
  src: string;
  size: AvatarSize;
  onClick: () => void;
  onEdit: () => void;
  edit: boolean;
}
const defaultProps: Partial<ProfilePictureProps> = {
  edit: false,
};

const getClasses = ((size: string) => {
  if(size === 'small') {
    return {
      size: 'h-10 w-10',
      div: 'h-10',
    }
  }
  if(size ==='medium') {
    return {
      size: 'h-16 w-16',
      div: 'outline outline-8 outline-slate-100 h-16',
    }
  }
  return {
    size: 'h-40 w-40',
    image: 'outline outline-8 outline-slate-100'
  }
})
const getImage = (src: string, size: string) => {
  if(!src && size === 'large') {
    return '/assets/images/profile/no.image.png'
  }
  if(!src) {
    return undefined
  }
  return src
}

export const ProfilePicture: FC<ProfilePictureProps> = ({ name, src, size, onClick, edit, onEdit }) => {
  const sizes = getClasses(size)
  const immageSrc = getImage(src, size)

  return (
    <div className={`relative ${sizes.size}`}>
    <div
      className={`cursor-pointer rounded-full object-cover overflow-hidden ${sizes.div} ${!immageSrc && 'bg-pink-300'}`}>
      {immageSrc && <img src={immageSrc} alt={name} onClick={onClick} className="hover:scale-125 duration-700 ease-in-out" />}
    </div>
      {edit && size === 'large' &&
       (
        <div className='absolute bottom-0 cursor-pointer right-0 bg-slate-600 p-4 rounded-full' onClick={onEdit}>
          <Icon id='edit' size={16} color={IconColor.White} />
        </div>
       )}
    </div>
  );
};

ProfilePicture.defaultProps = defaultProps;
