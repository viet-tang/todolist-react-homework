import React, { useState, useEffect, useCallback } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Todo {
  text: string;
  completed: string; // Change type to string
}

const LOCAL_STORAGE_KEY = 'todos';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    const storedTodos: Todo[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Failed to save todos to localStorage:', error);
    }
  }, [todos]);

  const addTodo = useCallback((text: string) => {
    setTodos((prevTodos) => [...prevTodos, { text, completed: 'false' }]);
  }, []);

  const toggleTodo = useCallback((index: number) => {
    setTodos((prevTodos) => {
      let newTodos = [...prevTodos];
      newTodos[index].completed = newTodos[index].completed === 'true' ? 'false' : 'true';
      return newTodos;
    });
  }, []);

  const deleteTodo = useCallback((index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }, []);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return todo.completed === 'false';
    if (filter === 'completed') return todo.completed === 'true';
  });

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <div className="btn-group mb-3" role="group">
        <button className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
        <button className={`btn btn-outline-primary ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>Active</button>
        <button className={`btn btn-outline-primary ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;