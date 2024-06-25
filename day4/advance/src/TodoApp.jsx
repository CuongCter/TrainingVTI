// components/TodoApp.js
import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoApp = () => {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const addTodo = text => {
    dispatch({ type: 'ADD_TODO', id: Date.now(), text });
  };

  const removeTodo = id => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };

  return (
    <div>
      <h1>Todo List Redux</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Add todo"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            addTodo(inputValue);
            setInputValue('');
          }
        }}
      />
    </div>
  );
};

export default TodoApp;
