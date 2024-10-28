import React from 'react';
import { FaCheckSquare, FaSquare } from 'react-icons/fa';

interface Todo {
  text: string;
  completed: string;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: () => void;
  deleteTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{ textDecoration: todo.completed === 'true' ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={(event) => { event.stopPropagation(); toggleTodo(); }}
      >
        {todo.completed === 'true' ? <FaCheckSquare /> : <FaSquare />} {todo.text}
      </span>
      <button className="btn btn-danger btn-sm" onClick={(event) => { event.stopPropagation(); deleteTodo(); }}>Delete</button>
    </li>
  );
}

export default TodoItem;