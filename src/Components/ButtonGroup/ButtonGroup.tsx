import React, { FC } from 'react';
import { ButtonGroupProps } from '../../models';
import { Button } from '../Button';

export const ButtonGroup: FC<ButtonGroupProps> = ({
  LId,
  LType = 'button',
  LColor = 'Slate',
  LSize = 'M',
  LLabel,
  LIcon = 'upload',
  LOnClick,
  RId,
  RType = 'submit',
  RColor = 'Violet',
  RSize = 'M',
  RLabel,
  RIcon = 'send',
  ROnClick,
}) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button type={LType} id={LId} color={LColor} size={LSize} label={LLabel} onClick={LOnClick} icon={LIcon} />
      <Button type={RType} id={RId} color={RColor} size={RSize} label={RLabel} onClick={ROnClick} icon={RIcon} />
    </div>
  );
};
