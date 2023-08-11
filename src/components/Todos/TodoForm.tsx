import React, { useState } from 'react';
import styles from './TodoForm.module.scss';

type TodoFormType = {
  addTodo: (e: string) => void;
};

export function TodoForm({ addTodo }: TodoFormType) {
  const [text, setText] = useState<string>('');

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
