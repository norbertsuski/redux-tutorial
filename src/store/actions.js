// eslint-disable-next-line import/prefer-default-export
export const addTodo = (todo) => ({
  type: 'todos/addTodo',
  payload: { todo },
});
