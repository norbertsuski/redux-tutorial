const initialState = {
  todos: [{ id: 0, title: 'test1' }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/addTodo':
      return { ...state, todos: [...state.todos, action.payload.todo] };
    default:
      return state;
  }
};

export default reducer;
