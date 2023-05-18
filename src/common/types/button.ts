import { CSSProperties, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export type ButtonProps = {
  type?: 'submit';
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  variant?: ButtonVariant;
  label: string;
  icon?: ReactNode;
};
