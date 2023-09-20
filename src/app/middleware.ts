import { Middleware } from '@reduxjs/toolkit';
import { TODOS_LOCALSTORAGE_KEY } from '../config';
import { addTodo, removeTodo, updateTodo } from '../features/todos/todosSlice';

const ADD_TODO = addTodo.type;
const REMOVE_TODO = removeTodo.type;
const UPDATE_TODO = updateTodo.type;

export const saveTodosToLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    if (
      action.type === ADD_TODO ||
      action.type === REMOVE_TODO ||
      action.type === UPDATE_TODO
    ) {
      const todos = store.getState().todos;
      try {
        localStorage.setItem(TODOS_LOCALSTORAGE_KEY, JSON.stringify(todos));
      } catch (err) {
        console.error('Error saving todos to localStorage:', err);
      }
    }

    return result;
  };
