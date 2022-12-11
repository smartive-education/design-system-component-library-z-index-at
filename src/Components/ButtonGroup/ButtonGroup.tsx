import React, { FC, useCallback } from "react";

import { Button } from "../Button";

type ButtonGroupProps = {
  name: string;
  onClick: () => void;
};

export const ButtonGroup: FC<ButtonGroupProps> = ({ onClick }) => {
  const handleUpload = useCallback(() => {
    onClick();
  }, []);
  const handleSend = useCallback(() => {
    onClick();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2">
      <Button
        id="upload"
        size="M"
        label="Bild Hochladen"
        onClick={handleUpload}
        icon="upload"
      />
      <Button
        id="send"
        size="M"
        color="Violet"
        label="Absenden"
        onClick={handleSend}
        icon="send"
      />
    </div>
  );
};
