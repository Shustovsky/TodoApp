import styles from './Button.module.scss';

type ButtonType = {
  name: string;
};

export function Button({ name }: ButtonType) {
  return (
    <button type="submit" className={styles.btn}>
      {name}
    </button>
  );
}
