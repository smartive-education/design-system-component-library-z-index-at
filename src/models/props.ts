import { FormEvent, ReactNode } from 'react';
import {
  ActionBackGroundColor,
  AvatarSize,
  ButtonColor,
  ButtonSize,
  ButtonType,
  EffectSize,
  IconColor,
  IconHoverColor,
  IconSize,
  InputType,
  InteractionSize,
  TextColor,
  TextHoverColor,
  TypographyTypes,
} from './models';

export interface ButtonProps {
  label: string;
  icon: string;
  type?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: () => void;
}

export interface ButtonGroupProps {
  LType?: ButtonType;
  LColor?: ButtonColor;
  LSize?: ButtonSize;
  LLabel: string;
  LIcon?: string;
  LOnClick: () => void;
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
  size?: IconSize;
  color?: IconColor;
  hoverColor?: IconHoverColor;
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
  setIsLiked: (isLiked: boolean) => void;
}

export interface ShareProps {
  value: string;
  label: string;
  copiedLabel: string;
}

export interface ModalProps {
  isOpen: boolean;
  title: string;
  closeFn: () => void;
  submitFn: (event: FormEvent) => void;
  children?: ReactNode;
}

export interface SettingsModalProps {
  isOpen: boolean;
  closeFn: () => void;
  submitFn: (form: HTMLFormElement) => void;
}

export interface FileUploadModalProps {
  isOpen: boolean;
  header?: string;
  title?: string;
  restrictions?: string;
  label?: string;
  closeFn: () => void;
  submitFn: (file: File) => void;
}

export interface NavigationProps {
  profilePictureSrc: string;
  navigateToFeed: () => void;
  navigateToProfile: () => void;
  openSettings: () => void;
  logout: () => void;
}

export interface PostProps {
  name: string;
  userName: string;
  postCreationTime: string;
  src: string;
  content: string;
  commentCount: number;
  likeCount: number;
  isLiked: boolean;
  link: string;
  copyLabel: string;
  copiedLabel: string;
  openProfile: () => void;
  comment: () => void;
  setIsLiked: (isLiked: boolean) => void;
  hashtags?: string[];
  children?: ReactNode;
}

export interface ProfileHeaderProps {
  name: string;
  userName: string;
  src: string;
  size: AvatarSize;
  location?: string;
  memberSince?: string;
  postCreationTime?: string;
  openProfile: () => void;
}

export interface ProfilePictureProps {
  name: string;
  src?: string;
  size: AvatarSize;
  edit?: boolean;
  onClick?: () => void;
  onEdit?: () => void;
}

export interface ProfileCardProps {
  name: string;
  userName: string;
  profileImage: string;
  profilePicture: string;
  location: string;
  calendarText: string;
  profileText: string;
  openProfile: () => void;
  followed: boolean;
  onFollow: () => void;
  onEdit: () => void;
}

export interface UserWidgetProps {
  name: string;
  username: string;
  src: string;
  onClick?: () => void;
}

export interface ToggleProps {
  isToggleOn: boolean;
  onLabel: string;
  offLabel: string;
  onClick: (isOn: boolean) => void;
}
export interface TypographyProps {
  type?: TypographyTypes;
  children: string;
  htmlFor?: string;
}
export interface PostCommentProps {
  name: string;
  userName: string;
  src: string;
  postCreationTime: string;
  placeholder?: string;
  LLabel?: string;
  RLabel?: string;
  openProfile: () => void;
  onSubmit: (file: File | undefined, form: HTMLFormElement) => void;
}
