import React, { FC, useState } from "react";
import { IconColor, IconHoverColor } from "../../Icon/Icon";
import {
  BackGroundColor,
  Interaction,
  TextColor,
  TextHoverColor,
} from "../Interaction";

export interface ShareProps {
  value: string;
}

export const Share: FC<ShareProps> = ({ value }) => {
  const copyToClipBoard = () => {
    if(!isCopied){
      navigator.clipboard.writeText(value);
      setIsCopied(() => true);
      setTimeout(() => setIsCopied(() => false), 3000)
    }
  };

  const [isCopied, setIsCopied] = useState(false);

  //TODO add translation for label
  return (
    <Interaction
      iconId={"share"}
      label={isCopied ? "Link is copied" : "Copy Link"}
      iconColor={IconColor.LightGray}
      textColor={TextColor.LightGray}
      iconHoverColor={IconHoverColor.Gray}
      textHoverColor={TextHoverColor.Gray}
      backgroundColor={BackGroundColor.Gray}
      onClickFn={copyToClipBoard}
    />
  );
};
