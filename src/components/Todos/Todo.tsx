import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { todoType } from '../../App.tsx';
import styles from './Todo.module.scss';

type TodoType = {
  todo: todoType;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export function Todo({ todo, removeTodo, toggleTodo }: TodoType) {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => removeTodo(todo.id)} />
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)} />
    </div>
  );
}
