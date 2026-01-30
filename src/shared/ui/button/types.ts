import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'support' | 'exit';
export type ButtonProps = {
  variant?: ButtonVariant;
  isDisabled?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
