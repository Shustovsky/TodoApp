import { useState } from 'react';
import { v4 } from 'uuid';
import { TodoForm } from './components/Todos/TodoForm.tsx';
import { TodoList } from './components/Todos/TodoList.tsx';
import './App.scss';
import { TodosActions } from './components/Todos/TodosActions.tsx';

export type todoType = {
  text: string;
  isCompleted: boolean;
  id: string;
};

export function App() {
  const [todos, setTodos] = useState<todoType[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: v4(),
    };
    setTodos([...todos, newTodo]);
  };
  const removeTodoHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const removeCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          removeCompletedTodos={removeCompletedTodosHandler}
        />
      )}
      <TodoList todos={todos} removeTodo={removeTodoHandler} toggleTodo={toggleTodoHandler} />
      {!!completedTodosCount && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}
