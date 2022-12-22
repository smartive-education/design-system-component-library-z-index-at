import React, { FC } from 'react';

import { Button } from '../Button';

interface ButtonGroupProps {
  LId: string;
  LColor?: string;
  LSize?: string;
  LLabel: string;
  LIcon?: string;
  LOnClick: () => void;
  RId: string;
  RColor?: string;
  RSize?: string;
  RLabel: string;
  RIcon?: string;
  ROnClick?: () => void;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  LId,
  LColor = 'Slate',
  LSize = 'M',
  LLabel,
  LIcon = 'upload',
  LOnClick,
  RId,
  RColor = 'Violet',
  RSize = 'M',
  RLabel,
  RIcon = 'send',
  ROnClick,
}) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button type='button' id={LId} color={LColor} size={LSize} label={LLabel} onClick={LOnClick} icon={LIcon} />
      <Button type='submit' id={RId} color={RColor} size={RSize} label={RLabel} onClick={ROnClick} icon={RIcon} />
    </div>
  );
};
