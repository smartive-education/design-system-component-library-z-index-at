import React, { FC } from 'react';
import { ButtonGroupProps } from '../../models';

export const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => {
  return <div className="grid grid-cols-2 gap-2">{children}</div>;
};
