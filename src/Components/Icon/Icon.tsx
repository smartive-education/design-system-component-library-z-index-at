import React, { FC } from 'react';
import { IconProps, IconColor, IconHoverColor } from '../../models';

export const Icon: FC<IconProps> = ({ id, size, color, hoverColor, spritePath }) => {
  return (
    <svg
      width={size || 14}
      height={size || 14}
      className={`${color || IconColor.LightGray} ${hoverColor || IconHoverColor.Gray}`}
    >
      <use href={`${spritePath || 'icons.svg'}#${id}`}></use>
    </svg>
  );
};
