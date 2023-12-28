import { nanoid } from '@reduxjs/toolkit';
import { Todo } from './todosSlice';

const nowDate = new Date();
const now = nowDate.toISOString();

// Create a Date object that is one (1) day older than nowDate
const beforeDate = new Date(nowDate);
beforeDate.setDate(nowDate.getDate() - 1);
const before = beforeDate.toISOString();

export const sampleTodos: Todo[] = [
  {
    title: 'Take the dog for a long walk in the park',
    completed: false,
    dateCreated: now,
    dateCompleted: null,
    dateLastModified: now,
    id: nanoid(),
  },
  {
    title: 'Buy fresh vegetables and fruits from the local market',
    completed: true,
    dateCreated: before,
    dateCompleted: now,
    dateLastModified: now,
    id: nanoid(),
  },
  {
    title: 'Take out the garbage',
    completed: false,
    dateCreated: now,
    dateCompleted: null,
    dateLastModified: now,
    id: nanoid(),
  },
  {
    title: "Replace the Fluke 87's battery",
    completed: false,
    dateCreated: now,
    dateCompleted: null,
    dateLastModified: now,
    id: nanoid(),
  },
  {
    title: "Update the toaster's firmware",
    completed: true,
    dateCreated: before,
    dateCompleted: now,
    dateLastModified: now,
    id: nanoid(),
  },
];
