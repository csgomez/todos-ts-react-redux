import todosReducer, { addTodo, removeTodo, updateTodo } from './todosSlice';
import { Todo, TodoDraft } from './Todo';
import { nanoid } from '@reduxjs/toolkit';

const createTodo = (title: string, completed = false): Todo => {
  const now = new Date().toISOString();

  return {
    id: nanoid(),
    title,
    completed,
    dateCreated: now,
    dateCompleted: null,
    dateLastModified: now,
  };
};

// basically a wrapper for strings
const createTodoDraft = (title: string): TodoDraft => {
  return { title };
};

describe('todosSlice', () => {
  it('should handle initial state', () => {
    expect(todosReducer(undefined, { type: 'unknown' })).toEqual([]);
  });

  it('should handle adding todos', () => {
    const todoDraft = createTodoDraft('wash the dishes');

    const nextState = todosReducer([], addTodo(todoDraft));
    expect(nextState).toHaveLength(1);

    const createdTodo = nextState[0];
    expect(createdTodo.title).toBe(todoDraft.title);
    expect(createdTodo.completed).toBe(false);
  });

  it('should handle removing todos', () => {
    const todo = createTodo('buy groceries');
    const initialState = [todo];

    const nextState = todosReducer(initialState, removeTodo(todo.id));
    expect(nextState).toHaveLength(0);
  });

  it('should handle updating todos', () => {
    const title = 'wash the fishes';
    const todo = createTodo(title);
    const initialState = [todo];

    const newTitle = 'wash the dishes';
    const newTodo = { ...todo, title: newTitle };
    const nextState = todosReducer(initialState, updateTodo(newTodo));

    const updatedTodo = nextState[0];

    expect(updatedTodo.title).not.toBe(title);
    expect(updatedTodo.title).toBe(newTitle);
  });
});
