import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import { Button } from '../UI/Button.tsx';
import styles from './TodosActions.module.scss';

type TodosActionsType = {
  completedTodosExist: boolean;
  resetTodos: () => void;
  removeCompletedTodos: () => void;
};

export function TodosActions({
  resetTodos,
  removeCompletedTodos,
  completedTodosExist,
}: TodosActionsType) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodos} title="Reset Todos">
        <RiDeleteBin2Line />
      </Button>
      <Button
        onClick={removeCompletedTodos}
        title="Clear completed Todos"
        disabled={!completedTodosExist}
      >
        <RiRefreshLine />
      </Button>
    </div>
  );
}
