import React, { FC } from "react";

export interface IconProps {
  size: number;
  id: string;
  color: string
}

export const Icon: FC<IconProps> = ({ id, size, color }) => {
  return (
    <svg width={size} height={size} fill={color ? color : '#475569'}>
       <use href={`/icons.svg#${id}`}></use>
    </svg>
  );
};
