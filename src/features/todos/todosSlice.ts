import {
  PayloadAction,
  createSelector,
  // createEntityAdapter,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';
import { TODOS_LOCALSTORAGE_KEY } from '../../config';
import { RootState } from '../../app/store';

// const todosAdapter = createEntityAdapter<Todo>({
//   // sort the Todos by dateCreated by default
//   sortComparer: (a, b) => b.dateCreated.getTime() - a.dateCreated.getTime(),
// });

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  dateCreated: string;
  dateCompleted: string | null;
  dateLastModified: string;
}

// only the 'title' property is retained
export type TodoDraft = Omit<
  Todo,
  'id' | 'completed' | 'dateCreated' | 'dateCompleted' | 'dateLastModified'
>;

const getStoredTodos = () => {
  const storedTodos = localStorage.getItem(TODOS_LOCALSTORAGE_KEY) || '[]';
  const parsedTodos = JSON.parse(storedTodos) as Todo[];

  return parsedTodos;
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: getStoredTodos(),
  reducers: {
    addTodo: (state, action: PayloadAction<TodoDraft>) => {
      const { title } = action.payload;
      const now = new Date().toISOString();

      const newTodo: Todo = {
        title,
        completed: false,
        dateCreated: now,
        dateCompleted: null,
        dateLastModified: now,
        id: nanoid(),
      };

      state.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      return state.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const updatedTodo = action.payload;
      const now = new Date().toISOString();

      updatedTodo.dateLastModified = now;
      updatedTodo.dateCompleted = updatedTodo.completed ? now : null;

      return state.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
    },
    setTodos: (_, action) => {
      return action.payload;
    },
  },
});

export const { setTodos, addTodo, removeTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;

export const selectFilteredTodos = createSelector(
  (state: RootState) => state.todos,
  (state: RootState) => state.filter.search,
  (state: RootState) => state.filter.status,
  (todos, searchFilter, statusFilter) => {
    const searchFilteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchFilter.toLowerCase())
    );

    switch (statusFilter) {
      case 'all':
        return searchFilteredTodos;
      case 'completed':
        return searchFilteredTodos.filter((todo) => todo.completed);
      case 'incomplete':
        return searchFilteredTodos.filter((todo) => !todo.completed);
    }
  }
);
