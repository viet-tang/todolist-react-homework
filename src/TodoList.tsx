import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  text: string;
  completed: string; // Change type to string
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleTodo={() => toggleTodo(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;