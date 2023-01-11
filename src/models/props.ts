import { ButtonType } from './models';

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
