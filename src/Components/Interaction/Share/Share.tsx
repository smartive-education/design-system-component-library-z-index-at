import React, { FC, useEffect, useState } from 'react';
import { ActionBackGroundColor, IconColor, ShareProps, TextColor } from '../../../models';
import { Interaction } from '../Interaction';

export const Share: FC<ShareProps> = ({ value, label, copiedLabel }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipBoard = (): void => {
    if (!isCopied) {
      void navigator.clipboard.writeText(`${window.location.origin}${value}`);
      setIsCopied(() => true);
      setTimeout(() => setIsCopied(() => false), 3000);
    }
  };

  useEffect(() => {
    if (isCopied) {
      const timeoutId = setTimeout(() => setIsCopied(() => false), 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [isCopied]);

  return (
    <div>
      <div className="hidden md:block">
        <Interaction
          iconId={'share'}
          label={isCopied ? copiedLabel : label}
          aria-label={isCopied ? copiedLabel : label}
          iconColor={IconColor.Gray}
          textColor={TextColor.Gray}
          backgroundColor={ActionBackGroundColor.Gray}
          size="standard"
          onClickFn={copyToClipBoard}
        />
      </div>
      <div className="block md:hidden">
        <Interaction
          iconId={'share'}
          label=""
          aria-label={isCopied ? copiedLabel : label}
          iconColor={IconColor.Gray}
          textColor={TextColor.Gray}
          backgroundColor={ActionBackGroundColor.Gray}
          size="standard"
          onClickFn={copyToClipBoard}
        />
      </div>
    </div>
  );
};
