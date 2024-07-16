export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

let nextTodoId = 1;

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    title,
    completed: false,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const updateTodo = (id, title) => ({
  type: UPDATE_TODO,
  payload: { id, title },
});