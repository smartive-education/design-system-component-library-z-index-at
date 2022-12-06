import React, { FC } from "react";

interface IconProps {
  size: number;
  id: string;
  color: string
}

const Icon: FC<IconProps> = ({ id, size, color }) => {
  return (
    <svg width={size} height={size} fill={color ? color : '#475569'}>
       <use href={`/icons.svg#${id}`}></use>
    </svg>
  );
};

export default Icon;
