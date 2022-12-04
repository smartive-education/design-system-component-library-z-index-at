import React, { FC, useState } from "react";
import { v4 as uuid } from "uuid";
import { getTranslationKeyForError } from "./input-validation.helpers";

export type InputType = "text" | "password" | "email";
export interface InputProps {
  label: string;
  type: InputType;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

//TODO: add wrapper for email and password variants, add icons, add functions as props, add handlers which set state/validate and call input function
const Input: FC<InputProps> = ({
  label,
  type,
  required,
  minLength,
  maxLength,
  pattern,
}) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setValidity] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const inputId = uuid();

  const handleChange = (event: React.ChangeEvent) => {
    const element = event.target as HTMLInputElement;
    const isElementValid = element.checkValidity()
    setValidity(() => isElementValid);
    setIsDirty(() => true);
    if (isElementValid) {
      setErrorMessage(() => "");
    }
    setValue(() => element.value);
  };

  const handleBlur = (event: React.FocusEvent) => {
    const element = event.target as HTMLInputElement;
    const isElementValid = element.checkValidity()
    setValidity(() => isElementValid);
    if (!isElementValid && isDirty) {
      setErrorMessage(() => getTranslationKeyForError(element)); //TODO implement translation
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={inputId} className="text-slate-700 font-semibold">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={`border border-solid border-slate-200
       bg-slate-50 rounded-md 
       ${
         !isValid && isDirty
           ? "border-2 border-rose-500 focus:outline-none focus:border-2 focus:border-violet-600"
           : "hover:border-2 hover:border-violet-600 focus:outline-none focus:border-2 focus:border-violet-600"
       }
       p-4
       leading-none`}
      />
      <span className="self-end text-rose-500">{errorMessage}</span>
    </div>
  );
};

export default Input;
