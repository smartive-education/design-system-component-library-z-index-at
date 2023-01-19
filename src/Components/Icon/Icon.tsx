import React, { FC } from 'react';
import { IconProps, IconColor, IconHoverColor } from '../../models';

export const Icon: FC<IconProps> = ({
  id,
  size = 14,
  color = IconColor.LightGray,
  hoverColor = IconHoverColor.Gray,
  spritePath = 'icons.svg',
}) => {
  return (
    <svg width={size} height={size} className={`${color} ${hoverColor}`}>
      <use href={`${spritePath}#${id}`}></use>
    </svg>
  );
};
