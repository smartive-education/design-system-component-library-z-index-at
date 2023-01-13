import React, { FC, useState } from 'react';
import { ActionBackGroundColor, IconColor, ShareProps, TextColor } from '../../../models';
import { Interaction } from '../Interaction';

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
    <div>
      <div className="hidden md:block">
        <Interaction
          iconId={'share'}
          label={isCopied ? 'Link is copied' : 'Copy Link'}
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
