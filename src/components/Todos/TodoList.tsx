import { Todo } from './Todo.tsx';
import styles from './TodoList.module.scss';
import { todoType } from '../../App.tsx';

type TodoListType = {
  todos: todoType[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export function TodoList({ todos, removeTodo, toggleTodo }: TodoListType) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length ? (
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}
