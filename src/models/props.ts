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
  ProfileHeaderType,
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
  disabled?: boolean;
  onClick?: () => void;
}

export interface ButtonGroupProps {
  children?: ReactNode;
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
  LLable?: string;
  RLable?: string;
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
  settingsLabel: string;
  loggedInStatusLabel: string;
  navigateToFeed: () => void;
  navigateToProfile: () => void;
  openSettings: () => void;
  changeLoggedInStatus: () => void;
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
  profileHeaderType: ProfileHeaderType;
  openProfile: () => void;
  comment: () => void;
  setIsLiked: (isLiked: boolean) => void;
  hashtags?: string[];
  children?: ReactNode;
}

export interface ProfileHeaderProps {
  type: ProfileHeaderType;
  name: string;
  userName: string;
  src: string;
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
  profileHeaderType: ProfileHeaderType;
  userName: string;
  src: string;
  postCreationTime: string;
  placeholder?: string;
  LLabel?: string;
  RLabel?: string;
  openProfile: () => void;
  onSubmit: (file: File | undefined, text: string) => Promise<void>;
}
