import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.scss';

type TodoType = { todo: string; id: number; removeTodo: (index: number) => void };

export function Todo({ todo, id, removeTodo }: TodoType) {
  return (
    <div className={styles.todo} onDoubleClick={() => removeTodo(id)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}
