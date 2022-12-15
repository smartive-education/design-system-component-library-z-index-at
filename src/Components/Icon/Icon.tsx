import React, { FC } from 'react';

export enum IconColor {
  LightGray = 'fill-slate-400',
  Gray = 'fill-slate-600',
  LightPink = 'fill-pink-500',
  Pink = 'fill-pink-600',
  DarkPink = 'fill-pink-900',
  Violet = 'fill-violet-600',
  DarkViolet = 'fill-violet-900',
  White = 'fill-violet-50',
}

export enum IconHoverColor {
  Gray = 'group-hover:fill-slate-600',
  LightPink = 'group-hover:fill-pink-500',
  Pink = 'group-hover:fill-pink-600',
  DarkPink = 'group-hover:fill-pink-900',
  Violet = 'group-hover:fill-violet-600',
  DarkViolet = 'group-hover:fill-violet-900',
}

export interface IconProps {
  id: string;
  size?: number;
  color?: IconColor;
  hoverColor?: IconHoverColor;
  spritePath?: string;
}

const defaultProps: Partial<IconProps> = {
  size: 14,
  color: IconColor.Gray,
  spritePath: '/icons.svg',
};

export const Icon: FC<IconProps> = ({ id, size, color, hoverColor, spritePath }) => {
  return (
    <svg width={size} height={size} className={`${color} ${hoverColor}`}>
      <use href={`${spritePath}#${id}`}></use>
    </svg>
  );
};

Icon.defaultProps = defaultProps;
