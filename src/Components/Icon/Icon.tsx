import React, { FC } from "react";

export enum IconColor {
  Gray = 'fill-slate-600',
  LightGray = 'fill-slate-400',
  LightPink = 'fill-pink-500',
  Pink = 'fill-pink-600',
  DarkPink = 'fill-pink-900',
  Violet = 'fill-violet-600',
  DarkViolet = 'fill-violet-900',
  White= 'fill-violet-50'
}

export interface IconProps {
  id: string;
  size?: number;
  color?: IconColor;
  spritePath?: string;
}

const defaultProps: Partial<IconProps> = {
  size: 14,
  color: IconColor.Gray,
  spritePath: '/icons.svg'
}

export const Icon: FC<IconProps> = ({ id, size, color, spritePath }) => {

  return (
    <svg width={size} height={size} className={color}>
       <use href={`${spritePath}#${id}`}></use>
    </svg>
  );
};

Icon.defaultProps = defaultProps;