import { Todo } from './Todo.tsx';
import styles from './TodoList.module.scss';

type TodoListType = {
  todos: string[];
  removeTodo: (index: number) => void;
};

export function TodoList({ todos, removeTodo }: TodoListType) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length ? (
        todos.map((todo, index) => (
          <Todo key={index} todo={todo} id={index} removeTodo={removeTodo} />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}
