import React from 'react';
import styles from './Button.module.scss';

type ButtonType = {
  onClick?: () => void;
  children: React.ReactNode;
  title: string;
  disable?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export function Button(props: ButtonType) {
  const { children, disable = false } = props;
  return (
    <button {...props} className={styles.btn} disabled={disable}>
      {children}
    </button>
  );
}
