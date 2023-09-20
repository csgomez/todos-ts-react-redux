import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../features/todos/todosSlice';
import filterSlice from '../features/filter/filterSlice';
import { saveTodosToLocalStorageMiddleware } from './middleware';

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    filter: filterSlice,
  },
  middleware: [saveTodosToLocalStorageMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
