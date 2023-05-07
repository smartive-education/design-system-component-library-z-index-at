import React, { FC, useRef, useState, ChangeEvent, DragEvent } from 'react';
import { Button } from '../../Button/index';
import {
  defaultErrorMessages,
  defaultExtensions,
  defaultFileSize,
  isFileExtensionValid,
  isFileSizeValid,
} from '../input-validation.helpers';
import { Icon } from '../../Icon';
import { FileInputProps, IconColor } from '../../../models';

interface FileInputState {
  fileName: string;
  isFileSelected: boolean;
  isOverDragArea: boolean;
  errorMessage: string;
}

export const FileInput: FC<FileInputProps> = ({
  title,
  restrictions,
  label,
  errorTranslations = defaultErrorMessages,
  allowedFileSize = defaultFileSize,
  allowedExtensions = defaultExtensions,
  testId = label,
  addFileFn,
}) => {
  const defaultFileInputState: FileInputState = {
    fileName: '',
    isFileSelected: false,
    isOverDragArea: false,
    errorMessage: '',
  };

  const [fileInputState, setFileInputState] = useState(defaultFileInputState);
  const inputRef = useRef<HTMLInputElement>(null);

  const forwardInputButtonClick = (): void => {
    inputRef.current?.click();
  };

  const handleChange = (event: ChangeEvent): void => {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      if (!isFileSizeValid(file, allowedFileSize)) {
        setFileInputState((state: FileInputState) => ({
          ...state,
          errorMessage: showErrorMessage('error.validation.sizeOverflow'),
        }));
      } else if (!isFileExtensionValid(element.value, allowedExtensions)) {
        setFileInputState((state: FileInputState) => ({
          ...state,
          errorMessage: showErrorMessage('error.validation.invalidExtension'),
        }));
      } else {
        setFileInputState((state: FileInputState) => ({
          ...state,
          errorMessage: '',
          isFileSelected: true,
          fileName: element.value,
        }));
        addFileFn(file);
      }
    }
  };

  const preventBrowserDefaults = (event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: DragEvent): void => {
    preventBrowserDefaults(event);
    const files = event.dataTransfer.files;
    if (files.length > 1) {
      setFileInputState((state: FileInputState) => ({
        ...state,
        errorMessage: showErrorMessage('error.validation.tooManyFiles'),
        isOverDragArea: false,
      }));
    } else if (!isFileSizeValid(files[0], allowedFileSize)) {
      setFileInputState((state: FileInputState) => ({
        ...state,
        errorMessage: showErrorMessage('error.validation.sizeOverflow'),
        isOverDragArea: false,
      }));
    } else if (!isFileExtensionValid(files[0].name, allowedExtensions)) {
      setFileInputState((state: FileInputState) => ({
        ...state,
        errorMessage: showErrorMessage('error.validation.invalidExtension'),
        isOverDragArea: false,
      }));
    } else {
      setFileInputState((state: FileInputState) => ({
        ...state,
        errorMessage: '',
        isFileSelected: true,
        fileName: files[0].name,
        isOverDragArea: false,
      }));
      addFileFn(files[0]);
    }
  };

  const handleDragEnter = (event: DragEvent): void => {
    preventBrowserDefaults(event);
    setFileInputState((state: FileInputState) => ({
      ...state,
      isOverDragArea: true,
    }));
  };

  const handleDragLeave = (event: DragEvent): void => {
    preventBrowserDefaults(event);
    setFileInputState((state: FileInputState) => ({
      ...state,
      isOverDragArea: false,
    }));
  };

  const showErrorMessage = (key: string): string => errorTranslations[key] || key;

  return (
    <div className="flex flex-col">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragEnter}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`flex flex-col border-2 border-dotted rounded-lg mb-4 p-6 ${
          fileInputState.isOverDragArea ? 'bg-slate-300' : 'bg-slate-100'
        }`}
      >
        {!fileInputState.isFileSelected ? (
          <div className="flex flex-col items-center h-20">
            <div>
              <Icon id="upload" color={IconColor.Gray} size={30} />
            </div>
            <h2 className="text-2xl text-slate-500 font-semibold">{title}</h2>
            <p className="text-slate-400">{restrictions}</p>
          </div>
        ) : (
          <div className="h-20 flex flex-col justify-center items-center truncate">
            <div className="rounded-lg bg-slate-300 pt-4 px-2 pb-2 mb-2">
              <Icon id="check" color={IconColor.Gray} size={30} />
            </div>
            <p className="text-slate-600 text-center">{`${fileInputState.fileName} wurde hinzugefügt`}</p>
          </div>
        )}
      </div>
      <div>
        <input
          ref={inputRef}
          type="file"
          onChange={handleChange}
          accept="image/png, image/jpeg, image/jpg"
          multiple={false}
          className="hidden"
        />
        <Button label={label} testId={testId} icon="upload" size="M" onClick={forwardInputButtonClick} />
      </div>
      <span className="self-end text-rose-500 text-xs">{fileInputState.errorMessage}</span>
    </div>
  );
};
