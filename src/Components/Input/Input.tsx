import React, { FC, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Icon, IconColor } from '../Icon/Icon';
import { getTranslationKeyForError } from './input-validation.helpers';

export type InputType = 'text' | 'password' | 'email' | 'textarea' | 'file';
export interface InputProps {
  label: string;
  name: string;
  type: InputType;
  required: boolean;
  validationTrigger: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({
  label,
  name,
  type,
  required,
  validationTrigger,
  minLength,
  maxLength,
  pattern,
  placeholder,
}) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setValidity] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [originalType] = useState(type);
  const [currentType, setCurrentType] = useState(type);
  const inputId = uuid();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (input && validationTrigger > 0) {
      const isElementValid = input.checkValidity();
      setValidity(() => isElementValid);
      setIsDirty(() => true);
      if (!isElementValid) {
        setErrorMessage(() => getTranslationKeyForError(input));
      }
    }
  }, [validationTrigger]);

  const handleChange = (event: React.ChangeEvent): void => {
    const element = event.target as HTMLInputElement;
    const isElementValid = element.checkValidity();
    setValidity(() => isElementValid);
    setIsDirty(() => true);
    if (isElementValid) {
      setErrorMessage(() => '');
    }
    setValue(() => element.value);
  };

  const handleBlur = (event: React.FocusEvent): void => {
    const element = event.target as HTMLInputElement;
    const isElementValid = element.checkValidity();
    setValidity(() => isElementValid);
    if (!isElementValid && isDirty) {
      setErrorMessage(() => getTranslationKeyForError(element)); // TODO implement translation
    }
  };

  const resetValue = (): void => setValue(() => '');
  const toggleType = (): void => setCurrentType(() => (currentType === 'password' ? 'text' : 'password'));

  return (
    <div className={`flex flex-col ${errorMessage ? '' : 'mb-4'}`}>
      <label htmlFor={inputId} className="text-slate-700 font-semibold">
        {label}
      </label>
      <div className="relative">
        {type === 'textarea' ? (
          <textarea
            id={inputId}
            name={name}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            rows={4}
            className={`w-full border border-solid border-slate-200
       bg-slate-50 rounded-md 
       ${
         !isValid && isDirty
           ? 'border-2 border-rose-500 focus:outline-none focus:border-2 focus:border-violet-600'
           : 'border-2 hover:border-2 hover:border-violet-600 focus:outline-none focus:border-2 focus:border-violet-600'
       }
       p-4
       leading-none`}
          ></textarea>
        ) : (
          <input
            ref={inputRef}
            id={inputId}
            name={name}
            type={currentType}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            pattern={pattern}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            className={`w-full h-12 border border-solid border-slate-200
       bg-slate-50 rounded-md 
       ${
         !isValid && isDirty
           ? 'border-2 border-rose-500 focus:outline-none focus:border-2 focus:border-violet-600'
           : 'border-2 hover:border-2 hover:border-violet-600 focus:outline-none focus:border-2 focus:border-violet-600'
       }
       p-4
       leading-none`}
          />
        )}

        <button
          type="button"
          className="inline-block absolute z-10 top-1/2 -translate-y-1/2 right-6"
          onClick={originalType === 'email' ? resetValue : toggleType}
        >
          {originalType === 'password' && <Icon size={16} id={'eye'} color={IconColor.Gray} />}
          {originalType === 'email' && !isValid && isDirty && value && (
            <Icon size={14} id={'close'} color={IconColor.LightPink} />
          )}
        </button>
      </div>
      <span className="self-end text-rose-500 text-xs">{errorMessage}</span>
    </div>
  );
};
