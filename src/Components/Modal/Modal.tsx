import React, { FC, ReactNode } from 'react';
import { ButtonGroup } from '../ButtonGroup';
import { Icon, IconColor } from '../Icon';

export interface ModalProps {
  isOpen: boolean;
  title: string;
  close: () => void;
  submit: () => void;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, title, close, submit, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div
        className="fixed left-0 top-0 right-0 bottom-0 overflow-y-scroll flex items-center justify-center bg-violet-600/30"
      >
        <div
          className="md:w-3/6"
        >
          <div className="flex justify-between items-center p-8 bg-violet-600 h-16 rounded-t-lg text-white">
            <h3 className="text-2xl">{title}</h3>
            <button onClick={close}>
              <Icon id="close" color={IconColor.White} />
            </button>
          </div>
          <div className="bg-white p-8 rounded-b-lg">
            <div>{children}</div>
            <div>
              <ButtonGroup
                LLabel="Abbrechen"
                RLabel="Speichern"
                LId="cancel"
                RId="save"
                LOnClick={close}
                ROnClick={submit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
