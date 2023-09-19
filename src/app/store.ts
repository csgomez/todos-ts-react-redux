import { Middleware, configureStore } from '@reduxjs/toolkit';
import todosSlice from '../features/todos/todosSlice';
import { TODOS_LOCALSTORAGE_KEY } from '../config';
import filterSlice from '../features/filter/filterSlice';

const ADD_TODO = 'todos/addTodo';
const REMOVE_TODO = 'todos/removeTodo';
const UPDATE_TODO = 'todos/updateTodo';

const saveTodosToLocalStorageMiddleware: Middleware =
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
        console.log('Stored the updated todos.');
      } catch (err) {
        console.error('Error saving todos to localStorage:', err);
      }
    }

    return result;
  };

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    filter: filterSlice,
  },
  middleware: [saveTodosToLocalStorageMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
