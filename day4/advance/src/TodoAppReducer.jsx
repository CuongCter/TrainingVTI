import { useReducer } from 'react';
import { initialState, todoReducer } from './reducers/todoListReducer';

function TodoAppReducer() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

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
      <h1>Todo List Reducer</h1>
      <ul>
        {state.todos.map(todo => (
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
        placeholder="Add todo"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
}

export default TodoAppReducer;
