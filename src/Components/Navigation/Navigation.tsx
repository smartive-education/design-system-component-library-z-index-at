import React, { FC } from 'react';
import { IconColor } from '../Icon';
import { Interaction, TextColor } from '../Interaction';

export interface NavigationProps {
  profilePictureSrc: string;
}

export const Navigation: FC<NavigationProps> = ({
  profilePictureSrc
}) => {
  return (
    <div className="flex bg-violet-600">
      <div>
        <Interaction iconId='mumble' label='Mumble' iconColor={IconColor.White} textColor={TextColor.White} size='large'/>
      </div>
    </div>
  );
};
