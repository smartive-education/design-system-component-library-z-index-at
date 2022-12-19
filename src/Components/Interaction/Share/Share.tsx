import React, { FC, useState } from 'react';
import { BackGroundColor, Interaction } from '../Interaction';

export interface ShareProps {
  value: string;
}

export const Share: FC<ShareProps> = ({ value }) => {
  const copyToClipBoard = (): void => {
    if (!isCopied) {
      void navigator.clipboard.writeText(value);
      setIsCopied(() => true);
      setTimeout(() => setIsCopied(() => false), 3000);
    }
  };

  const [isCopied, setIsCopied] = useState(false);

  // TODO add translation for label
  return (
    <Interaction
      iconId={'share'}
      label={isCopied ? 'Link is copied' : 'Copy Link'}
      backgroundColor={BackGroundColor.Gray}
      size='standard'
      onClickFn={copyToClipBoard}
    />
  );
};
