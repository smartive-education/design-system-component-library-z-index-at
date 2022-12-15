import React, { FC } from 'react';

import { Button } from '../Button';

type ButtonGroupProps = {
  LId: string;
  LColor: string;
  LSize: string;
  LLabel: string;
  LIcon: string;
  LOnClick: () => void;
  RId: string;
  RColor: string;
  RSize: string;
  RLabel: string;
  RIcon: string;
  ROnClick: () => void;
};

export const ButtonGroup: FC<ButtonGroupProps> = ({
  LId,
  LColor,
  LSize,
  LLabel,
  LIcon,
  LOnClick,
  RId,
  RColor,
  RSize,
  RLabel,
  RIcon,
  ROnClick,
}) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button id={LId} color={LColor} size={LSize} label={LLabel} onClick={LOnClick} icon={LIcon} />
      <Button id={RId} color={RColor} size={RSize} label={RLabel} onClick={ROnClick} icon={RIcon} />
    </div>
  );
};
