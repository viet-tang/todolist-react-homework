import React from 'react';

interface Todo {
  text: string;
  completed: string; // Change type to string
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: () => void;
  deleteTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event bubbling
    toggleTodo();
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{ textDecoration: todo.completed === 'true' ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={handleToggle}
      >
        {todo.text}
      </span>
      <button className="btn btn-danger btn-sm" onClick={(event) => { event.stopPropagation(); deleteTodo(); }}>Delete</button>
    </li>
  );
}

export default TodoItem;