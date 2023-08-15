import React from 'react';
import styles from './Button.module.scss';

type ButtonType = {
  onClick?: () => void;
  children: React.ReactNode;
  title: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export function Button(props: ButtonType) {
  const { children, disabled = false } = props;
  return (
    <button {...props} className={styles.btn} disabled={disabled}>
      {children}
    </button>
  );
}
