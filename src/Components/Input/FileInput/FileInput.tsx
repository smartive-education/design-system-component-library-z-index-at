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
}

export const FileInput: FC<FileInputProps> = ({
  title,
  restrictions,
  label,
  allowedFileSize = defaultFileSize,
  allowedExtensions = defaultExtensions,
}) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const inputId = uuid();
  const inputRef = useRef<HTMLInputElement>(null);

  const forwardInputButtonClick = (): void => {
    inputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent): void => {
    const element = event.target as HTMLInputElement;
    if (!isFileSizeValid(element.files?.item(0), allowedFileSize)) {
      setErrorMessage(() => 'error.validation.sizeOverflow');
    } else if (!isFileExtensionValid(element.value, allowedExtensions)) {
      setErrorMessage(() => 'error.validation.invalidExtension');
    } else {
      setErrorMessage(() => '');
      setValue(() => element.value);
    }
  };

  const preventBrowserDefaults = (event: React.DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent): void => {
    preventBrowserDefaults(event);
    const files = event.dataTransfer.files;

    if(files.length > 1){
      setErrorMessage(() => 'error.validation.tooManyFiles');
    } else if (!isFileSizeValid(files[0], allowedFileSize)) {
      setErrorMessage(() => 'error.validation.sizeOverflow');
    } else if (!isFileExtensionValid(files[0].name, allowedExtensions)) {
      setErrorMessage(() => 'error.validation.invalidExtension');
    } else {
      setErrorMessage(() => '');
      setValue(() => inputRef.current?.value ?? '');
    }

  };

  return (
    <div className={`flex flex-col`}>
      <div
        onDrop={handleDrop}
        onDragOver={preventBrowserDefaults}
        onDragEnter={preventBrowserDefaults}
        onDragLeave={preventBrowserDefaults}
        className="flex flex-col items-center border-2 border-dotted rounded-lg mb-4 p-6 bg-slate-100"
      >
        <div>
          <Icon id="upload" color={IconColor.Gray} size={30} />
        </div>
        <h4 className="text-2xl text-slate-500 font-semibold">{title}</h4>
        <p className="text-slate-400">{restrictions}</p>
      </div>
      <div>
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          value={value}
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
