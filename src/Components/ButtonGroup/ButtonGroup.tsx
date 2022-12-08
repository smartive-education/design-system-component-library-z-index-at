import React, { FC, useCallback, useMemo } from "react";

import {Button} from '../Button'


type ButtonGroupProps = {
    name: string;
    onClick: () => void
};

export const ButtonGroup: FC<ButtonGroupProps> = ({onClick}) => {

  const handleUpload = useCallback(() => {
    onClick()
  }, [])
  const handleSend = useCallback(() => {
    onClick()
  }, [])

  return (
    <div className="flex">
      <Button
        name="upload"
        size="M"
        label="Bild Hochladen"
        onClick={handleUpload}
        icon="upload"
        className="pr-4"
      />
      <Button
        name="send"
        size="M"
        type="Violet"
        label="Absenden"
        onClick={handleSend}
        icon="send"
      />
    </div>
  )
};
