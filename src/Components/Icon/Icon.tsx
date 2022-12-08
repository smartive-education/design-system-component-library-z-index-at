import React, { FC } from "react";

export enum IconColor {
  Gray = '#475569',
  Red = '#f43f5e',
  White= '#fff'
}

export interface IconProps {
  id: string;
  size: number;
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
    <svg width={size} height={size} fill={color}>
       <use href={`${spritePath}#${id}`}></use>
    </svg>
  );
};

Icon.defaultProps = defaultProps;