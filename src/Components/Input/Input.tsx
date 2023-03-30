import React, { FC, useEffect, useRef, useState, ChangeEvent, FocusEvent } from 'react';
import { Icon } from '../Icon/Icon';
import { defaultErrorMessages, getTranslationKeyForError } from './input-validation.helpers';
import { InputProps, InputType, IconColor } from '../../models';
import { Typography } from '../Typography';
interface InputState {
  inputValue: string;
  errorMessage: string;
  isValid: boolean;
  isDirty: boolean;
  originalType: InputType;
  currentType: InputType;
}

export const Input: FC<InputProps> = ({
  label,
  name,
  type,
  required,
  errorTranslations = defaultErrorMessages,
  minLength,
  maxLength,
  pattern,
  placeholder,
}) => {
  const defaultInputState: InputState = {
    inputValue: '',
    errorMessage: '',
    isValid: false,
    isDirty: false,
    originalType: type,
    currentType: type,
  };

  const [inputState, setInputState] = useState(defaultInputState);
  const inputId = name;
  const inputRef = useRef<HTMLInputElement>(null);
  const invalidEventListener = (event: Event): void => {
    setInputState((state: InputState) => ({
      ...state,
      isValid: false,
      isDirty: true,
      errorMessage: event.target ? showErrorMessage(getTranslationKeyForError(event.target as HTMLInputElement)) : '',
    }));
  };

  useEffect(() => {
    const input = inputRef.current;
    input?.addEventListener('reset', () => resetValue());
    input?.addEventListener('invalid', (event: Event) => invalidEventListener(event));
    return input?.removeEventListener('invalid', (event: Event) => invalidEventListener(event));
  }, []);

  const handleChange = (event: ChangeEvent): void => {
    const element = event.target as HTMLInputElement;
    const isElementValid = element.validity.valid;
    setInputState((state: InputState) => ({
      ...state,
      isValid: isElementValid,
      isDirty: true,
      errorMessage: !isElementValid ? state.errorMessage : '',
      inputValue: element.value,
    }));
  };

  const handleBlur = (event: FocusEvent): void => {
    const element = event.target as HTMLInputElement;
    const isElementValid = element.validity.valid;
    setInputState((state: InputState) => ({
      ...state,
      isValid: isElementValid,
      errorMessage: !isElementValid && state.isDirty ? showErrorMessage(getTranslationKeyForError(element)) : '',
      inputValue: element.value,
    }));
  };

  const resetValue = (): void =>
    setInputState((state: InputState) => ({
      ...state,
      inputValue: '',
    }));
  const toggleType = (): void =>
    setInputState((state: InputState) => ({
      ...state,
      currentType: state.currentType === 'password' ? 'text' : 'password',
    }));
  const showErrorMessage = (key: string): string => errorTranslations[key] || key;

  return (
    <div className={`flex flex-col ${inputState.errorMessage ? '' : 'mb-4'}`}>
      <Typography type="label-m" htmlFor={inputId}>
        {label}
      </Typography>
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
            value={inputState.inputValue}
            rows={4}
            className={`w-full border border-solid border-slate-200
       bg-slate-50 rounded-md
       ${
         !inputState.isValid && inputState.isDirty
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
            type={inputState.currentType}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            pattern={pattern}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputState.inputValue}
            className={`w-full h-12 border border-solid border-slate-200
       bg-slate-50 rounded-md
       ${
         !inputState.isValid && inputState.isDirty
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
          onClick={inputState.originalType === 'email' ? resetValue : toggleType}
        >
          {inputState.originalType === 'password' && <Icon size={16} id={'eye'} color={IconColor.Gray} />}
          {inputState.originalType === 'email' &&
            !inputState.isValid &&
            inputState.isDirty &&
            inputState.inputValue && <Icon size={14} id={'close'} color={IconColor.LightPink} />}
        </button>
      </div>
      <span className="self-end text-rose-500 text-xs">{inputState.errorMessage}</span>
    </div>
  );
};
