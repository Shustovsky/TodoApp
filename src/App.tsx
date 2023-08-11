import { useState } from 'react';
import { TodoForm } from './components/Todos/TodoForm.tsx';
import { TodoList } from './components/Todos/TodoList.tsx';
import './App.scss';

export function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodoHandler = (text: string) => setTodos([...todos, text]);

  const removeTodoHandler = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}
