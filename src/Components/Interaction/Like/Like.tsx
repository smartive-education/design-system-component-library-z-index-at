import React, { FC, useEffect, useState } from 'react';
import { IconColor, IconHoverColor } from '../../Icon/Icon';
import { BackGroundColor, Interaction, TextColor, TextHoverColor } from '../Interaction';

export interface LikeProps {
  value: number;
  isLiked: boolean;
}

export const Like: FC<LikeProps> = ({ value, isLiked }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [isCurrentlyLiked, setIsCurrentlyLiked] = useState(isLiked);

  const toggleLikedStatus = (): void => {
    setIsCurrentlyLiked(() => !isCurrentlyLiked);
  };

  useEffect(() => {
    isCurrentlyLiked ? setCurrentValue(() => currentValue + 1) : setCurrentValue(() => currentValue - 1);
  }, [isCurrentlyLiked]);

  useEffect(() => setCurrentValue(() => value), [value]);
  useEffect(() => setIsCurrentlyLiked(() => isLiked), [isLiked]);

  // TODO add translation for label
  return (
    <Interaction
      iconId={currentValue === 0 ? 'heart-empty' : 'heart-full'}
      label={
        currentValue === 0 || (currentValue === 1 && !isCurrentlyLiked)
          ? 'Like'
          : currentValue === 1 && isCurrentlyLiked
          ? 'Liked'
          : 'Likes'
      }
      value={currentValue > 0 ? currentValue : undefined}
      iconColor={currentValue === 0 ? IconColor.Gray : IconColor.Pink}
      textColor={currentValue === 0 ? TextColor.Gray : TextColor.DarkPink}
      iconHoverColor={IconHoverColor.Pink}
      textHoverColor={TextHoverColor.Pink}
      backgroundColor={BackGroundColor.Pink}
      onClickFn={toggleLikedStatus}
    />
  );
};
