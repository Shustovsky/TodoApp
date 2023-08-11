type TodoType = { todo: string; id: number; removeTodo: (index: number) => void };

export function Todo({ todo, id, removeTodo }: TodoType) {
  function onClickTodo() {
    removeTodo(id);
  }

  return <h3 onDoubleClick={onClickTodo}>{todo}</h3>;
}
