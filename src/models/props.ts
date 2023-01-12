import {
  ActionBackGroundColor,
  ButtonColor,
  ButtonSize,
  ButtonType,
  EffectSize,
  IconColor,
  IconHoverColor,
  InputType,
  InteractionSize,
  TextColor,
  TextHoverColor,
} from './models';

export interface ButtonProps {
  id: string;
  label: string;
  icon: string;
  type?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: () => void;
}

export interface ButtonGroupProps {
  LId: string;
  LType?: ButtonType;
  LColor?: ButtonColor;
  LSize?: ButtonSize;
  LLabel: string;
  LIcon?: string;
  LOnClick: () => void;
  RId: string;
  RType?: ButtonType;
  RColor?: ButtonColor;
  RSize?: ButtonSize;
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

export interface IconProps {
  id: string;
  size?: number;
  color?: IconColor;
  hoverColor?: IconHoverColor;
  spritePath?: string;
}

export interface InteractionProps {
  iconId: string;
  label: string;
  iconColor?: IconColor;
  textColor?: TextColor;
  iconHoverColor?: IconHoverColor;
  textHoverColor?: TextHoverColor;
  backgroundColor?: ActionBackGroundColor;
  size?: InteractionSize;
  value?: number;
  onClickFn?: () => void;
}

export interface CommentProps {
  value: number;
  clickFn: () => void;
}

export interface EffectProps {
  iconId: string;
  label: string;
  size: EffectSize;
  effect: string;
  squared: boolean;
  secondaryIcon?: string;
  backgroundColor?: ActionBackGroundColor;
  navigate: () => void;
}

export interface LikeProps {
  value: number;
  isLiked: boolean;
}

export interface ShareProps {
  value: string;
}
