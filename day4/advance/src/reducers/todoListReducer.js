const initialState = {
    todos: [],
  };
  
  function todoReducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { id: action.id, text: action.text, completed: false }],
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.id),
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      default:
        throw new Error('Unknown action type');
    }
  }
  
  export { initialState, todoReducer };
  