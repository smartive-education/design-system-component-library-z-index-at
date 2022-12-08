import React, { FC } from "react";

export enum IconColor {
  Gray = '#475569',
  Red = '#f43f5e',
  White= '#fff'
}

export interface IconProps {
  id: string;
  width?: number;
  height?: number;
  color?: IconColor;
  spritePath?: string;
}

const defaultProps: Partial<IconProps> = {
  width: 14,
  height: 14,
  color: IconColor.Gray,
  spritePath: '/icons.svg'
}

export const Icon: FC<IconProps> = ({ id, width, height, color, spritePath }) => {
  return (
    <svg width={width} height={height} fill={color}>
       <use href={`${spritePath}#${id}`}></use>
    </svg>
  );
};

Icon.defaultProps = defaultProps;