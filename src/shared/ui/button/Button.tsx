import clsx from 'clsx';
import styles from './Button.module.css';
import type { ButtonProps } from './types';
function Button({ variant = 'primary', isDisabled, children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
