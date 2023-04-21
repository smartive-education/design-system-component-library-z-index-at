import React, { FC } from 'react';
import { IconColor, ModalProps } from '../../models';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';

export const Modal: FC<ModalProps> = ({
  isOpen,
  isLoadingSpinner = false,
  title,
  isSingleButton = false,
  RLable = 'Speichern',
  LLable = 'Abbrechen',
  RIcon = 'check',
  LIcon = 'close',
  closeFn,
  submitFn,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div className="fixed left-0 top-0 right-0 bottom-0 overflow-y-scroll flex items-center justify-center bg-violet-600/30 z-10">
        {isLoadingSpinner ? (
          <div className="animate-spinner">
            <Icon id="mumble" color={IconColor.Violet} size={128} />
          </div>
        ) : (
          <div className="h-3/4 w-3/4 md:w-3/6">
            <div className="flex justify-between items-center p-8 bg-violet-600 h-16 rounded-t-lg text-white">
              <h3 className="text-3xl">{title}</h3>
              <button type="button" onClick={closeFn}>
                <Icon id="close" color={IconColor.White} />
              </button>
            </div>
            <div className="bg-white p-8 rounded-b-lg">
              <form onSubmit={submitFn} noValidate>
                <div className="mb-10">{children}</div>
                <div>
                  {isSingleButton ? (
                    <Button label={LLable} icon={LIcon} color="Slate" size="M" onClick={closeFn}></Button>
                  ) : (
                    <ButtonGroup>
                      <Button label={LLable} icon={LIcon} color="Slate" size="M" onClick={closeFn}></Button>
                      <Button label={RLable} icon={RIcon} color="Violet" size="M" type="submit"></Button>
                    </ButtonGroup>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
