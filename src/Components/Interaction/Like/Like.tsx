import React, { FC } from 'react';
import {
  ActionBackGroundColor,
  IconColor,
  IconHoverColor,
  LikeProps,
  TextColor,
  TextHoverColor,
} from '../../../models';
import { Interaction } from '../Interaction';

export const Like: FC<LikeProps> = ({ value, isLiked, setIsLiked }) => {
  const toggleLikedStatus = (): void => {
    setIsLiked(!isLiked);
  };
  
  return (
    <div>
      <div className="hidden md:block">
        <Interaction
          iconId={value === 0 ? 'heart-empty' : 'heart-full'}
          label={value === 0 || (value === 1 && !isLiked) ? 'Like' : value === 1 && isLiked ? 'Liked' : 'Likes'}
          value={value === 1 && isLiked ? undefined : value > 0 ? value : undefined}
          iconColor={value === 0 ? IconColor.Gray : IconColor.Pink}
          textColor={value === 0 ? TextColor.Gray : TextColor.DarkPink}
          iconHoverColor={IconHoverColor.Pink}
          textHoverColor={TextHoverColor.Pink}
          backgroundColor={ActionBackGroundColor.Pink}
          size="standard"
          onClickFn={toggleLikedStatus}
        />
      </div>
      <div className="block md:hidden">
        <Interaction
          iconId={value === 0 ? 'heart-empty' : 'heart-full'}
          label=""
          value={value === 1 && isLiked ? undefined : value > 0 ? value : undefined}
          iconColor={value === 0 ? IconColor.Gray : IconColor.Pink}
          textColor={value === 0 ? TextColor.Gray : TextColor.DarkPink}
          iconHoverColor={IconHoverColor.Pink}
          textHoverColor={TextHoverColor.Pink}
          backgroundColor={ActionBackGroundColor.Pink}
          size="standard"
          onClickFn={toggleLikedStatus}
        />
      </div>
    </div>
  );
};
