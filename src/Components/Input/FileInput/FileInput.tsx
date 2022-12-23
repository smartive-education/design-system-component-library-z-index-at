import React, { FC, useRef, useState } from 'react';
import { Button } from '../../Button/index';
import { v4 as uuid } from 'uuid';
import { defaultExtensions, defaultFileSize, isFileExtensionValid, isFileSizeValid } from '../input-validation.helpers';
import { Icon, IconColor } from '../../Icon';

export interface FileInputProps {
  title: string;
  restrictions: string;
  label: string;
  allowedFileSize: number;
  allowedExtensions: RegExp;
  addFileFn: (file: File) => void;
}

export const FileInput: FC<FileInputProps> = ({
  title,
  restrictions,
  label,
  allowedFileSize = defaultFileSize,
  allowedExtensions = defaultExtensions,
  addFileFn,
}) => {
  const [fileName, setFileName] = useState('');
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [isOverDragArea, setIsOverDragArea] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const inputId = uuid();
  const inputRef = useRef<HTMLInputElement>(null);

  const forwardInputButtonClick = (): void => {
    inputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent): void => {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      if (!isFileSizeValid(file, allowedFileSize)) {
        setErrorMessage(() => 'error.validation.sizeOverflow');
      } else if (!isFileExtensionValid(element.value, allowedExtensions)) {
        setErrorMessage(() => 'error.validation.invalidExtension');
      } else {
        setErrorMessage(() => '');
        setIsFileSelected(() => true);
        setFileName(() => element.value);
        addFileFn(file);
      }
    }
  };

  const preventBrowserDefaults = (event: React.DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent): void => {
    preventBrowserDefaults(event);
    const files = event.dataTransfer.files;
    setIsOverDragArea(() => false);
    if (files.length > 1) {
      setErrorMessage(() => 'error.validation.tooManyFiles');
    } else if (!isFileSizeValid(files[0], allowedFileSize)) {
      setErrorMessage(() => 'error.validation.sizeOverflow');
    } else if (!isFileExtensionValid(files[0].name, allowedExtensions)) {
      setErrorMessage(() => 'error.validation.invalidExtension');
    } else {
      setErrorMessage(() => '');
      setIsFileSelected(() => true);
      setFileName(() => files[0].name);
      addFileFn(files[0]);
    }
  };

  const handleDragEnter = (event: React.DragEvent): void => {
    preventBrowserDefaults(event);
    setIsOverDragArea(() => true);
  };

  const handleDragLeave = (event: React.DragEvent): void => {
    preventBrowserDefaults(event);
    setIsOverDragArea(() => false);
  };

  return (
    <div className='flex flex-col'>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragEnter}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`flex flex-col border-2 border-dotted rounded-lg mb-4 p-6 ${
          isOverDragArea ? 'bg-slate-300' : 'bg-slate-100'
        }`}
      >
        {!isFileSelected ? (
          <div className="flex flex-col items-center h-20">
            <div>
              <Icon id="upload" color={IconColor.Gray} size={30} />
            </div>
            <h4 className="text-2xl text-slate-500 font-semibold">{title}</h4>
            <p className="text-slate-400">{restrictions}</p>
          </div>
        ) : (
          <div className="h-20 flex flex-col justify-center items-center">
            <div className="rounded-lg bg-slate-300 pt-4 px-2 pb-2 mb-2">
              <Icon id="check" color={IconColor.Gray} size={30} />
            </div>
            <p className="text-slate-600 text-center">{`${fileName} wurde hinzugefügt`}</p>
          </div>
        )}
      </div>
      <div>
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          onChange={handleChange}
          accept="image/png, image/jpeg, image/jpg"
          multiple={false}
          className="hidden"
        />
        <Button id="upload" label={label} icon="upload" size="M" onClick={forwardInputButtonClick} />
      </div>
      <span className="self-end text-rose-500 text-xs">{errorMessage}</span>
    </div>
  );
};
