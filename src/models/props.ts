import { ButtonType, InputType } from './models';

export interface ButtonProps {
  id: string;
  label: string;
  icon: string;
  type?: ButtonType;
  color?: string;
  size?: string;
  onClick?: () => void;
}

export interface ButtonGroupProps {
  LId: string;
  LType?: ButtonType;
  LColor?: string;
  LSize?: string;
  LLabel: string;
  LIcon?: string;
  LOnClick: () => void;
  RId: string;
  RType?: ButtonType;
  RColor?: string;
  RSize?: string;
  RLabel: string;
  RIcon?: string;
  ROnClick?: () => void;
}

export interface FormProps {
  isRegistered: boolean;
  errorTranslations?: Record<string, string>;
  loginFn: (form: HTMLFormElement) => void;
  registerFn: (form: HTMLFormElement) => void;
}

export interface InputProps {
  label: string;
  name: string;
  type: InputType;
  required: boolean;
  validationTrigger: number;
  errorTranslations?: Record<string, string>;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  placeholder?: string;
}

export interface FileInputProps {
    title: string;
    restrictions: string;
    label: string;
    errorTranslations?: Record<string, string>;
    allowedFileSize?: number;
    allowedExtensions?: RegExp;
    addFileFn: (file: File) => void;
  }