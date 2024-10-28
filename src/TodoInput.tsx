import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">Add Todo</button>
    </form>
  );
}

export default TodoInput;